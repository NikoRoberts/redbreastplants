#!/bin/bash
RAILS_IMAGES="/tmp/redbreastplants/app/assets/images"
OUTPUT="/Users/niko/work/cockpit/redbreast-worker/src/assets.ts"

echo "// Auto-generated image assets as base64" > $OUTPUT
echo "" >> $OUTPUT

# Essential images
echo "export const logoGif = \`$(base64 -i $RAILS_IMAGES/logo.gif)\`;" >> $OUTPUT
echo "" >> $OUTPUT

echo "export const faviconPng = \`$(base64 -i $RAILS_IMAGES/favicon.png)\`;" >> $OUTPUT
echo "" >> $OUTPUT

echo "export const banner3Jpg = \`$(base64 -i $RAILS_IMAGES/banner3.jpg)\`;" >> $OUTPUT
echo "" >> $OUTPUT

echo "export const img1Png = \`$(base64 -i $RAILS_IMAGES/img1.png)\`;" >> $OUTPUT
echo "" >> $OUTPUT

echo "export const img2Png = \`$(base64 -i $RAILS_IMAGES/img2.png)\`;" >> $OUTPUT
echo "" >> $OUTPUT

echo "export const img3Png = \`$(base64 -i $RAILS_IMAGES/img3.png)\`;" >> $OUTPUT
echo "" >> $OUTPUT

echo "export const img4Gif = \`$(base64 -i $RAILS_IMAGES/img4.gif)\`;" >> $OUTPUT
echo "" >> $OUTPUT

echo "export const DSC_2818 = \`$(base64 -i $RAILS_IMAGES/DSC_2818small.jpg)\`;" >> $OUTPUT
echo "" >> $OUTPUT

echo "export const DSC_2824 = \`$(base64 -i $RAILS_IMAGES/DSC_2824small.jpg)\`;" >> $OUTPUT
echo "" >> $OUTPUT

# For hobart page - use first hobart image
echo "export const hobartImg1 = \`$(base64 -i $RAILS_IMAGES/hobart-native-plant-nursery-1.jpg)\`;" >> $OUTPUT
echo "" >> $OUTPUT

# Tubestock background is large (1.7MB), let's use a placeholder
echo "export const tubestockImg = '';" >> $OUTPUT

echo "Done! Generated $OUTPUT"
wc -c $OUTPUT
