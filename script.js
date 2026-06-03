// ===== Products =====
const products = [
    { id: 1, name: "فيز 1/2\"", price: 15.60, category: "لسته اسعار الفيز", package: 100, discount: 10, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 2, name: "فيز 3/4\"", price: 15.80, category: "لسته اسعار الفيز", package: 100, discount: 12, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 3, name: "فيز 1\"", price: 16.10, category: "لسته اسعار الفيز", package: 100, discount: 11, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 4, name: "فيز 1 1/4\" - 40 mm", price: 18.00, category: "لسته اسعار الفيز", package: 100, discount: 15, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 5, name: "فيز 1 1/2\"", price: 20.00, category: "لسته اسعار الفيز", package: 80, discount: 10, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 6, name: "فيز 2\"", price: 20.80, category: "لسته اسعار الفيز", package: 80, discount: 12, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 7, name: "فيز 2 1/2\" - 75 mm", price: 39.50, category: "لسته اسعار الفيز", package: 60, discount: 18, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 8, name: "فيز 3\" - 90 mm", price: 40.00, category: "لسته اسعار الفيز", package: 60, discount: 16, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 9, name: "فيز 4\" - 110/114 mm", price: 43.00, category: "لسته اسعار الفيز", package: 40, discount: 14, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 10, name: "فيز 6\" - 160 mm", price: 55.00, category: "لسته اسعار الفيز", package: 30, discount: 20, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 11, name: "مسمار حوض لوكس", price: 18.70, category: "لسته اسعار المسامير", package: 100, discount: 13, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 12, name: "مسمار سخان لوكس", price: 16.70, category: "لسته اسعار المسامير", package: 100, discount: 10, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 13, name: "مسمار قاعدة لوكس 4 مسمار", price: 16.40, category: "لسته اسعار المسامير", package: 100, discount: 12, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 14, name: "مسمار قاعدة لوكس 2 مسمار", price: 12.00, category: "لسته اسعار المسامير", package: 100, discount: 8, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 15, name: "طقم مسمار اكسسوار 12 مسمار", price: 20.00, category: "لسته اسعار المسامير", package: 100, discount: 15, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 16, name: "طقم مسمار اكسسوار 2 مسمار رف", price: 23.00, category: "لسته اسعار المسامير", package: 100, discount: 18, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 17, name: "مسمار كيلوباترا", price: 18.25, category: "لسته اسعار المسامير", package: 200, discount: 11, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 18, name: "مسمار سديلي مجره", price: 8.00, category: "لسته اسعار المسامير", package: 250, discount: 9, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 19, name: "مسمار سديلي ديورافيت", price: 15.00, category: "لسته اسعار المسامير", package: 250, discount: 14, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 20, name: "وصلة استالس 304 مقاس 30 cm", price: 58.00, category: "وصلات استالس 1/2 × 1/2 304", package: 100, discount: 15, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 21, name: "وصلة استالس 304 مقاس 40 cm", price: 61.00, category: "وصلات استالس 1/2 × 1/2 304", package: 100, discount: 12, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 22, name: "وصلة استالس 304 مقاس 50 cm", price: 65.00, category: "وصلات استالس 1/2 × 1/2 304", package: 100, discount: 14, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 23, name: "وصلة استالس 304 مقاس 60 cm", price: 69.00, category: "وصلات استالس 1/2 × 1/2 304", package: 100, discount: 16, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 24, name: "وصلة استالس 304 مقاس 70 cm", price: 75.00, category: "وصلات استالس 1/2 × 1/2 304", package: 50, discount: 10, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 25, name: "وصلة استالس 304 مقاس 80 cm", price: 84.00, category: "وصلات استالس 1/2 × 1/2 304", package: 50, discount: 13, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 26, name: "وصلة استالس 304 مقاس 100 cm", price: 89.00, category: "وصلات استالس 1/2 × 1/2 304", package: 50, discount: 18, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 27, name: "وصلة شجرة استالس 304 مقاس 40 cm", price: 55.00, category: "وصلات شجرة استالس 304", package: 100, discount: 10, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 28, name: "وصلة شجرة استالس 304 مقاس 50 cm", price: 61.00, category: "وصلات شجرة استالس 304", package: 100, discount: 12, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 29, name: "وصلة شجرة استالس 304 مقاس 60 cm", price: 65.00, category: "وصلات شجرة استالس 304", package: 100, discount: 15, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 30, name: "شطاف اوتوماتيك", price: 162.00, category: "شطاف اوتوماتيك", package: 1, discount: 20, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" }
];

let cart = JSON.parse(localStorage.getItem('ma_plast_cart_v1')) || [];

// ===== DOM =====
const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');
const cartCountEl = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const mobileOverlay = document.getElementById('mobileOverlay');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const whatsappBtn = document.getElementById('whatsappBtn');
const paginationEl = document.getElementById('pagination');
const productsCountEl = document.getElementById('productsCount');

const DESKTOP_PRODUCTS_PER_PAGE = 8;
const MOBILE_PRODUCTS_PER_PAGE = 6;
let currentPage = 1;

function getProductsPerPage() {
    return window.innerWidth <= 768 ? MOBILE_PRODUCTS_PER_PAGE : DESKTOP_PRODUCTS_PER_PAGE;
}
const mobileMenuIcon = document.querySelector('.mobile-menu-btn i');

function setMobileMenuIcon(isOpen) {
    if (!mobileMenuIcon) return;
    mobileMenuIcon.classList.toggle('fa-bars', !isOpen);
    mobileMenuIcon.classList.toggle('fa-times', isOpen);
}


// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
    initScroll();
    initActiveNav();
    initScrollReveal();
    initMaPlastPushPrompt();
    initNewsletterForm();
    initAboutImageReveal();
});

// ===== Scroll =====
function initScroll() {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                navLinks.classList.remove('active');
                mobileOverlay.classList.remove('active');
                setMobileMenuIcon(false);
                document.body.style.overflow = '';
            }
        });
    });
}

// ===== Active Nav =====
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 100) current = s.id;
        });
        links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
    });
}

// ===== Scroll Reveal System =====
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ===== About Image Reveal =====
function initAboutImageReveal() {
    const aboutImg = document.querySelector('.about-img');
    if (!aboutImg) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutImg.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutImg);
}

// ===== Mobile Menu =====
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    setMobileMenuIcon(navLinks.classList.contains('active'));
    if (cartSidebar && cartSidebar.classList.contains('active')) closeCart();
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

// ===== Toast =====
function showToast(msg) {
    if (!toastMessage || !toast) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function getOldPrice(product) {
    const discount = Number(product.discount || 0);
    if (!discount) return Number(product.price || 0);
    return Number(product.price || 0) / (1 - discount / 100);
}

// ===== Render Products =====
function renderProducts(page = currentPage) {
    if (!productsGrid) return;

    const totalPages = Math.ceil(products.length / getProductsPerPage());
    currentPage = Math.min(Math.max(page, 1), totalPages);

    const start = (currentPage - 1) * getProductsPerPage();
    const end = start + getProductsPerPage();
    const visibleProducts = products.slice(start, end);

    productsGrid.innerHTML = visibleProducts.map((p, i) => {
        const oldPrice = getOldPrice(p);
        const hasDiscount = Number(p.discount || 0) > 0;
        return `
        <div class="product-card compact-premium-card minimal-clean-card" style="animation-delay: ${i * 0.06}s">
            ${hasDiscount ? `<div class="discount-corner">-${p.discount}%</div>` : ''}

            <div class="minimal-card-shell">
                <div class="minimal-main-row">
                    <div class="minimal-image-wrap">
                        <div class="product-image">
                            <img src="${p.image}" alt="${p.name}" loading="lazy">
                        </div>
                    </div>

                    <div class="minimal-details">
                        <h3 class="product-name">${p.name}</h3>
                        <div class="product-meta"><i class="fas fa-box"></i> العبوة: <strong>${p.package || 1}</strong></div>

                        <div class="minimal-price-block">
                            <div class="current-price">
                                <strong>${p.price.toFixed(2)}</strong>
                                <span>جنيه</span>
                            </div>
                            ${hasDiscount ? `<div class="old-price">${oldPrice.toFixed(2)} جنيه</div>` : ''}
                        </div>
                    </div>
                </div>

                <button class="add-to-cart compact-cart-btn minimal-cart-btn" onclick="addToCart(${p.id})">
                    <i class="fas fa-cart-plus"></i> أضف إلى السلة
                </button>
            </div>
        </div>
    `}).join('');

    renderPagination(totalPages);

    if (productsCountEl) {
        const first = start + 1;
        const last = Math.min(end, products.length);
        productsCountEl.textContent = `عرض ${first}-${last} من ${products.length} منتج`;
        const perPageText = document.getElementById('productsPerPageText');
        if (perPageText) {
            perPageText.innerHTML = `<i class="fas fa-layer-group"></i> ${getProductsPerPage()} منتج في الصفحة`;
        }
    }
}

function renderPagination(totalPages) {
    if (!paginationEl) return;

    const pages = [];
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    startPage = Math.max(1, endPage - maxButtons + 1);

    for (let page = startPage; page <= endPage; page++) {
        pages.push(`<button class="page-btn ${page === currentPage ? 'active' : ''}" onclick="goToPage(${page})">${page}</button>`);
    }

    paginationEl.innerHTML = `
        <button class="page-btn page-arrow" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
        ${startPage > 1 ? '<button class="page-btn" onclick="goToPage(1)">1</button><span class="page-dots">...</span>' : ''}
        ${pages.join('')}
        ${endPage < totalPages ? `<span class="page-dots">...</span><button class="page-btn" onclick="goToPage(${totalPages})">${totalPages}</button>` : ''}
        <button class="page-btn page-arrow" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
}

function goToPage(page) {
    const totalPages = Math.ceil(products.length / getProductsPerPage());
    if (page < 1 || page > totalPages) return;
    renderProducts(page);
    const productsSection = document.getElementById('products');
    if (productsSection) {
        window.scrollTo({ top: productsSection.offsetTop - 90, behavior: 'smooth' });
    }
}

// ===== Add to Cart =====
function addToCart(id) {
    const item = cart.find(i => i.id === id);
    const product = products.find(p => p.id === id);
    if (item) {
        item.quantity++;
        showToast(`${product.name} updated`);
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
        showToast(`${product.name} added`);
    }
    saveCart();
    renderCart();

    // Dispatch cart update event for notifications
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: cart.reduce((s, i) => s + i.quantity, 0) } }));
}

// ===== Remove =====
function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    showToast('Removed');
}

// ===== Update Qty =====
function updateQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) removeFromCart(id);
    else { saveCart(); renderCart(); }
}

// ===== Save Cart =====
function saveCart() {
    localStorage.setItem('ma_plast_cart_v1', JSON.stringify(cart));
}

// ===== Render Cart =====
function renderCart() {
    if (!cartCountEl || !totalPriceEl || !cartItems || !whatsappBtn) return;
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

    cartCountEl.textContent = totalItems;
    totalPriceEl.textContent = total.toFixed(2) + ' جنيه';
    whatsappBtn.disabled = cart.length === 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>السلة فارغة</p>
                <a href="#products" class="btn btn-primary btn-sm" onclick="toggleCart()">ابدأ التسوق</a>
            </div>`;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)} جنيه</div>
                <div class="qty-row">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Cart Toggle =====
function toggleCart() {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileOverlay.classList.remove('active');
        setMobileMenuIcon(false);
    }
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== WhatsApp =====
function sendWhatsAppOrder() {
    if (cart.length === 0) { showToast('السلة فارغة'); return; }

    let msg = '*MA PLAST GROUP - طلب جديد*\n';
    msg += '==================\n\n';
    cart.forEach((item, i) => {
        msg += `${i + 1}. ${item.name}\n`;
        msg += `   ${item.quantity} x ${item.price.toFixed(2)} = ${(item.price * item.quantity).toFixed(2)} جنيه\n\n`;
    });
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    msg += '==================\n';
    msg += `*الإجمالي: ${total.toFixed(2)} جنيه*\n\n`;
    msg += 'برجاء تأكيد الطلب، شكرًا لك.';

    window.open(`https://wa.me/201225588521?text=${encodeURIComponent(msg)}`, '_blank');
    showToast('جارٍ فتح واتساب');
}

// ===== Escape =====
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (cartSidebar && cartSidebar.classList.contains('active')) closeCart();
        if (typeof notificationPanel !== 'undefined' && notificationPanel && notificationPanel.classList.contains('active')) toggleNotificationPanel();
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileOverlay.classList.remove('active');
            setMobileMenuIcon(false);
            document.body.style.overflow = '';
        }
    }
});

// ===== Resize =====
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        mobileOverlay.classList.remove('active');
        setMobileMenuIcon(false);
        if (!cartSidebar.classList.contains('active')) document.body.style.overflow = '';
    }
});

// NOTIFICATION SYSTEM - CLEAN USER VERSION + 30 MINUTE LOCAL SCHEDULE
// ============================================================

let notifications = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];
let notificationPermission = localStorage.getItem('ma_plast_notification_permission') || 'default';
let notificationPanel = null;
let notificationOverlay = null;
let notificationToggle = null;
let notificationCount = null;
let scheduledNotificationTimer = null;

const NOTIFICATION_SETTINGS_KEY = 'ma_plast_notification_settings_v1';
const NOTIFICATION_INTERVAL_MS = 30 * 60 * 1000;

function removeOldDemoNotifications() {
    const demoIds = ['notif_1', 'notif_2', 'notif_3', 'notif_4'];
    const before = notifications.length;
    notifications = notifications.filter((item) => !demoIds.includes(item.id));
    if (before !== notifications.length) saveNotifications();
}

function getNotificationSettings() {
    const defaults = {
        enabled: false,
        title: 'MA PLAST GROUP',
        body: 'تصفح المنتجات وأرسل طلبك فورًا عبر واتساب.',
        url: '/index.html#products',
        intervalMinutes: 30,
        lastSentAt: 0
    };

    try {
        return { ...defaults, ...JSON.parse(localStorage.getItem(NOTIFICATION_SETTINGS_KEY) || '{}') };
    } catch (error) {
        return defaults;
    }
}

function saveNotificationSettings(settings) {
    localStorage.setItem(NOTIFICATION_SETTINGS_KEY, JSON.stringify(settings));
}

function initNotifications() {
    removeOldDemoNotifications();
    // Hidden from user screens. Do not create bell, panel, or settings links here.
    if (!document.body.classList.contains('notifications-backend')) return;
    createNotificationElements();
    updateNotificationBadge();

    window.addEventListener('cartUpdated', () => updateNotificationBadge());

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('message', (e) => {
            if (e.data && e.data.type === 'navigate') {
                window.location.href = e.data.url;
            }
        });
    }

    startScheduledNotifications();
}

function createNotificationElements() {
    if (document.getElementById('notificationPanel')) return;

    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
        const notifToggle = document.createElement('button');
        notifToggle.className = 'notification-toggle';
        notifToggle.id = 'notificationToggle';
        notifToggle.setAttribute('onclick', 'toggleNotificationPanel()');
        notifToggle.setAttribute('aria-label', 'الإشعارات');
        notifToggle.innerHTML = `
            <i class="fas fa-bell notification-bell-icon"></i>
            <span class="notification-count" id="notificationCount" style="display:none">0</span>
        `;
        navActions.insertBefore(notifToggle, navActions.firstChild);
        notificationToggle = notifToggle;
        notificationCount = document.getElementById('notificationCount');
    }

    const notifPanel = document.createElement('div');
    notifPanel.className = 'notification-panel';
    notifPanel.id = 'notificationPanel';
    notifPanel.innerHTML = `
        <div class="notification-panel-header">
            <h3><i class="fas fa-bell"></i> الإشعارات</h3>
            <div class="notification-panel-actions">
                <a href="notifications.html" title="Notification settings"><i class="fas fa-gear"></i></a>
                <button onclick="markAllNotificationsRead()" title="تعيين الكل كمقروء"><i class="fas fa-check-double"></i></button>
                <button onclick="toggleNotificationPanel()" title="إغلاق"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="notification-list" id="notificationList"></div>
    `;
    document.body.appendChild(notifPanel);
    notificationPanel = notifPanel;

    const notifOverlay = document.createElement('div');
    notifOverlay.className = 'notification-overlay';
    notifOverlay.id = 'notificationOverlay';
    notifOverlay.setAttribute('onclick', 'toggleNotificationPanel()');
    document.body.appendChild(notifOverlay);
    notificationOverlay = notifOverlay;

    renderNotifications();
}

function renderNotifications() {
    const list = document.getElementById('notificationList');
    if (!list) return;

    if (notifications.length === 0) {
        list.innerHTML = `
            <div class="notification-empty">
                <i class="fas fa-bell-slash"></i>
                <p>No notifications yet</p>
                <a href="notifications.html">Notification settings</a>
            </div>
        `;
        return;
    }

    const sorted = [...notifications].sort((a, b) => {
        if (a.read !== b.read) return a.read ? 1 : -1;
        return b.time - a.time;
    });

    list.innerHTML = sorted.map((n) => `
        <div class="notification-item ${n.read ? 'read' : 'unread'}" onclick="handleNotificationClick('${n.id}', '${n.actionUrl || ''}')">
            <div class="notification-item-dot"></div>
            <div class="notification-item-icon icon-${n.type}">
                <i class="fas ${getNotificationIcon(n.type)}"></i>
            </div>
            <div class="notification-item-content">
                <div class="notification-item-title">${escapeHtml(n.title)}</div>
                <div class="notification-item-body">${escapeHtml(n.body)}</div>
                <div class="notification-item-time">${formatTime(n.time)}</div>
            </div>
            <button class="notification-item-delete" onclick="event.stopPropagation(); deleteNotification('${n.id}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

function getNotificationIcon(type) {
    const icons = {
        promo: 'fa-tag',
        order: 'fa-box',
        product: 'fa-star',
        cart: 'fa-shopping-cart',
        system: 'fa-info-circle'
    };
    return icons[type] || 'fa-bell';
}

function formatTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    if (diff < 604800000) return Math.floor(diff / 86400000) + 'd ago';
    return new Date(timestamp).toLocaleDateString();
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

function handleNotificationClick(id, url) {
    markNotificationRead(id);
    if (url) {
        if (url.startsWith('http') || url.startsWith('https')) window.open(url, '_blank');
        else window.location.href = url;
    }
    toggleNotificationPanel();
}

function markNotificationRead(id) {
    const notif = notifications.find((n) => n.id === id);
    if (notif) {
        notif.read = true;
        saveNotifications();
        renderNotifications();
        updateNotificationBadge();
    }
}

function markAllNotificationsRead() {
    notifications.forEach((n) => n.read = true);
    saveNotifications();
    renderNotifications();
    updateNotificationBadge();
    showToast('All marked as read');
}

function deleteNotification(id) {
    notifications = notifications.filter((n) => n.id !== id);
    saveNotifications();
    renderNotifications();
    updateNotificationBadge();
}

function updateNotificationBadge() {
    if (!notificationCount || !notificationToggle) return;
    const unreadCount = notifications.filter((n) => !n.read).length;
    if (unreadCount > 0) {
        notificationCount.textContent = unreadCount > 99 ? '99+' : unreadCount;
        notificationCount.style.display = 'flex';
        notificationToggle.classList.add('has-unread');
    } else {
        notificationCount.style.display = 'none';
        notificationToggle.classList.remove('has-unread');
    }
}

function saveNotifications() {
    localStorage.setItem('ma_plast_notifications_v1', JSON.stringify(notifications));
}

function toggleNotificationPanel() {
    if (!notificationPanel) return;
    const isActive = notificationPanel.classList.contains('active');

    if (!isActive) {
        if (cartSidebar && cartSidebar.classList.contains('active')) closeCart();
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileOverlay.classList.remove('active');
            setMobileMenuIcon(false);
        }
    }

    notificationPanel.classList.toggle('active');
    notificationOverlay.classList.toggle('active');
    document.body.style.overflow = notificationPanel.classList.contains('active') ? 'hidden' : '';
    renderNotifications();
}

function addLocalNotification({ title, body, type = 'promo', actionUrl = '#products', showBrowser = true }) {
    const newNotif = {
        id: 'notif_' + Date.now(),
        title,
        body,
        type,
        time: Date.now(),
        read: false,
        actionUrl
    };

    notifications.unshift(newNotif);
    notifications = notifications.slice(0, 50);
    saveNotifications();
    renderNotifications();
    updateNotificationBadge();

    if (showBrowser) showBrowserNotification(newNotif);
    return newNotif;
}

function showBrowserNotification(notif) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;

    const payload = {
        type: 'showNotification',
        title: notif.title,
        body: notif.body,
        tag: notif.id,
        url: notif.actionUrl || '/index.html#products',
        icon: '/icon-192.png',
        badge: '/icon-192.png'
    };

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            if (registration.active) registration.active.postMessage(payload);
            else registration.showNotification(payload.title, payload);
        });
    } else {
        new Notification(payload.title, payload);
    }
}

function startScheduledNotifications() {
    if (scheduledNotificationTimer) clearInterval(scheduledNotificationTimer);

    const tick = () => {
        const settings = getNotificationSettings();
        if (!settings.enabled) return;

        const intervalMs = Math.max(1, Number(settings.intervalMinutes || 30)) * 60 * 1000;
        const lastSentAt = Number(settings.lastSentAt || 0);
        if (Date.now() - lastSentAt < intervalMs) return;

        addLocalNotification({
            title: settings.title || 'MA PLAST GROUP',
            body: settings.body || 'Browse products and send your order instantly via WhatsApp.',
            type: 'promo',
            actionUrl: settings.url || '#products',
            showBrowser: true
        });

        saveNotificationSettings({ ...settings, lastSentAt: Date.now() });
    };

    tick();
    scheduledNotificationTimer = setInterval(tick, 60 * 1000);
}

function requestNotificationPermission() {
    if (!('Notification' in window)) {
        showToast('الإشعارات غير مدعومة في هذا المتصفح');
        return;
    }

    Notification.requestPermission().then((permission) => {
        notificationPermission = permission;
        localStorage.setItem('ma_plast_notification_permission', permission);
        showToast(permission === 'granted' ? 'تم تفعيل الإشعارات' : 'تم إيقاف الإشعارات');
    });
}



// ===== Navbar Notification Icon Only =====
function initNavbarNotificationIcon() {
    const badge = document.getElementById('notificationCount');
    if (!badge) return;

    const notifications = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];
    const unreadCount = notifications.filter(n => !n.read).length;

    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'flex' : 'none';
}


// ===== Notification Icon Opens Panel Only =====
// This keeps notifications inside the navbar/panel and does not open notifications.html.
function initNotificationsPanelOnly() {
    removeOldDemoNotificationsSafe();
    createNotificationPanelOnly();
    updateNotificationBadgeOnly();
}

function removeOldDemoNotificationsSafe() {
    const list = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];
    const cleaned = list.filter(n => {
        const title = (n.title || '').toLowerCase();
        const body = (n.body || '').toLowerCase();
        return !title.includes('test') && !body.includes('test') && !title.includes('welcome');
    });
    localStorage.setItem('ma_plast_notifications_v1', JSON.stringify(cleaned));
}

function createNotificationPanelOnly() {
    if (document.getElementById('notificationPanel')) return;

    const panel = document.createElement('div');
    panel.className = 'notification-panel';
    panel.id = 'notificationPanel';
    panel.innerHTML = `
        <div class="notification-panel-header">
            <h3><i class="fas fa-bell"></i> الإشعارات</h3>
            <div class="notification-panel-actions">
                <button type="button" onclick="markAllNotificationsRead()">تعيين الكل كمقروء</button>
                <button type="button" onclick="clearAllNotifications()">مسح</button>
                <button type="button" onclick="toggleNotificationPanel()"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="notification-list" id="notificationList"></div>
    `;
    document.body.appendChild(panel);
    renderNotificationListOnly();
}

function toggleNotificationPanel() {
    if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
        showOneSignalPrompt();
    }
    const panel = document.getElementById('notificationPanel');
    if (!panel) {
        createNotificationPanelOnly();
    }

    const currentPanel = document.getElementById('notificationPanel');
    currentPanel.classList.toggle('active');

    if (typeof cartSidebar !== 'undefined' && cartSidebar && cartSidebar.classList.contains('active')) {
        closeCart();
    }

    renderNotificationListOnly();
}

function renderNotificationListOnly() {
    const listEl = document.getElementById('notificationList');
    if (!listEl) return;

    const list = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];

    if (list.length === 0) {
        listEl.innerHTML = `
            <div class="notification-empty">
                <i class="fas fa-bell-slash"></i>
                <p>No notifications yet</p>
            </div>
        `;
        updateNotificationBadgeOnly();
        return;
    }

    listEl.innerHTML = list.slice().reverse().map(n => `
        <div class="notification-item ${n.read ? 'read' : 'unread'}" onclick="markNotificationRead('${n.id}')">
            <div class="notification-item-dot"></div>
            <div class="notification-item-icon icon-system"><i class="fas fa-bell"></i></div>
            <div class="notification-item-content">
                <div class="notification-item-title">${escapeNotificationHtml(n.title || 'MA PLAST GROUP')}</div>
                <div class="notification-item-body">${escapeNotificationHtml(n.body || '')}</div>
                <div class="notification-item-time">${formatNotificationTime(n.time || Date.now())}</div>
            </div>
            <button class="notification-item-delete" onclick="event.stopPropagation(); deleteNotification('${n.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    updateNotificationBadgeOnly();
}

function updateNotificationBadgeOnly() {
    const badge = document.getElementById('notificationCount');
    if (!badge) return;

    const list = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];
    const unreadCount = list.filter(n => !n.read).length;

    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'flex' : 'none';
}

function markNotificationRead(id) {
    const list = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];
    const notification = list.find(n => String(n.id) === String(id));
    if (notification) notification.read = true;
    localStorage.setItem('ma_plast_notifications_v1', JSON.stringify(list));
    renderNotificationListOnly();
}

function markAllNotificationsRead() {
    const list = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];
    list.forEach(n => n.read = true);
    localStorage.setItem('ma_plast_notifications_v1', JSON.stringify(list));
    renderNotificationListOnly();
}

function clearAllNotifications() {
    localStorage.setItem('ma_plast_notifications_v1', JSON.stringify([]));
    renderNotificationListOnly();
}

function deleteNotification(id) {
    const list = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];
    const filtered = list.filter(n => String(n.id) !== String(id));
    localStorage.setItem('ma_plast_notifications_v1', JSON.stringify(filtered));
    renderNotificationListOnly();
}

function escapeNotificationHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    }[char]));
}

function formatNotificationTime(time) {
    const date = new Date(time);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleString();
}




// ============================================================
function initOneSignalProfessionalPrompt() {
    createOneSignalPromptUI();

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(async function(OneSignal) {
        try {
            updateOneSignalPromptState();

            OneSignal.Notifications.addEventListener('permissionChange', function(permission) {
                localStorage.setItem('ma_plast_push_permission_seen', 'yes');
                updateOneSignalPromptState();
                if (permission) {
                    addLocalNotification({
                        title: 'تم تفعيل الإشعارات',
                        body: 'You will now receive MA PLAST offers and updates.',
                        type: 'system'
                    });
                }
            });

            setTimeout(function() {
                const seen = localStorage.getItem('ma_plast_push_permission_seen');
                if (!seen && Notification.permission === 'default') {
                    showOneSignalPrompt();
                }
            }, 2500);
        } catch (error) {
            console.warn('[OneSignal] Prompt setup failed', error);
        }
    });
}

function createOneSignalPromptUI() {
    if (document.getElementById('pushPermissionPrompt')) return;

    const prompt = document.createElement('div');
    prompt.className = 'push-permission-prompt';
    prompt.id = 'pushPermissionPrompt';
    prompt.innerHTML = `
        <button class="push-prompt-close" onclick="hideOneSignalPrompt()" aria-label="إغلاق"><i class="fas fa-times"></i></button>
        <div class="push-prompt-icon"><i class="fas fa-bell"></i></div>
        <div class="push-prompt-content">
            <h4>استقبل العروض والتحديثات</h4>
            <p>فعّل الإشعارات ليصلك كل جديد من المنتجات والعروض وتحديثات الطلب من MA PLAST.</p>
        </div>
        <div class="push-prompt-actions">
            <button type="button" class="push-allow" onclick="requestOneSignalPermission()">سماح</button>
            <button type="button" class="push-later" onclick="hideOneSignalPrompt()">لاحقًا</button>
        </div>
    `;
    document.body.appendChild(prompt);
}

function showOneSignalPrompt() {
    const prompt = document.getElementById('pushPermissionPrompt');
    if (prompt) prompt.classList.add('show');
}

function hideOneSignalPrompt() {
    const prompt = document.getElementById('pushPermissionPrompt');
    if (prompt) prompt.classList.remove('show');
    localStorage.setItem('ma_plast_push_permission_seen', 'yes');
}

function requestOneSignalPermission() {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(async function(OneSignal) {
        try {
            await OneSignal.Notifications.requestPermission();
            localStorage.setItem('ma_plast_push_permission_seen', 'yes');
            hideOneSignalPrompt();
            updateOneSignalPromptState();
        } catch (error) {
            console.warn('[OneSignal] Permission request failed', error);
            showToast('فشل طلب صلاحية الإشعارات');
        }
    });
}

function updateOneSignalPromptState() {
    const isGranted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
    const notificationIcon = document.querySelector('.navbar-notification-link');
    if (notificationIcon) {
        notificationIcon.classList.toggle('push-enabled', isGranted);
    }
}

function addLocalNotification(notification) {
    const list = JSON.parse(localStorage.getItem('ma_plast_notifications_v1')) || [];
    list.push({
        id: Date.now().toString(),
        title: notification.title || 'MA PLAST GROUP',
        body: notification.body || '',
        type: notification.type || 'system',
        read: false,
        time: Date.now()
    });
    localStorage.setItem('ma_plast_notifications_v1', JSON.stringify(list));
    if (typeof renderNotificationListOnly === 'function') renderNotificationListOnly();
    if (typeof updateNotificationBadgeOnly === 'function') updateNotificationBadgeOnly();
}




function showBlockedPermissionHelp() {
    let box = document.getElementById('pushPermissionHelp');
    if (!box) {
        box = document.createElement('div');
        box.id = 'pushPermissionHelp';
        box.className = 'push-permission-help';
        box.innerHTML = `
            <button class="push-help-close" onclick="document.getElementById('pushPermissionHelp').remove()"><i class="fas fa-times"></i></button>
            <h4>تفعيل الإشعارات يدويًا</h4>
            <p>اضغط على رمز القفل أو الإعدادات بجوار رابط الموقع، ثم غيّر الإشعارات إلى سماح. بعد ذلك حدّث الصفحة واضغط سماح مرة أخرى.</p>
        `;
        document.body.appendChild(box);
    }
    box.classList.add('show');
}








// ===== Custom MA PLAST Push Prompt =====
// This shows a professional branded prompt first.
// The real browser permission popup appears only after the user presses "Enable".
function initMaPlastPushPrompt() {
    createMaPlastPushPrompt();

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(async function(OneSignal) {
        try {
            updatePushPromptStatus();

            const alreadySeen = localStorage.getItem('ma_plast_custom_push_seen') === 'yes';
            const isGranted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
            const isDenied = typeof Notification !== 'undefined' && Notification.permission === 'denied';

            if (!alreadySeen && !isGranted && !isDenied) {
                setTimeout(showMaPlastPushPrompt, 2500);
            }
        } catch (error) {
            console.warn('[MA PLAST Push] init failed', error);
        }
    });
}

function createMaPlastPushPrompt() {
    if (document.getElementById('maPlastPushPrompt')) return;

    const prompt = document.createElement('div');
    prompt.className = 'ma-push-prompt';
    prompt.id = 'maPlastPushPrompt';
    prompt.innerHTML = `
        <div class="ma-push-card">
            <button class="ma-push-close" type="button" onclick="dismissMaPlastPushPrompt()" aria-label="إغلاق">
                <i class="fas fa-times"></i>
            </button>

            <div class="ma-push-icon">
                <i class="fas fa-bell"></i>
            </div>

            <div class="ma-push-content">
                <span class="ma-push-kicker">MA PLAST GROUP</span>
                <h3>ابقَ على اطلاع</h3>
                <p>فعّل الإشعارات لتصلك أحدث منتجات السباكة والعروض وتحديثات الطلب.</p>

                <div class="ma-push-actions">
                    <button type="button" class="ma-push-primary" onclick="enableMaPlastPush()">
                        <i class="fas fa-bell"></i>
                        تفعيل الإشعارات
                    </button>
                    <button type="button" class="ma-push-secondary" onclick="dismissMaPlastPushPrompt()">
                        لاحقًا
                    </button>
                </div>

                <small class="ma-push-note">يمكنك إيقاف ذلك في أي وقت من إعدادات المتصفح.</small>
            </div>
        </div>
    `;
    document.body.appendChild(prompt);
}

function showMaPlastPushPrompt() {
    const prompt = document.getElementById('maPlastPushPrompt');
    if (prompt) prompt.classList.add('show');
}

function hideMaPlastPushPrompt() {
    const prompt = document.getElementById('maPlastPushPrompt');
    if (prompt) prompt.classList.remove('show');
}

function dismissMaPlastPushPrompt() {
    localStorage.setItem('ma_plast_custom_push_seen', 'yes');
    hideMaPlastPushPrompt();
}

async function enableMaPlastPush() {
    if (typeof Notification === 'undefined') {
        showToastSafe('الإشعارات غير مدعومة في هذا المتصفح');
        return;
    }

    if (Notification.permission === 'denied') {
        showToastSafe('الإشعارات محظورة. فعّلها من إعدادات المتصفح.');
        showMaPlastPermissionHelp();
        return;
    }

    try {
        const permission = await Notification.requestPermission();

        if (permission !== 'granted') {
            showToastSafe('يرجى اختيار سماح لتفعيل الإشعارات');
            return;
        }

        window.OneSignalDeferred = window.OneSignalDeferred || [];
        OneSignalDeferred.push(async function(OneSignal) {
            try {
                if (
                    OneSignal.User &&
                    OneSignal.User.PushSubscription &&
                    typeof OneSignal.User.PushSubscription.optIn === 'function'
                ) {
                    await OneSignal.User.PushSubscription.optIn();
                }

                localStorage.setItem('ma_plast_custom_push_seen', 'yes');
                hideMaPlastPushPrompt();
                updatePushPromptStatus();
                showToastSafe('تم تفعيل الإشعارات');
            } catch (error) {
                console.warn('[MA PLAST Push] optIn failed', error);
                showToastSafe('Permission allowed. Refresh and try again.');
            }
        });
    } catch (error) {
        console.warn('[MA PLAST Push] permission failed', error);
        showToastSafe('Notification permission failed');
    }
}

function showMaPlastPermissionHelp() {
    let help = document.getElementById('maPlastPushHelp');
    if (!help) {
        help = document.createElement('div');
        help.id = 'maPlastPushHelp';
        help.className = 'ma-push-help';
        help.innerHTML = `
            <button type="button" onclick="document.getElementById('maPlastPushHelp').remove()">
                <i class="fas fa-times"></i>
            </button>
            <h4>الإشعارات محظورة</h4>
            <p>اضغط على رمز القفل أو الإعدادات بجوار رابط الموقع، ثم افتح إعدادات الموقع، وغيّر الإشعارات إلى سماح، وبعدها حدّث الصفحة.</p>
        `;
        document.body.appendChild(help);
    }
    help.classList.add('show');
}

function updatePushPromptStatus() {
    const icon = document.querySelector('.navbar-notification-link');
    const isGranted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
    if (icon) icon.classList.toggle('push-enabled', isGranted);
}

function showToastSafe(message) {
    if (typeof showToast === 'function') {
        showToast(message);
    } else {
        console.log(message);
    }
}

function checkOneSignalStatus() {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(async function(OneSignal) {
        const status = {
            browserPermission: typeof Notification !== 'undefined' ? Notification.permission : 'not-supported',
            oneSignalId: OneSignal.User ? OneSignal.User.onesignalId : null,
            pushSubscriptionId: OneSignal.User && OneSignal.User.PushSubscription ? OneSignal.User.PushSubscription.id : null,
            token: OneSignal.User && OneSignal.User.PushSubscription ? OneSignal.User.PushSubscription.token : null,
            optedIn: OneSignal.User && OneSignal.User.PushSubscription ? OneSignal.User.PushSubscription.optedIn : null,
            serviceWorkerController: navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.controller.scriptURL : null
        };
        console.log('[OneSignal Status]', status);
        return status;
    });
}


let lastProductsPerPage = getProductsPerPage();
window.addEventListener('resize', () => {
    const nowProductsPerPage = getProductsPerPage();
    if (nowProductsPerPage !== lastProductsPerPage) {
        lastProductsPerPage = nowProductsPerPage;
        currentPage = 1;
        renderProducts();
    }
});








// ===== Footer Email Subscription - direct FormSubmit with welcome autoresponse =====
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmail');
    const status = document.getElementById('newsletterStatus');
    if (!form || !emailInput || !status) return;

    form.addEventListener('submit', () => {
        const email = emailInput.value.trim();
        if (!email) return;

        localStorage.setItem('ma_plast_newsletter_email', email);
        status.textContent = 'جارٍ الإرسال...';
        status.className = 'newsletter-status is-loading';

        setTimeout(() => {
            status.textContent = 'إذا كانت هذه أول مرة، أكّد FormSubmit من Gmail. بعد التأكيد سيتم إرسال رسائل الترحيب تلقائيًا.';
            status.className = 'newsletter-status is-success';
        }, 1000);
    });
}
