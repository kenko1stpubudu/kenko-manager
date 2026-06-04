const CACHE='kenko-mgr-v1';
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){self.clients.claim();});
self.addEventListener('fetch',function(e){
  if(e.request.url.includes('firebase')||e.request.url.includes('gstatic')){
    e.respondWith(fetch(e.request)); return;
  }
  e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request);}));
});