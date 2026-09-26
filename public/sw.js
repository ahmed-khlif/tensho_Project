// Service Worker for PWA
const CACHE_NAME = 'tensho-academy-v2';
const urlsToCache = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/testimonials',
  '/manifest.json',
  '/icon.svg',
  '/tensho-logo.png'
];

// Install Service Worker
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from cache
self.addEventListener('fetch', event => {
  // Always fetch HTML navigations first so deployments cannot hydrate against
  // an outdated cached page.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseCopy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Update Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
