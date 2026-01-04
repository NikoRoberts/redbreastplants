import { parse } from 'csv-parse/sync';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

// Path to CSV file
const CSV_PATH = '/Users/niko/work/cockpit/plants_for_embeddings.csv';
const OUTPUT_PATH = '/Users/niko/work/cockpit/redbreast-worker/src/data/plants.json';
const SQLITE_PATH = '/Users/niko/work/cockpit/production2.sqlite3';

// Slugify function (matches Rails parameterize)
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Get plants with photos from SQLite
function getPlantsWithPhotos(): Set<string> {
  const result = execSync(
    `sqlite3 "${SQLITE_PATH}" "SELECT botanical_name FROM plants WHERE photo IS NOT NULL AND photo != '' AND (deleted = 0 OR deleted IS NULL)"`,
    { encoding: 'utf-8' }
  );
  return new Set(result.trim().split('\n').filter(Boolean));
}

// Read and parse CSV
const csvContent = readFileSync(CSV_PATH, 'utf-8');
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

// Get plants with photos
const plantsWithPhotos = getPlantsWithPhotos();
console.log(`Found ${plantsWithPhotos.size} plants with photos`);

// Transform records
const plants = records.map((record: Record<string, string>) => {
  const botanicalName = record.botanical_name || '';
  const slug = slugify(botanicalName);
  const hasPhoto = plantsWithPhotos.has(botanicalName);

  return {
    slug,
    botanical_name: botanicalName,
    common_name: record.common_name || null,
    alternative_names: record.alternative_names || null,
    comments: record.comments || null,
    height_minimum: record.height_minimum ? parseFloat(record.height_minimum) : null,
    height_maximum: record.height_maximum ? parseFloat(record.height_maximum) : null,
    average_height: record.average_height ? parseFloat(record.average_height) : null,
    average_width: record.average_width ? parseFloat(record.average_width) : null,
    flower_colour_and_season: record.flower_colour_and_season || null,
    position: record.position || null,
    soil_types: record.soil_types || null,
    drainage: record.drainage || null,
    frost_snow: record.frost_snow || null,
    wind_resistance: record.wind_resistance || null,
    drought_tolerance: record.drought_tolerance || null,
    coastal_tolerance: record.coastal_tolerance || null,
    fire: record.fire || null,
    bush_food: record.bush_food || null,
    bush_food_comments: record.bush_food_comments || null,
    timber_comments: record.timber_comments || null,
    timber_maturing_time: record.timber_maturing_time || null,
    has_photo: hasPhoto,
    // Boolean attributes for filtering
    is_endemic: record.e_for_endemic === 'E' || record.e_for_endemic === 'e',
    is_groundcover: record.g_for_groundcover === '1' || record.g_for_groundcover === 'true',
    is_bird_attracting: record.b_for_bird_attracting === 'B' || record.b_for_bird_attracting === 'b',
    is_drought_tolerant: record.v_for_very_drought === 'V' || record.v_for_very_drought === 'v',
    is_coastal: record.c_for_coastal === '1' || record.c_for_coastal === 'true',
    is_tasmanian: record.t_for_tasmanian === '1' || record.t_for_tasmanian === 'true',
    is_wet_area: record.w_for_wet_area === '1' || record.w_for_wet_area === 'true',
    is_frost_hardy: record.h_for_hardiness === '1' || record.h_for_hardiness === 'true',
    is_dappled_shade: record.d_for_dappled === '1' || record.d_for_dappled === 'true',
  };
});

// Write output
const output = { plants };
writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));

console.log(`Converted ${plants.length} plants to JSON`);
console.log(`Output written to ${OUTPUT_PATH}`);
