// ===== Products =====
const products = [
    { id: 1, name: "PVC Pipe 1/2 Inch", price: 25.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 2, name: "PVC Pipe 3/4 Inch", price: 35.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 3, name: "PVC Pipe 1 Inch", price: 48.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 4, name: "PVC Elbow Fitting", price: 18.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 5, name: "PVC Tee Fitting", price: 22.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 6, name: "PVC Coupling", price: 16.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 7, name: "Brass Faucet Mixer", price: 185.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 8, name: "Kitchen Faucet", price: 240.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 9, name: "Bathroom Faucet", price: 210.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 10, name: "Shower Mixer", price: 320.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 11, name: "Shower Head Set", price: 275.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 12, name: "Sink Drain Pipe", price: 45.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 13, name: "Flexible Hose 60cm", price: 38.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 14, name: "Angle Valve", price: 55.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 15, name: "Ball Valve 1/2 Inch", price: 75.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 16, name: "Gate Valve 1 Inch", price: 145.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 17, name: "Water Heater 30L", price: 950.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 18, name: "Water Heater 50L", price: 1200.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 19, name: "Water Heater 80L", price: 1650.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 20, name: "Water Pump 0.5HP", price: 620.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 21, name: "Water Pump 1HP", price: 850.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 22, name: "Pressure Pump", price: 1350.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 23, name: "Toilet Seat Ceramic", price: 450.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 24, name: "Basin Mixer", price: 260.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 25, name: "Floor Drain", price: 65.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 26, name: "Pipe Wrench 12 Inch", price: 95.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 27, name: "Pipe Wrench 18 Inch", price: 145.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 28, name: "Plumber Tape", price: 12.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 29, name: "Thread Seal Tape Pack", price: 35.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 30, name: "Silicone Sealant", price: 68.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 31, name: "PPR Pipe 20mm", price: 42.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 32, name: "PPR Pipe 25mm", price: 58.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 33, name: "PPR Elbow 20mm", price: 14.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 34, name: "PPR Tee 25mm", price: 20.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 35, name: "PPR Coupling 32mm", price: 24.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 36, name: "Drain Cover Stainless", price: 85.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 37, name: "Shattaf Set", price: 160.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 38, name: "Flush Tank", price: 420.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 39, name: "Bathroom Accessories Set", price: 350.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 40, name: "Water Filter Housing", price: 290.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 41, name: "Filter Cartridge", price: 95.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 42, name: "Copper Valve", price: 180.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 43, name: "Chrome Bottle Trap", price: 220.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 44, name: "PVC Solvent Cement", price: 55.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 45, name: "Inspection Chamber Cover", price: 240.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 46, name: "Garden Hose 20m", price: 210.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 47, name: "Hose Connector Set", price: 70.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 48, name: "Sink Mixer Pullout", price: 520.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 49, name: "Thermostatic Mixer", price: 780.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 50, name: "Submersible Pump", price: 1450.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 51, name: "PVC Pipe 1/2 Inch - Pro 2", price: 32.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 52, name: "PVC Pipe 3/4 Inch - Pro 2", price: 42.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 53, name: "PVC Pipe 1 Inch - Pro 2", price: 55.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 54, name: "PVC Elbow Fitting - Pro 2", price: 25.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 55, name: "PVC Tee Fitting - Pro 2", price: 29.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 56, name: "PVC Coupling - Pro 2", price: 23.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 57, name: "Brass Faucet Mixer - Pro 2", price: 192.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 58, name: "Kitchen Faucet - Pro 2", price: 247.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 59, name: "Bathroom Faucet - Pro 2", price: 217.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 60, name: "Shower Mixer - Pro 2", price: 327.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 61, name: "Shower Head Set - Pro 2", price: 282.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 62, name: "Sink Drain Pipe - Pro 2", price: 52.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 63, name: "Flexible Hose 60cm - Pro 2", price: 45.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 64, name: "Angle Valve - Pro 2", price: 62.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 65, name: "Ball Valve 1/2 Inch - Pro 2", price: 82.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 66, name: "Gate Valve 1 Inch - Pro 2", price: 152.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 67, name: "Water Heater 30L - Pro 2", price: 957.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 68, name: "Water Heater 50L - Pro 2", price: 1207.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 69, name: "Water Heater 80L - Pro 2", price: 1657.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 70, name: "Water Pump 0.5HP - Pro 2", price: 627.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 71, name: "Water Pump 1HP - Pro 2", price: 857.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 72, name: "Pressure Pump - Pro 2", price: 1357.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 73, name: "Toilet Seat Ceramic - Pro 2", price: 457.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 74, name: "Basin Mixer - Pro 2", price: 267.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 75, name: "Floor Drain - Pro 2", price: 72.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 76, name: "Pipe Wrench 12 Inch - Pro 2", price: 102.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 77, name: "Pipe Wrench 18 Inch - Pro 2", price: 152.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 78, name: "Plumber Tape - Pro 2", price: 19.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 79, name: "Thread Seal Tape Pack - Pro 2", price: 42.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 80, name: "Silicone Sealant - Pro 2", price: 75.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 81, name: "PPR Pipe 20mm - Pro 2", price: 49.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 82, name: "PPR Pipe 25mm - Pro 2", price: 65.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 83, name: "PPR Elbow 20mm - Pro 2", price: 21.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 84, name: "PPR Tee 25mm - Pro 2", price: 27.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 85, name: "PPR Coupling 32mm - Pro 2", price: 31.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 86, name: "Drain Cover Stainless - Pro 2", price: 92.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 87, name: "Shattaf Set - Pro 2", price: 167.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 88, name: "Flush Tank - Pro 2", price: 427.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 89, name: "Bathroom Accessories Set - Pro 2", price: 357.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 90, name: "Water Filter Housing - Pro 2", price: 297.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 91, name: "Filter Cartridge - Pro 2", price: 102.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 92, name: "Copper Valve - Pro 2", price: 187.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
    { id: 93, name: "Chrome Bottle Trap - Pro 2", price: 227.00, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop" },
    { id: 94, name: "PVC Solvent Cement - Pro 2", price: 62.00, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" },
    { id: 95, name: "Inspection Chamber Cover - Pro 2", price: 247.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
    { id: 96, name: "Garden Hose 20m - Pro 2", price: 217.00, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop" },
    { id: 97, name: "Hose Connector Set - Pro 2", price: 77.00, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
    { id: 98, name: "Sink Mixer Pullout - Pro 2", price: 527.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
    { id: 99, name: "Thermostatic Mixer - Pro 2", price: 787.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { id: 100, name: "Submersible Pump - Pro 2", price: 1457.00, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" }
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

const PRODUCTS_PER_PAGE = 8;
let currentPage = 1;
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
    initNotificationsPanelOnly();
    initOneSignalProfessionalPrompt();
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
    if (cartSidebar.classList.contains('active')) closeCart();
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

// ===== Toast =====
function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// ===== Render Products =====
function renderProducts(page = currentPage) {
    if (!productsGrid) return;

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    currentPage = Math.min(Math.max(page, 1), totalPages);

    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const visibleProducts = products.slice(start, end);

    productsGrid.innerHTML = visibleProducts.map((p, i) => `
        <div class="product-card" style="animation-delay: ${i * 0.07}s">
            <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
            <div class="product-info">
                <h3 class="product-name">${p.name}</h3>
                <p class="product-price">${p.price.toFixed(2)} EGP</p>
                <button class="add-to-cart" onclick="addToCart(${p.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    renderPagination(totalPages);

    if (productsCountEl) {
        const first = start + 1;
        const last = Math.min(end, products.length);
        productsCountEl.textContent = `Showing ${first}-${last} of ${products.length} products`;
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
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
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
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

    cartCountEl.textContent = totalItems;
    totalPriceEl.textContent = total.toFixed(2) + ' EGP';
    whatsappBtn.disabled = cart.length === 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <a href="#products" class="btn btn-primary btn-sm" onclick="toggleCart()">Start Shopping</a>
            </div>`;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)} EGP</div>
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
    if (cart.length === 0) { showToast('Cart is empty'); return; }

    let msg = '*MA PLAST GROUP - Order*\n';
    msg += '==================\n\n';
    cart.forEach((item, i) => {
        msg += `${i + 1}. ${item.name}\n`;
        msg += `   ${item.quantity} x ${item.price.toFixed(2)} = ${(item.price * item.quantity).toFixed(2)} EGP\n\n`;
    });
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    msg += '==================\n';
    msg += `*Total: ${total.toFixed(2)} EGP*\n\n`;
    msg += 'Please confirm. Thank you!';

    window.open(`https://wa.me/201225588521?text=${encodeURIComponent(msg)}`, '_blank');
    showToast('Opening WhatsApp');
}

// ===== Escape =====
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (cartSidebar.classList.contains('active')) closeCart();
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
        body: 'Browse products and send your order instantly via WhatsApp.',
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
        notifToggle.setAttribute('aria-label', 'Notifications');
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
            <h3><i class="fas fa-bell"></i> Notifications</h3>
            <div class="notification-panel-actions">
                <a href="notifications.html" title="Notification settings"><i class="fas fa-gear"></i></a>
                <button onclick="markAllNotificationsRead()" title="Mark all read"><i class="fas fa-check-double"></i></button>
                <button onclick="toggleNotificationPanel()" title="Close"><i class="fas fa-times"></i></button>
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
        if (cartSidebar.classList.contains('active')) closeCart();
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
        showToast('Notifications not supported');
        return;
    }

    Notification.requestPermission().then((permission) => {
        notificationPermission = permission;
        localStorage.setItem('ma_plast_notification_permission', permission);
        showToast(permission === 'granted' ? 'Notifications enabled' : 'Notifications disabled');
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
            <h3><i class="fas fa-bell"></i> Notifications</h3>
            <div class="notification-panel-actions">
                <button type="button" onclick="markAllNotificationsRead()">Mark all read</button>
                <button type="button" onclick="clearAllNotifications()">Clear</button>
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
// ONESIGNAL PROFESSIONAL WEB PUSH PROMPT
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
                        title: 'Notifications enabled',
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
        <button class="push-prompt-close" onclick="hideOneSignalPrompt()" aria-label="Close"><i class="fas fa-times"></i></button>
        <div class="push-prompt-icon"><i class="fas fa-bell"></i></div>
        <div class="push-prompt-content">
            <h4>Get offers and updates</h4>
            <p>Enable notifications to receive new products, deals, and order updates from MA PLAST.</p>
        </div>
        <div class="push-prompt-actions">
            <button type="button" class="push-allow" onclick="requestOneSignalPermission()">Allow</button>
            <button type="button" class="push-later" onclick="hideOneSignalPrompt()">Later</button>
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
            showToast('Notifications permission failed');
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
            <h4>Enable notifications manually</h4>
            <p>Click the lock/settings icon beside the website URL, then set Notifications to Allow. After that refresh the page and press Allow again.</p>
        `;
        document.body.appendChild(box);
    }
    box.classList.add('show');
}


// ===== OneSignal quick diagnostic helper =====
function checkOneSignalStatus() {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(async function(OneSignal) {
        const status = {
            browserPermission: typeof Notification !== 'undefined' ? Notification.permission : 'not-supported',
            oneSignalId: OneSignal.User && OneSignal.User.onesignalId ? OneSignal.User.onesignalId : null,
            pushId: OneSignal.User && OneSignal.User.PushSubscription ? OneSignal.User.PushSubscription.id : null,
            pushToken: OneSignal.User && OneSignal.User.PushSubscription ? OneSignal.User.PushSubscription.token : null,
            optedIn: OneSignal.User && OneSignal.User.PushSubscription ? OneSignal.User.PushSubscription.optedIn : null
        };
        console.log('[OneSignal Status]', status);

        const result = document.getElementById('result');
        if (result) result.textContent = JSON.stringify(status, null, 2);

        if (status.browserPermission === 'granted' && status.optedIn && status.pushId) {
            localStorage.setItem('ma_plast_push_permission_seen', 'yes');
            hideOneSignalPrompt();
        }

        return status;
    });
}


// ===== OneSignal Force Permission Fix =====
async function requestOneSignalPermission() {
    if (typeof Notification === 'undefined') {
        showToast('Notifications are not supported in this browser');
        return;
    }

    if (Notification.permission === 'denied') {
        showToast('Notifications are blocked in browser settings');
        showBlockedPermissionHelp();
        return;
    }

    try {
        // Direct browser prompt. This must run from the user's click.
        const browserPermission = await Notification.requestPermission();

        if (browserPermission !== 'granted') {
            showToast('Please choose Allow in the browser notification popup');
            return;
        }

        window.OneSignalDeferred = window.OneSignalDeferred || [];
        OneSignalDeferred.push(async function(OneSignal) {
            try {
                // Then activate OneSignal subscription.
                if (
                    OneSignal.User &&
                    OneSignal.User.PushSubscription &&
                    typeof OneSignal.User.PushSubscription.optIn === 'function'
                ) {
                    await OneSignal.User.PushSubscription.optIn();
                }

                localStorage.setItem('ma_plast_push_permission_seen', 'yes');
                hideOneSignalPrompt();
                updateOneSignalPromptState();

                setTimeout(function() {
                    checkOneSignalStatus();
                }, 1500);

                showToast('Notifications enabled successfully');
            } catch (error) {
                console.warn('[OneSignal] optIn failed', error);
                showToast('Browser allowed. OneSignal still loading, refresh and try again');
            }
        });
    } catch (error) {
        console.warn('[Notification] Direct permission failed', error);
        showToast('Notification permission failed');
        showBlockedPermissionHelp();
    }
}

function showBlockedPermissionHelp() {
    let box = document.getElementById('pushPermissionHelp');
    if (!box) {
        box = document.createElement('div');
        box.id = 'pushPermissionHelp';
        box.className = 'push-permission-help';
        box.innerHTML = `
            <button class="push-help-close" onclick="document.getElementById('pushPermissionHelp').remove()"><i class="fas fa-times"></i></button>
            <h4>Enable notifications manually</h4>
            <p>Click the lock/settings icon beside the website URL, open Site settings, set Notifications to Allow, then refresh the page and try again.</p>
        `;
        document.body.appendChild(box);
    }
    box.classList.add('show');
}
