// ===== MA PLAST GROUP - Service Worker with Local Notifications =====
const CACHE_NAME = 'ma-plast-unified-nav-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/about.html',
    '/contact.html',
    '/privacy.html',
    '/notifications.html',
    '/offline.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png',
    '/screenshot-wide.png',
    '/screenshot-mobile.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
            .catch(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    // Pages: network first so new HTML updates open correctly inside the app.
    if (request.mode === 'navigate' || request.destination === 'document') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() => caches.match(request).then((cached) => cached || caches.match('/offline.html')))
        );
        return;
    }

    // Local static assets: cache first.
    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;
            return fetch(request).then((response) => {
                const copy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                return response;
            });
        })
    );
});

function normalizeNotificationData(raw = {}) {
    return {
        title: raw.title || 'MA PLAST GROUP',
        body: raw.body || 'Browse products and send your order instantly.',
        icon: raw.icon || '/icon-192.png',
        badge: raw.badge || '/icon-192.png',
        tag: raw.tag || 'ma-plast-update',
        requireInteraction: Boolean(raw.requireInteraction),
        actions: Array.isArray(raw.actions) ? raw.actions : [],
        data: { url: raw.url || raw.actionUrl || '/index.html' },
        vibrate: [200, 100, 200],
        timestamp: Date.now(),
        dir: 'ltr',
        renotify: false,
        silent: false
    };
}

self.addEventListener('push', (event) => {
    if (!event.data) return;

    let data = {};
    try { data = event.data.json(); }
    catch { data = { body: event.data.text() }; }

    const options = normalizeNotificationData(data);
    event.waitUntil(self.registration.showNotification(options.title, options));
});

// Allows notifications.html / script.js to request a local notification from the Service Worker.
self.addEventListener('message', (event) => {
    const data = event.data || {};
    if (data.type !== 'showNotification') return;

    const options = normalizeNotificationData(data);
    event.waitUntil(self.registration.showNotification(options.title, options));
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const targetUrl = (event.notification.data && event.notification.data.url) || '/index.html';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            for (const client of windowClients) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    client.focus();
                    client.postMessage({ type: 'navigate', url: targetUrl });
                    return;
                }
            }
            if (clients.openWindow) return clients.openWindow(targetUrl);
        })
    );
});
