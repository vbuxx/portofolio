const fs = require("fs");
const globby = require("globby");

function addPage(page) {
  const path = page.replace("pages", "").replace(".js", "").replace(".mdx", "");
  const route = path === "/index" ? "" : path;

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
