const CACHE_NAME = "safar-v1";
const urlsToCache = [
  "/BanswaraTourism/",
  "/BanswaraTourism/index.html",
  "/BanswaraTourism/style.css",
  "/BanswaraTourism/script.js",
  "/BanswaraTourism/manifest.json",
  "/BanswaraTourism/icons/icon-192.png",
  "/BanswaraTourism/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});