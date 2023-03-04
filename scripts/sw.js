const staticMoneda = "dev-cv-v1"
const assets = [
    "/pwa-cv/docs/",
    "/pwa-cv/images/",
    "/pwa-cv/index.html",
    "/pwa-cv/scripts/",
    "/pwa-cv/manifest.json",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMoneda).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})