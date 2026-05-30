const CACHE_NAME = "ma-plast-cache-v8";
const APP_SHELL = [
  "/",
  "/index.html",
  "/privacy.html",
  "/about.html",
  "/contact.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/offline.html",
  "/icon-192.png",
  "/icon-512.png",
  "/screenshot-wide.png",
  "/screenshot-mobile.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names.map(name => name !== CACHE_NAME ? caches.delete(name) : Promise.resolve())
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match("/offline.html")))
  );
});
