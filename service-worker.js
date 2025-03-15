const CACHE_NAME = 'momentum-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/profile.html',
  '/jordan.html',
  '/walter.html',
  '/dashboard.html',
  '/workouts.html',
  '/videos.html',
  '/recipes.html',
  '/Styles.css',
  '/Fitness.js',
  '/manifest.json',
  '/icons/icon-72x72.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install the service worker and cache app assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});