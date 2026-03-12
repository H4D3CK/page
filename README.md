# Web Project

This is a simple web project configured with Webpack for development and production builds. It includes basic HTML, CSS, and JavaScript assets.

## Structure

- `index.html` - Main entry HTML file.
- `404.html` - Custom error page.
- `css/style.css` - Stylesheet.
- `img/` - Image assets.
- `js/app.js` - Primary JavaScript application code.
- `js/script.js` - Additional scripting.
- `js/vendor/` - Third-party libraries.
- `webpack.common.js` - Webpack common configuration.
- `webpack.config.dev.js` - Development webpack configuration.
- `webpack.config.prod.js` - Production webpack configuration.
- `package.json` - Project metadata and npm scripts.
- `vercel.json` - Configuration for deployment on Vercel.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Development build:
   ```bash
   npm run dev
   ```

3. Production build:
   ```bash
   npm run build
   ```

## Deployment

The project is configured for deployment on Vercel. Adjust `vercel.json` if needed.

## License

See `LICENSE.txt` for licensing information.