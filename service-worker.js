// ===== MA PLAST GROUP - Service Worker with Push Notifications =====
const CACHE_NAME = 'ma-plast-v2';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/about.html',
    '/contact.html',
    '/privacy.html',
    '/offline.html',
    '/style.css',
    '/script.js',
    '/manifest.json'
];

// ===== Install =====
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// ===== Activate =====
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
            );
        }).then(() => self.clients.claim())
    );
});

// ===== Fetch =====
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cached) => {
            if (cached) return cached;
            return fetch(e.request).catch(() => {
                if (e.request.destination === 'document') {
                    return caches.match('/offline.html');
                }
            });
        })
    );
});

// ===== Push Notifications =====
self.addEventListener('push', (e) => {
    if (!e.data) return;

    const data = e.data.json();
    const title = data.title || 'MA PLAST GROUP';
    const options = {
        body: data.body || 'Check out our latest products!',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: data.tag || 'general',
        requireInteraction: data.requireInteraction || false,
        actions: data.actions || [],
        data: data.url ? { url: data.url } : {},
        vibrate: [200, 100, 200],
        image: data.image || undefined,
        timestamp: Date.now(),
        dir: 'ltr',
        renotify: false,
        silent: false
    };

    e.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// ===== Notification Click =====
self.addEventListener('notificationclick', (e) => {
    e.notification.close();

    const notificationData = e.notification.data || {};
    let targetUrl = notificationData.url || '/index.html';

    // Handle action clicks
    if (e.action === 'view') {
        targetUrl = notificationData.url || '/index.html';
    } else if (e.action === 'dismiss') {
        return;
    } else if (e.action === 'cart') {
        targetUrl = '/index.html#products';
    }

    e.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((windowClients) => {
                // Focus existing tab if open
                for (const client of windowClients) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        client.focus();
                        client.postMessage({ type: 'navigate', url: targetUrl });
                        return;
                    }
                }
                // Open new window
                if (clients.openWindow) {
                    return clients.openWindow(targetUrl);
                }
            })
    );
});

// ===== Background Sync (for cart persistence) =====
self.addEventListener('sync', (e) => {
    if (e.tag === 'sync-cart') {
        e.waitUntil(syncCart());
    }
});

async function syncCart() {
    // Placeholder for cart sync logic
    // In a real app, this would sync cart data with a server
    console.log('[SW] Cart sync attempted');
}

// ===== Periodic Background Sync (for notifications) =====
self.addEventListener('periodicsync', (e) => {
    if (e.tag === 'check-new-products') {
        e.waitUntil(checkNewProducts());
    }
});

async function checkNewProducts() {
    // Trigger a local notification about new products
    // In a real app, this would fetch from a server
    console.log('[SW] Checking for new products...');
}
