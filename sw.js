const staticCacheName = "site-static-v2";

const assets = [
    "/",
    "/index.html",
    "/src/app.js",
    "/src/fetchData.js",
    "/src/index.js",
    "/styles/styles.css",
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400;700&display=swap",
    "https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIxsdP3pBmtF8A.woff2"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("activate", e => {
    console.log("service worker activated");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        })
    );
});