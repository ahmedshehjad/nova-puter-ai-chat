/* Nova AI Chat service worker: cache the app shell for offline loading. */
const CACHE_NAME = 'nova-ai-chat-shell-v3';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon.svg'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request, {ignoreSearch: true});
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok && (request.mode === 'navigate' || url.pathname.endsWith('.css') || url.pathname.endsWith('.js') || url.pathname.endsWith('.svg') || url.pathname.endsWith('.webmanifest'))) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        return (await cache.match('./index.html')) || new Response('Nova is offline. Reconnect and try again.', {status: 503, headers: {'Content-Type':'text/plain; charset=utf-8'}});
      }
      throw error;
    }
  })());
});
