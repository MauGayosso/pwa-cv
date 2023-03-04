const CACHE_NAME = `dev-cv-v1`;

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/pwa-cv/scrips/sw.js");
}
self.addEventListener("activate", event => {
    console.log("WORKER: activate event in progress.");
});
// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
        "/pwa-cv/docs/",
        "/pwa-cv/images/",
        "/pwa-cv/index.html",
        "/pwa-cv/scripts/",
        "/pwa-cv/manifest.json"
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    // If it's not in the cache, get it from the network.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
    }
  })());
});