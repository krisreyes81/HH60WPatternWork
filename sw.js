/* Offline copy for the HH-60 Formation Sim. Bump CACHE when you upload a new index.html. */
var CACHE='hh60-sim-v1';
var FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  var page=e.request.mode==='navigate';
  e.respondWith((page
    /* the page itself: try the network first so updates show up, fall back to the saved copy */
    ?fetch(e.request).then(function(r){var copy=r.clone();caches.open(CACHE).then(function(c){c.put('index.html',copy);});return r;}).catch(function(){return caches.match('index.html');})
    /* everything else, fonts included: saved copy first, then network, and keep what comes back */
    :caches.match(e.request).then(function(hit){
      return hit||fetch(e.request).then(function(r){var copy=r.clone();caches.open(CACHE).then(function(c){c.put(e.request,copy);});return r;});
    })
  ));
});
