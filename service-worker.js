// ===== MA PLAST GROUP - Service Worker =====
// Upload this file to GitHub and name it exactly: service-worker.js

const CACHE_NAME = 'ma-plast-v5';

const APP_SHELL = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/privacy.html',
  '/offline.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Install new version immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
      .catch((error) => {
        console.warn('[Service Worker] Install cache failed:', error);
        return self.skipWaiting();
      })
  );
});

// Delete old caches and take control immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Main fetch handler
self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  // Do not cache or intercept external files like Google Fonts, Font Awesome, images CDN, maps, etc.
  if (url.origin !== self.location.origin) {
    return;
  }

  // Pages / HTML navigation: Network First
  // This fixes old pages opening inside the installed app.
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(networkFirstForPages(request));
    return;
  }

  // Static local files: Stale While Revalidate
  event.respondWith(staleWhileRevalidate(request));
});

// Network first for HTML pages
async function networkFirstForPages(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const offlineResponse = await cache.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }

    return new Response('You are offline.', {
      status: 503,
      statusText: 'Offline',
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

// Stale while revalidate for local static assets
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  const networkPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => null);

  if (cachedResponse) {
    return cachedResponse;
  }

  const networkResponse = await networkPromise;
  if (networkResponse) {
    return networkResponse;
  }

  return new Response('', {
    status: 504,
    statusText: 'Gateway Timeout'
  });
}

// Push notifications
self.addEventListener('push', (event) => {
  if (!event.data) {
    return;
  }

  let data = {};

  try {
    data = event.data.json();
  } catch (error) {
    data = {
      title: 'MA PLAST GROUP',
      body: event.data.text()
    };
  }

  const title = data.title || 'MA PLAST GROUP';

  const options = {
    body: data.body || 'Check out our latest products!',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: data.tag || 'general',
    requireInteraction: Boolean(data.requireInteraction),
    actions: Array.isArray(data.actions) ? data.actions : [],
    data: {
      url: data.url || '/index.html'
    },
    vibrate: [200, 100, 200],
    image: data.image || undefined,
    timestamp: Date.now(),
    dir: 'ltr',
    renotify: false,
    silent: false
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const notificationData = event.notification.data || {};
  let targetUrl = notificationData.url || '/index.html';

  if (event.action === 'dismiss') {
    return;
  }

  if (event.action === 'cart') {
    targetUrl = '/index.html#products';
  }

  event.waitUntil(openOrFocusClient(targetUrl));
});

async function openOrFocusClient(targetUrl) {
  const windowClients = await clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  });

  for (const client of windowClients) {
    if (client.url.includes(self.location.origin) && 'focus' in client) {
      await client.focus();

      if ('postMessage' in client) {
        client.postMessage({
          type: 'navigate',
          url: targetUrl
        });
      }

      return;
    }
  }

  if (clients.openWindow) {
    return clients.openWindow(targetUrl);
  }
}

// Background sync placeholder
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-cart') {
    event.waitUntil(syncCart());
  }
});

async function syncCart() {
  console.log('[Service Worker] Cart sync attempted');
}

// Periodic background sync placeholder
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'check-new-products') {
    event.waitUntil(checkNewProducts());
  }
});

async function checkNewProducts() {
  console.log('[Service Worker] Checking for new products');
}
