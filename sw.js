const CACHE_NAME = 'AVANCE-lideranca-v1';
const assets = [
  'index.html',
  'avaliacao.html',
  'personalizar.html',
  'certificado_final.html',
  'logo1-512.png',
  'manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
