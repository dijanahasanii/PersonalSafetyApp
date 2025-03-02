export default function sitemap() {
  return [
    { path: "/", lastModified: new Date().toISOString() },
    { path: "/sos", lastModified: new Date().toISOString() },
    { path: "/contacts", lastModified: new Date().toISOString() },
    { path: "/explore", lastModified: new Date().toISOString() },
  ];
}
