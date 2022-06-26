var staticCacheName = 'v10';

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        '/static/styles/style.css',
        '/static/styles/mdi.css',
        '/static/images/logo.png',
        '/static/images/icons/128.png',
        '/static/images/icons/192.png',
        '/static/images/icons/512.png',
        '/static/fonts/materialdesignicons-webfont.eot?v=5.3.45',
        '/static/fonts/materialdesignicons-webfont.ttf?v=5.3.45',
        '/static/fonts/materialdesignicons-webfont.woff?v=5.3.45',
        '/static/fonts/materialdesignicons-webfont.woff2?v=5.3.45',
        '/static/scripts/script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    if (requestUrl.origin === location.origin) {
      if ((requestUrl.pathname === '/')) {
        return event.respondWith(
          caches.match('/').then(function(response) {
            return response || fetch(event.request);
          }).catch(function(error) {
            return caches.match('/');
          })
        );
      }
    }
    return event.respondWith(
      caches.open(staticCacheName).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        }).catch(function(error) {
          return caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
          }).catch(function(error) {
            return caches.match('/');
          })
        });
      })
    );
  }
  return event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }).catch(function() {
      return fetch(event.request).then(function(response) {
        return response;
      }).catch(function(error) {
        return caches.match('/');
      })
    })
  );
});
self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return !([staticCacheName].includes(cacheName));
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});