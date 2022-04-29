let cacheName = 'v1:static';

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll([
        './',
        './css/bootstrap.min.css',
        './js/bootstrap.min.js',
        './index.html'
      ]).then(function(){
        self.skipWaiting();
      });
    })
  );
});

self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response){
        return response;
      }
      return fetch(event.request);
    })
  );
});
