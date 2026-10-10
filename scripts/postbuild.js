import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

if (fs.existsSync(distDir)) {
  const indexPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');

    // Routes that need direct static entry points for zero-404 live hosting
    const routes = ['admin', 'about', 'parents', 'tutors', 'how-it-works', 'contact'];

    for (const route of routes) {
      const routeDir = path.join(distDir, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent, 'utf8');
      console.log(`Generated static fallback route: /${route}/index.html`);
    }

    // 404 fallback for SPAs on static web hosts (GitHub Pages, Cloudflare Pages, S3/CloudFront)
    fs.writeFileSync(path.join(distDir, '404.html'), indexContent, 'utf8');

    // Netlify / Cloudflare redirects file
    fs.writeFileSync(path.join(distDir, '_redirects'), '/* /index.html 200\n', 'utf8');
    console.log('Post-build routing assets successfully generated.');
  }
}
