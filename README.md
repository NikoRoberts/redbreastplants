# Redbreast Plants Website

A Cloudflare Worker-based website for [Redbreast Plants](https://www.redbreastplants.com), an Australian native plant nursery in Tasmania.

## Tech Stack

- **Runtime**: Cloudflare Workers
- **Framework**: [Hono](https://hono.dev/) - lightweight web framework
- **Styling**: Tailwind CSS (via CDN)
- **Storage**: Cloudflare R2 for images
- **Data**: JSON embedded in worker

## Features

- 500+ native plant pages with SEO-optimized URLs
- Responsive design with Tailwind CSS
- Fast edge delivery via Cloudflare's global network
- Plant photos served from R2 storage

## Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Deploy
npm run deploy
```

## Deployment

Automatic deployment via GitHub Actions on push to `main` branch.

### Required Secrets

Set these in GitHub repository settings:

- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Workers permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

## Project Structure

```
src/
├── index.ts          # Main worker entry, routes
├── assets.ts         # Base64-encoded static images
├── data/
│   └── plants.json   # Plant data
├── templates/        # HTML templates
│   ├── layout.ts
│   ├── home.ts
│   ├── about.ts
│   ├── contact.ts
│   ├── maps.ts
│   ├── plant-list.ts
│   ├── plant.ts
│   ├── hobart.ts
│   └── tubestock.ts
└── styles/
    └── main.ts       # CSS styles
```

## License

Private - All rights reserved.
