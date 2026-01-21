const CACHE_NAME = "osaka-travel-v8";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./manifest.json",
  // CDN 資源快取
  "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
];

// 額外快取的 CDN 資源（字型檔等）
const CDN_CACHE = "osaka-cdn-v1";
const CDN_URLS = ["https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"];

// 安裝 Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting()),
  );
});

// 啟用 Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME && key !== CDN_CACHE)
            .map((key) => caches.delete(key)),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// 攔截請求
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 處理 CDN 資源（字型、圖標等）
  if (CDN_URLS.some((cdn) => event.request.url.startsWith(cdn))) {
    event.respondWith(
      caches.open(CDN_CACHE).then((cache) => {
        return cache.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((response) => {
            if (response.ok) {
              cache.put(event.request, response.clone());
            }
            return response;
          });
        });
      }),
    );
    return;
  }

  // 只處理同源請求
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // 有快取就用快取，同時背景更新
      const fetchPromise = fetch(event.request)
        .then((response) => {
          // 更新快取
          if (response.ok) {
            const clone = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    }),
  );
});
