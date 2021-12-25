const staticCacheName = "site-static-v2";

const assets = [
    "/",
    "/index.html",
    "/favicon.ico",
    "/styles/styles.css",
    "/images/didier-weemaels-unsplash-500px.jpg",
    "/images/icon-512x512.png",
    "/images/icon-384x384.png",
    "/images/icon-256x256.png",
    "/images/icon-192x192.png",
];

self.addEventListener('install', evt => {
    evt.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    );
});

self.addEventListener('install', evt => {
    console.log('service worker installed');
});
  
self.addEventListener('activate', evt => {
    console.log('service worker activated');
});

self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});