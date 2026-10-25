const CACHE = "yiyi-v7";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()).catch(() => self.skipWaiting()));
});

// Drop every older cache, then take over open pages.
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;                              // never touch API calls
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;               // fonts, Gemini, Claude: straight to network
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() =>
      // Look only inside THIS version's cache. caches.match() searches every
      // cache in creation order, so a leftover older one could serve a stale
      // app after an update.
      caches.open(CACHE).then(c => c.match(req).then(hit => hit || c.match("./index.html")))
    )
  );
});
