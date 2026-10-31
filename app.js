/* ═══════════════════════════════════════════════════════════════════════════
   JEWELS BY J — E-COMMERCE APPLICATION JAVASCRIPT
   Inspired by The Strand Brand Architecture & Features
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Configuration ──
const SITE_CONFIG = {
    brandName: "Jewels by J",
    phone: "+233 50 059 4879",
    whatsappNumber: "233500594879",
    email: "mensahjerrilyn@gmail.com",
    currency: "GH₵",
    freeDeliveryThreshold: 500
};

// ── Complete Initial Atelier Product Catalog ──
const INITIAL_PRODUCTS = [
    {
        id: "p1",
        title: "Jerrilyn Duo Butterfly Nameplates",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 380,
        originalPrice: 420,
        badge: "Bestseller",
        badgeType: "bestseller",
        img: "images/jerrilyn.jpg",
        metal: "Sterling Silver & 18k Gold Plated",
        options: ["16\"", "18\"", "20\""],
        description: "Bespoke duo nameplate necklaces in classic cursive calligraphy script, crowned with radiant butterfly accent charms. Handcrafted in luminous 18k gold plate and 925 sterling silver.",
        isNew: false
    },
    {
        id: "p2",
        title: "Moesha Royal Rose Cuban Nameplate",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 420,
        originalPrice: null,
        badge: "Bestseller",
        badgeType: "bestseller",
        img: "images/moesha.jpg",
        metal: "18k Heavy Gold Vermeil / Cuban Chain",
        options: ["18\"", "20\"", "22\""],
        description: "A commanding statement piece pairing a bold Cuban curb chain with a custom cursive nameplate, adorned with a royal crown, rose motif, and heart accent.",
        isNew: false
    },
    {
        id: "p3",
        title: "Custom Butterfly Trio Nameplates",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 450,
        originalPrice: null,
        badge: "New",
        badgeType: "sale",
        img: "images/hand.jpg",
        metal: "14k Gold Vermeil / Cable Chain",
        options: ["16\"", "18\"", "20\""],
        description: "Handcrafted trio of personalized cursive nameplates featuring cutout butterfly accents that catch light at every angle.",
        isNew: true
    },
    {
        id: "p4",
        title: "Kimberly Signature Script Necklace",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 320,
        originalPrice: null,
        badge: "Classic",
        badgeType: "bespoke",
        img: "images/kimberry.jpg",
        metal: "18k Gold Plated / Fine Link Chain",
        options: ["16\"", "18\""],
        description: "Clean, timeless cursive script crafted with silky rounded edges and mirror polish. An everyday luxury essential created for effortless layering.",
        isNew: false
    },
    {
        id: "p5",
        title: "Regina Butterfly Charm Script Necklace",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 340,
        originalPrice: null,
        badge: "Popular",
        badgeType: "bestseller",
        img: "images/regina.jpg",
        metal: "18k Gold Plated / Stylized Cursive",
        options: ["16\"", "18\"", "20\""],
        description: "Custom stylized calligraphy script paired with a delicate gold butterfly charm at the end flourish. A sweet and personal everyday treasure.",
        isNew: false
    },
    {
        id: "p6",
        title: "Golden Initial 'A' Pendant",
        category: "necklaces",
        categoryName: "Initial Pendants",
        price: 280,
        originalPrice: 320,
        badge: "Sale",
        badgeType: "sale",
        img: "images/A1.jpg",
        metal: "14k Gold Vermeil / Cable Chain",
        options: ["16\"", "18\""],
        description: "A sleek cable chain necklace suspending a solid gold initial charm — a minimalist, personal emblem cast individually and finished by hand.",
        isNew: false
    },
    {
        id: "p7",
        title: "Butterfly Monogram Initial Pendant",
        category: "necklaces",
        categoryName: "Initial Pendants",
        price: 310,
        originalPrice: null,
        badge: "New",
        badgeType: "sale",
        img: "images/A2.jpg",
        metal: "14k Gold Vermeil / Letter Charm",
        options: ["16\"", "18\""],
        description: "A whimsical combination of an elegant serif initial charm and a delicate fluttering butterfly silhouette, draped along the collarbone.",
        isNew: true
    },
    {
        id: "p8",
        title: "Selorm Custom Silver Cuban ID Bracelet",
        category: "bracelets",
        categoryName: "Bracelets & Bangles",
        price: 390,
        originalPrice: null,
        badge: "Bestseller",
        badgeType: "bestseller",
        img: "images/B1.jpg",
        metal: "925 Sterling Silver / Heavy Cuban Link",
        options: ["7.0\"", "7.5\"", "8.0\""],
        description: "A striking sterling silver Cuban ID bracelet with custom precision engraving. Bold, substantial weight and mirror luster for statement styling.",
        isNew: false
    },
    {
        id: "p9",
        title: "Dual Initial Gold Figaro Bracelet",
        category: "bracelets",
        categoryName: "Bracelets & Bangles",
        price: 360,
        originalPrice: null,
        badge: "Popular",
        badgeType: "bestseller",
        img: "images/B2.jpg",
        metal: "18k Gold Plated Figaro Chain",
        options: ["6.5\"", "7.0\"", "7.5\""],
        description: "Classic Italian Figaro chain design enriched with twin custom initial charms, secured with a seamless lobster clasp.",
        isNew: false
    },
    {
        id: "p10",
        title: "Custom Nameplate Gold Rope Chain Bracelet",
        category: "bracelets",
        categoryName: "Bracelets & Bangles",
        price: 380,
        originalPrice: null,
        badge: "Bespoke",
        badgeType: "bespoke",
        img: "images/C1.jpg",
        metal: "18k Gold Vermeil / Diamond-Cut Rope",
        options: ["6.5\"", "7.0\"", "7.5\""],
        description: "Diamond-cut rope chain with a personalized nameplate plate in radiant gold. Catches light dynamically with every wrist movement.",
        isNew: false
    },
    {
        id: "p11",
        title: "Butterfly Charm Duo Gold ID Bracelet",
        category: "bracelets",
        categoryName: "Bracelets & Bangles",
        price: 350,
        originalPrice: null,
        badge: "New",
        badgeType: "sale",
        img: "images/C2.jpg",
        metal: "18k Gold Plated / Dainty Link",
        options: ["6.5\"", "7.0\""],
        description: "Delicate and charming duo butterfly accent bracelet with a sleek engraved center bar, perfect for stacking or solo wear.",
        isNew: true
    },
    {
        id: "p12",
        title: "Luxury Rose Gold Engagement Ring Box",
        category: "giftsets",
        categoryName: "Gift Sets & Keepsakes",
        price: 180,
        originalPrice: null,
        badge: "Gift Idea",
        badgeType: "bespoke",
        img: "images/box.jpg",
        metal: "Premium Leatherette & Soft Velvet",
        options: ["Standard Ring Box", "Luxury Gift Packaging"],
        description: "Luxury handcrafted rose gold presentation box lined with plush midnight velvet, designed for unforgettable proposals and keepsake storage.",
        isNew: false
    },
    {
        id: "p13",
        title: "Velvet Heirloom Keepsake Presentation Box",
        category: "giftsets",
        categoryName: "Gift Sets & Keepsakes",
        price: 195,
        originalPrice: null,
        badge: "Luxury",
        badgeType: "bestseller",
        img: "images/ggift.jpg",
        metal: "Deep Emerald Velvet / Gold Clasp",
        options: ["Standard Edition", "Personalized Monogram Plaque"],
        description: "An heirloom-quality jewelry presentation case crafted in sumptuous velvet with brass accents, ensuring your jewelry is preserved with reverence.",
        isNew: false
    },
    {
        id: "p14",
        title: "Empress Golden Heart Charm Necklace",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 330,
        originalPrice: null,
        badge: "Romantic",
        badgeType: "sale",
        img: "images/heart.jpg",
        metal: "18k Gold Plated / Heart Motif",
        options: ["16\"", "18\"", "20\""],
        description: "Lustrous puffed heart pendant etched with delicate filigree details on a fine shimmer chain, representing love and grace.",
        isNew: false
    },
    {
        id: "p15",
        title: "Nam Personalized Script Pendant",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 340,
        originalPrice: null,
        badge: "Custom",
        badgeType: "bespoke",
        img: "images/nam.jpg",
        metal: "14k Gold Vermeil / Fine Link",
        options: ["16\"", "18\""],
        description: "Flowing cursive script pendant customized to your chosen name, polished to a liquid shine for timeless daily elegance.",
        isNew: false
    },
    {
        id: "p16",
        title: "Jan Dual Tone Custom Script Necklace",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 370,
        originalPrice: null,
        badge: "Dual Tone",
        badgeType: "bestseller",
        img: "images/jan.jpg",
        metal: "18k Yellow Gold & Rhodium Silver",
        options: ["16\"", "18\"", "20\""],
        description: "Innovative two-tone custom calligraphy necklace bringing together the warmth of gold and crisp brilliance of silver.",
        isNew: false
    },
    {
        id: "p17",
        title: "Golden Brilliance Signature Cuban Chain",
        category: "necklaces",
        categoryName: "Chains & Pendants",
        price: 460,
        originalPrice: null,
        badge: "Bold",
        badgeType: "bestseller",
        img: "images/bri.jpg",
        metal: "Heavy 18k Gold Vermeil / 6mm Cuban",
        options: ["18\"", "20\"", "22\""],
        description: "A bold, solid 6mm Miami Cuban link chain designed to make an unforgettable statement alone or layered with custom pendants.",
        isNew: false
    },
    {
        id: "p18",
        title: "Bet Custom Script Fine Chain",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 310,
        originalPrice: null,
        badge: "Bespoke",
        badgeType: "bespoke",
        img: "images/bet.jpg",
        metal: "18k Gold Plated / Ultra-fine Link",
        options: ["16\"", "18\""],
        description: "Delicate, whisper-light chain suspending your personalized name flourish, engineered for effortless comfort 24/7.",
        isNew: false
    },
    {
        id: "p19",
        title: "Empress Regal Monogram Chain",
        category: "necklaces",
        categoryName: "Initial Pendants",
        price: 350,
        originalPrice: null,
        badge: "Signature",
        badgeType: "bestseller",
        img: "images/emp.jpg",
        metal: "14k Gold Vermeil / Crown Emblem",
        options: ["16\"", "18\"", "20\""],
        description: "Royal crown emblem poised gracefully atop your custom monogram initial, embodying poise, pride, and distinction.",
        isNew: false
    },
    {
        id: "p20",
        title: "New Arrival Signature Collection",
        category: "necklaces",
        categoryName: "Curated Sets",
        price: 395,
        originalPrice: 450,
        badge: "New Drop",
        badgeType: "sale",
        img: "images/new1.jpg",
        metal: "18k Gold Vermeil / Layered Links",
        options: ["16\"", "18\"", "20\""],
        description: "Fresh from the atelier — our latest multi-chain curation featuring harmonized lengths and subtle charm drops.",
        isNew: true
    },
    {
        id: "p21",
        title: "Cat Initial Gold Layered Pendant",
        category: "necklaces",
        categoryName: "Initial Pendants",
        price: 290,
        originalPrice: null,
        badge: "Dainty",
        badgeType: "bespoke",
        img: "images/cat.jpg",
        metal: "14k Gold Plated / Cable Chain",
        options: ["16\"", "18\""],
        description: "Sweet, dainty initial pendant with rounded bevel edges designed for minimalist beauty and effortless everyday wear.",
        isNew: false
    }
];

// ── Client Cam Video List ──
const CLIENT_VIDEOS = [
    { title: "Butterfly Gold Charm Bracelet", tag: "Charm Bracelet", video: "videos/bf bracelet.MP4" },
    { title: "Custom Signature Nameplate Drop", tag: "Nameplate Necklace", video: "videos/five.MP4" },
    { title: "Heirloom Presentation Keepsake Box", tag: "Unboxing Moments", video: "videos/gift1.MP4" },
    { title: "Luxury Ring Box Opening", tag: "Engagement Moment", video: "videos/gift2.MP4" },
    { title: "Duo Tone Calligraphy Script", tag: "Bespoke Jewelry", video: "videos/gift3.MOV" },
    { title: "Gold Vermeil Layering Chain", tag: "Layering Set", video: "videos/gift4.MP4" },
    { title: "Empress Monogram Necklace", tag: "Custom Monogram", video: "videos/her eyes.MOV" },
    { title: "Founder's Studio Polish", tag: "Behind the Scenes", video: "videos/missj.MOV" },
    { title: "Twin Butterfly Wrist Stack", tag: "Client Wrist Cam", video: "videos/one.MP4" },
    { title: "Sterling Silver Cuban ID Bracelet", tag: "Silver Collection", video: "videos/six.MP4" },
    { title: "Royal Crown Cuban Nameplate", tag: "Bespoke Crafting", video: "videos/three.MP4" },
    { title: "Dainty Initial Shimmer Chain", tag: "Minimalist Luxe", video: "videos/two.MP4" },
    { title: "Client Unboxing Reaction", tag: "Client Experience", video: "videos/vid1.MP4" },
    { title: "Artisan Quality Inspection", tag: "Quality Check", video: "videos/vid2.MOV" },
    { title: "Gold Figaro Initial Bracelet", tag: "Custom Figaro", video: "videos/asante.MOV" },
    { title: "Full Collection Atelier Showcase", tag: "Seasonal Drop", video: "videos/four.MOV" }
];

// ── Complete Product Catalog (Dynamic Storage Support — Feature #1 & #8) ──
let storeProducts = JSON.parse(localStorage.getItem("j_products") || "null");
if (!storeProducts || !storeProducts.length) {
    storeProducts = INITIAL_PRODUCTS.slice();
    localStorage.setItem("j_products", JSON.stringify(storeProducts));
}
// For backwards compatibility across all catalog & cart lookups
let PRODUCTS = storeProducts;

// ── Atelier Orders State (Feature #6 & #8) ──
let storeOrders = JSON.parse(localStorage.getItem("j_orders") || "null");
if (!storeOrders) {
    storeOrders = [
        {
            id: "JBJ-20261029-001",
            date: "2026-10-29 14:20",
            customerName: "Ama Serwaa",
            customerPhone: "+233 50 059 4879",
            customerEmail: "client@jewelsbyj.com",
            address: "East Legon, near Melcom, Accra",
            region: "accra-std",
            regionName: "Greater Accra (Metro)",
            deliveryFee: 35,
            items: [
                { title: "Jerrilyn Duo Butterfly Nameplates", option: "18\"", qty: 1, price: 380, img: "images/jerrilyn.jpg" }
            ],
            subtotal: 380,
            total: 415,
            paymentMethod: "MTN MoMo",
            paymentRef: "MOMO-MTN-91283",
            notes: "Custom name 'Jerrilyn' in gold vermeil",
            status: "In Transit",
            statusCode: "transit",
            timeline: "Expected delivery tomorrow between 10am - 2pm via express rider"
        },
        {
            id: "JBJ-20261028-084",
            date: "2026-10-28 11:05",
            customerName: "Kofi Owusu",
            customerPhone: "0500594879",
            customerEmail: "kofi@example.com",
            address: "KNUST Campus, Commercial Area, Kumasi",
            region: "kumasi",
            regionName: "Kumasi (Ashanti Region)",
            deliveryFee: 50,
            items: [
                { title: "Selorm Custom Silver Cuban ID Bracelet", option: "7.5\"", qty: 1, price: 390, img: "images/B1.jpg" }
            ],
            subtotal: 390,
            total: 440,
            paymentMethod: "Visa Card",
            paymentRef: "CARD-AUTH-88219",
            notes: "Engrave 'Selorm' in bold block capital",
            status: "Crafting in Atelier",
            statusCode: "crafting",
            timeline: "In hand-polishing and silver engraving. Dispatches Thursday"
        }
    ];
    localStorage.setItem("j_orders", JSON.stringify(storeOrders));
}

// ── Store Settings (Feature #7 & #8) ──
let storeSettings = JSON.parse(localStorage.getItem("j_settings") || "null");
if (!storeSettings) {
    storeSettings = {
        whatsappNumber: SITE_CONFIG.whatsappNumber,
        email: SITE_CONFIG.email,
        freeDeliveryThreshold: SITE_CONFIG.freeDeliveryThreshold,
        adminPIN: "2023"
    };
    localStorage.setItem("j_settings", JSON.stringify(storeSettings));
} else if (storeSettings.adminPIN === "1234") {
    storeSettings.adminPIN = "2023";
    localStorage.setItem("j_settings", JSON.stringify(storeSettings));
}

// ── Application State ──
let currentCategory = "all";
let currentSort = "featured";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("j_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("j_wishlist") || "[]");
let currentUser = JSON.parse(localStorage.getItem("j_user") || "null");
let quickViewProduct = null;
let quickViewSelectedOption = null;
let quickViewQuantity = 1;

// Bespoke Customizer Studio State (Feature #5)
let customDesign = {
    text: "Jerrilyn",
    font: "calligraphy",
    fontName: "Calligraphy Royal Script",
    metal: "gold",
    metalName: "18K Gold Vermeil",
    chain: "cable",
    chainName: "Cable Chain",
    chainPrice: 0,
    length: "16\" (Standard)",
    charm: "butterfly",
    charmEmoji: "🦋",
    charmName: "Butterfly",
    charmPrice: 30,
    basePrice: 350,
    calculatedPrice: 380
};

// Checkout State (Features #2, #3, #4, #7)
let checkoutState = {
    step: 1,
    subtotal: 0,
    deliveryRegion: "accra-std",
    deliveryFee: 35,
    deliveryTimeline: "24–48 Hours",
    grandTotal: 0,
    paymentMethod: "momo",
    momoProvider: "mtn",
    customerInfo: null,
    pendingOrder: null,
    simTimer: null
};

// Admin State (Feature #8)
let adminEnteredPIN = "";
let isAdminAuthenticated = false;

// ── Initialise Application ──
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initMobileDrawer();
    initHeaderSearch();
    initShop();
    initWishlist();
    initClientCam();
    initCartDrawer();
    initQuickViewModal();
    initAuthSystem();
    initLightbox();
    initContactForm();
    initNewsletterForm();
    initCustomizer();
    initDeliveryCalculator();
    initCheckoutModal();
    initAdminPortal();
    initTrackOrder();
    updateCartUI();
    updateWishlistUI();
    updateAuthUI();
    updateAdminNotificationBadge();

    // Check URL parameters for direct category navigation (like The Strand Brand ?category=...)
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("category");
    if (catParam) {
        setCategory(catParam);
        navigateTo("shop");
    }
});

// ═══════════════════════════════════════════════════════════════════════════
// SPA NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════
function navigateTo(sectionId) {
    const sections = document.querySelectorAll(".page-section");
    sections.forEach(sec => sec.classList.remove("active"));

    const target = document.getElementById("section-" + sectionId);
    if (target) {
        target.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Update active nav and drawer links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.dataset.section === sectionId);
    });
    document.querySelectorAll(".drawer-menu-link").forEach(link => {
        link.classList.toggle("active", link.dataset.nav === sectionId);
    });

    // Pause any active videos when navigating away from Client Cam
    if (sectionId !== "cam") {
        document.querySelectorAll("#section-cam video").forEach(v => v.pause());
    }

    closeMobileDrawer();
}

function initNavigation() {
    document.querySelectorAll("[data-nav]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const section = el.getAttribute("data-nav");
            const cat = el.getAttribute("data-category");
            if (cat) setCategory(cat);
            navigateTo(section);
        });
    });
}

function initMobileDrawer() {
    const hamburger = document.getElementById("hamburgerBtn");
    const closeBtn = document.getElementById("drawerCloseBtn");
    const backdrop = document.getElementById("drawerBackdrop");

    if (hamburger && !hamburger.getAttribute("onclick")) {
        hamburger.addEventListener("click", toggleMobileDrawer);
    }
    if (closeBtn) closeBtn.addEventListener("click", closeMobileDrawer);
    if (backdrop) backdrop.addEventListener("click", closeMobileDrawer);
}

let lastDrawerToggle = 0;
function toggleMobileDrawer(e) {
    if (e) {
        if (typeof e.preventDefault === "function") e.preventDefault();
        if (typeof e.stopPropagation === "function") e.stopPropagation();
    }

    // Debounce to prevent simultaneous dual-trigger from inline onclick + event listener
    const now = Date.now();
    if (now - lastDrawerToggle < 300) return;
    lastDrawerToggle = now;

    const drawer = document.getElementById("mobileNavDrawer");
    if (drawer && drawer.classList.contains("active")) {
        closeMobileDrawer();
    } else {
        openMobileDrawer();
    }
}

function openMobileDrawer() {
    const drawer = document.getElementById("mobileNavDrawer");
    const backdrop = document.getElementById("drawerBackdrop");
    if (drawer) drawer.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileDrawer() {
    const drawer = document.getElementById("mobileNavDrawer");
    const backdrop = document.getElementById("drawerBackdrop");
    if (drawer) drawer.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
}

// ═══════════════════════════════════════════════════════════════════════════
// HEADER SEARCH BAR & WISHLIST NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════
let lastSearchToggle = 0;
function toggleHeaderSearch(forceOpen, e) {
    if (e) {
        if (typeof e.preventDefault === "function") e.preventDefault();
        if (typeof e.stopPropagation === "function") e.stopPropagation();
    }

    const now = Date.now();
    if (typeof forceOpen !== "boolean" && now - lastSearchToggle < 300) return;
    lastSearchToggle = now;

    const searchBar = document.getElementById("headerSearchBar");
    const searchInput = document.getElementById("headerSearchInput");
    if (!searchBar) return;

    const isOpen = searchBar.classList.contains("active");
    const willOpen = typeof forceOpen === "boolean" ? forceOpen : !isOpen;

    if (willOpen) {
        searchBar.classList.add("active");
        if (searchInput) {
            setTimeout(() => {
                searchInput.focus();
                searchInput.select();
            }, 80);
        }
    } else {
        searchBar.classList.remove("active");
    }
}

function initHeaderSearch() {
    const searchTrigger = document.getElementById("navSearchTrigger");
    const searchClose = document.getElementById("headerSearchClose");
    const searchInput = document.getElementById("headerSearchInput");
    const shopSearchInput = document.getElementById("shopSearchInput");

    if (searchTrigger && !searchTrigger.getAttribute("onclick")) {
        searchTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            toggleHeaderSearch();
        });
    }

    if (searchClose) {
        searchClose.addEventListener("click", (e) => {
            e.preventDefault();
            toggleHeaderSearch(false);
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            if (shopSearchInput && shopSearchInput.value !== e.target.value) {
                shopSearchInput.value = e.target.value;
            }
            const shopSec = document.getElementById("section-shop");
            if (shopSec && !shopSec.classList.contains("active")) {
                navigateTo("shop");
            }
            renderProducts();
        });

        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                navigateTo("shop");
                document.getElementById("productGrid")?.scrollIntoView({ behavior: "smooth" });
            } else if (e.key === "Escape") {
                toggleHeaderSearch(false);
            }
        });
    }
}

function viewWishlist() {
    navigateTo("shop");
    setCategory("favorites");
    const grid = document.getElementById("productGrid");
    if (grid) {
        grid.scrollIntoView({ behavior: "smooth" });
    }
}

function initWishlist() {
    const wishlistToggle = document.getElementById("wishlistToggleBtn");
    if (wishlistToggle) {
        wishlistToggle.addEventListener("click", (e) => {
            e.preventDefault();
            viewWishlist();
        });
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// SHOP CATALOG RENDERING, FILTERING & SORTING
// ═══════════════════════════════════════════════════════════════════════════
function initShop() {
    // Sidebar Category Filter Buttons
    document.querySelectorAll(".category-filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-cat");
            setCategory(cat);
        });
    });

    // Mobile Category Select Dropdown
    const mobileSelect = document.getElementById("mobileCategorySelect");
    if (mobileSelect) {
        mobileSelect.addEventListener("change", (e) => {
            setCategory(e.target.value);
        });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById("shopSortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    // Search Input
    const searchInput = document.getElementById("shopSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }

    renderProducts();
}

function setCategory(cat) {
    currentCategory = cat;

    // Update active sidebar buttons
    document.querySelectorAll(".category-filter-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-cat") === cat);
    });

    // Update mobile select
    const mobileSelect = document.getElementById("mobileCategorySelect");
    if (mobileSelect) mobileSelect.value = cat;

    // Update shop title
    const titleEl = document.getElementById("shopCurrentTitle");
    if (titleEl) {
        if (cat === "all") titleEl.textContent = "All Pieces";
        else if (cat === "necklaces") titleEl.textContent = "Nameplate & Initial Necklaces";
        else if (cat === "bracelets") titleEl.textContent = "Bespoke Bracelets & Bangles";
        else if (cat === "giftsets") titleEl.textContent = "Gift Sets & Keepsakes";
        else if (cat === "favorites") titleEl.textContent = "My Saved Favorites";
        else titleEl.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    }

    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById("productGrid");
    const countEl = document.getElementById("shopResultCount");
    if (!grid) return;

    // Filter
    let filtered = PRODUCTS.filter(p => {
        let matchesCategory = false;
        if (currentCategory === "all") {
            matchesCategory = true;
        } else if (currentCategory === "favorites") {
            matchesCategory = wishlist.includes(p.id);
        } else {
            matchesCategory = (p.category === currentCategory);
        }

        const matchesSearch = !searchQuery ||
            p.title.toLowerCase().includes(searchQuery) ||
            p.metal.toLowerCase().includes(searchQuery) ||
            p.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // Sort
    if (currentSort === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "newest") {
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (currentSort === "name") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Update Count
    if (countEl) {
        countEl.textContent = `Showing ${filtered.length} Piece${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
        if (currentCategory === "favorites") {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
                    <i class="fa-regular fa-heart" style="font-size: 2.5rem; color: var(--color-gold); margin-bottom: 14px; display: block;"></i>
                    <h3 style="font-size: 1.3rem; margin-bottom: 8px; color: var(--color-black); font-family: var(--font-heading);">No Favorites Saved Yet</h3>
                    <p style="font-size: 0.95rem; max-width: 440px; margin: 0 auto 20px; line-height: 1.6;">Click the heart icon on any jewelry piece to save your favorite bespoke necklaces, bracelets, and keepsakes.</p>
                    <button class="btn btn-primary btn-sm" onclick="setCategory('all')">Browse All Pieces</button>
                </div>
            `;
        } else {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 2.2rem; color: var(--color-gold); margin-bottom: 12px; display: block;"></i>
                    <h3 style="font-size: 1.3rem; margin-bottom: 6px; color: var(--color-black); font-family: var(--font-heading);">No jewelry pieces found</h3>
                    <p style="font-size: 0.9rem;">Try adjusting your search terms or selecting another category.</p>
                    <button class="btn btn-outline btn-sm" style="margin-top: 18px;" onclick="setCategory('all')">View All Pieces</button>
                </div>
            `;
        }
        return;
    }

    // Render Cards
    grid.innerHTML = filtered.map(p => {
        const isWishlisted = wishlist.includes(p.id);
        const badgeHTML = p.badge ? `<span class="badge badge-${p.badgeType}">${p.badge}</span>` : "";
        const originalPriceHTML = p.originalPrice ? `<span class="price-original">${SITE_CONFIG.currency} ${p.originalPrice.toFixed(2)}</span>` : "";

        return `
            <div class="product-card" data-id="${p.id}">
                <div class="product-card-image" onclick="openQuickView('${p.id}')">
                    <img src="${p.img}" alt="${escapeHTML(p.title)}" loading="lazy">
                    <div class="product-card-badges">
                        ${badgeHTML}
                    </div>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                            aria-label="Save to Wishlist"
                            onclick="toggleWishlist('${p.id}', event)">
                        <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                    <button class="quick-view-overlay-btn" onclick="openQuickView('${p.id}'); event.stopPropagation();">
                        <i class="fa-regular fa-eye"></i> Quick View
                    </button>
                </div>
                <div class="product-card-body">
                    <span class="product-card-category">${escapeHTML(p.categoryName)}</span>
                    <h3 class="product-card-title" onclick="openQuickView('${p.id}')">${escapeHTML(p.title)}</h3>
                    <div class="product-card-price-row">
                        <span class="price-current">${SITE_CONFIG.currency} ${p.price.toFixed(2)}</span>
                        ${originalPriceHTML}
                    </div>
                    <div class="product-card-actions">
                        <button class="btn-card-add" onclick="quickAddToCart('${p.id}')">
                            <i class="fa-solid fa-bag-shopping"></i> Add to Bag
                        </button>
                        <button class="btn-card-wa" aria-label="Order on WhatsApp" title="Order on WhatsApp" onclick="orderItemDirectWhatsApp('${p.id}')">
                            <i class="fa-brands fa-whatsapp"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// ═══════════════════════════════════════════════════════════════════════════
// QUICK VIEW & PRODUCT DETAILS MODAL
// ═══════════════════════════════════════════════════════════════════════════
function initQuickViewModal() {
    const backdrop = document.getElementById("quickModalBackdrop");
    const closeBtn = document.getElementById("modalCloseBtn");

    if (closeBtn) closeBtn.addEventListener("click", closeQuickView);
    if (backdrop) {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeQuickView();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeQuickView();
    });

    // Quantity selectors in modal
    const plusBtn = document.getElementById("modalQtyPlus");
    const minusBtn = document.getElementById("modalQtyMinus");
    const qtyVal = document.getElementById("modalQtyVal");

    if (plusBtn) {
        plusBtn.addEventListener("click", () => {
            quickViewQuantity++;
            if (qtyVal) qtyVal.textContent = quickViewQuantity;
        });
    }

    if (minusBtn) {
        minusBtn.addEventListener("click", () => {
            if (quickViewQuantity > 1) {
                quickViewQuantity--;
                if (qtyVal) qtyVal.textContent = quickViewQuantity;
            }
        });
    }

    // Add to cart from modal
    const modalAddBtn = document.getElementById("modalAddToCartBtn");
    if (modalAddBtn) {
        modalAddBtn.addEventListener("click", () => {
            if (quickViewProduct) {
                addToCart(quickViewProduct.id, quickViewSelectedOption, quickViewQuantity);
                closeQuickView();
                openCartDrawer();
            }
        });
    }

    // Direct WhatsApp from modal
    const modalWaBtn = document.getElementById("modalWhatsAppBtn");
    if (modalWaBtn) {
        modalWaBtn.addEventListener("click", () => {
            if (quickViewProduct) {
                const optText = quickViewSelectedOption ? ` (Option/Length: ${quickViewSelectedOption})` : "";
                const msg = `Hi Jewels by J, I would like to order "${quickViewProduct.title}"${optText} (Qty: ${quickViewQuantity}) priced at ${SITE_CONFIG.currency} ${(quickViewProduct.price * quickViewQuantity).toFixed(2)}.`;
                window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
            }
        });
    }
}

function openQuickView(productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    quickViewProduct = p;
    quickViewSelectedOption = p.options && p.options.length ? p.options[0] : null;
    quickViewQuantity = 1;

    document.getElementById("modalProductImg").src = p.img;
    document.getElementById("modalProductImg").alt = p.title;
    document.getElementById("modalProductCategory").textContent = p.categoryName;
    document.getElementById("modalProductTitle").textContent = p.title;
    document.getElementById("modalProductPriceCurrent").textContent = `${SITE_CONFIG.currency} ${p.price.toFixed(2)}`;

    const origEl = document.getElementById("modalProductPriceOrig");
    if (origEl) {
        if (p.originalPrice) {
            origEl.textContent = `${SITE_CONFIG.currency} ${p.originalPrice.toFixed(2)}`;
            origEl.style.display = "inline";
        } else {
            origEl.style.display = "none";
        }
    }

    document.getElementById("modalProductDesc").textContent = p.description;
    document.getElementById("modalQtyVal").textContent = "1";

    // Options Pills
    const optionsWrap = document.getElementById("modalOptionsWrap");
    const optionsContainer = document.getElementById("modalOptionsContainer");
    if (optionsContainer) {
        if (p.options && p.options.length > 0) {
            optionsWrap.style.display = "block";
            optionsContainer.innerHTML = p.options.map((opt, idx) => `
                <button class="option-pill-btn ${idx === 0 ? 'active' : ''}" 
                        onclick="selectQuickViewOption('${opt}', this)">
                    ${opt}
                </button>
            `).join("");
        } else {
            optionsWrap.style.display = "none";
        }
    }

    document.getElementById("quickModalBackdrop")?.classList.add("active");
    document.body.style.overflow = "hidden";
}

function selectQuickViewOption(opt, btn) {
    quickViewSelectedOption = opt;
    document.querySelectorAll(".option-pill-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function closeQuickView() {
    document.getElementById("quickModalBackdrop")?.classList.remove("active");
    document.body.style.overflow = "";
}

// ═══════════════════════════════════════════════════════════════════════════
// SHOPPING CART DRAWER SYSTEM
// ═══════════════════════════════════════════════════════════════════════════
function initCartDrawer() {
    const cartToggle = document.getElementById("cartToggleBtn");
    const closeBtn = document.getElementById("cartCloseBtn");
    const backdrop = document.getElementById("cartBackdrop");
    const checkoutBtn = document.getElementById("cartCheckoutBtn");
    const clearBtn = document.getElementById("cartClearBtn");

    if (cartToggle) cartToggle.addEventListener("click", openCartDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeCartDrawer);
    if (backdrop) backdrop.addEventListener("click", closeCartDrawer);

    if (checkoutBtn) checkoutBtn.addEventListener("click", checkoutWhatsApp);
    if (clearBtn) clearBtn.addEventListener("click", clearCart);
}

function openCartDrawer() {
    document.getElementById("cartDrawer")?.classList.add("active");
    document.getElementById("cartBackdrop")?.classList.add("active");
    document.body.style.overflow = "hidden";
    renderCart();
}

function closeCartDrawer() {
    document.getElementById("cartDrawer")?.classList.remove("active");
    document.getElementById("cartBackdrop")?.classList.remove("active");
    document.body.style.overflow = "";
}

function quickAddToCart(productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;
    const defaultOption = p.options && p.options.length ? p.options[0] : null;
    addToCart(productId, defaultOption, 1);
    openCartDrawer();
}

function addToCart(productId, option, quantity = 1) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    // Check if same product + option already in cart
    const existingIndex = cart.findIndex(item => item.id === productId && item.option === option);
    if (existingIndex > -1) {
        cart[existingIndex].qty += quantity;
    } else {
        cart.push({
            id: p.id,
            title: p.title,
            price: p.price,
            img: p.img,
            option: option,
            qty: quantity
        });
    }

    saveCart();
    showToast(`Added to Bag`, `${p.title} added to your shopping bag.`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function updateCartQuantity(index, delta) {
    if (cart[index]) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        renderCart();
    }
}

function clearCart() {
    if (confirm("Are you sure you want to empty your shopping bag?")) {
        cart = [];
        saveCart();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem("j_cart", JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById("cartBadgeCount");
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? "flex" : "none";
    }
    const drawerBadge = document.getElementById("drawerCartCount");
    if (drawerBadge) {
        drawerBadge.textContent = totalItems;
    }
}

function renderCart() {
    const container = document.getElementById("cartItemsContainer");
    const subtotalEl = document.getElementById("cartSubtotal");
    const totalEl = document.getElementById("cartTotal");
    const deliveryMeterEl = document.getElementById("deliveryMeterText");
    const checkoutBtn = document.getElementById("cartCheckoutBtn");
    const clearBtn = document.getElementById("cartClearBtn");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-bag-shopping cart-empty-icon"></i>
                <h3 style="font-size: 1.2rem; color: var(--color-black); margin-bottom: 6px;">Your Bag is Empty</h3>
                <p style="font-size: 0.85rem; margin-bottom: 20px;">Explore our handcrafted collections and find your signature look.</p>
                <button class="btn btn-primary btn-sm" onclick="closeCartDrawer(); navigateTo('shop');">
                    Start Shopping
                </button>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = `${SITE_CONFIG.currency} 0.00`;
        if (totalEl) totalEl.textContent = `${SITE_CONFIG.currency} 0.00`;
        if (deliveryMeterEl) deliveryMeterEl.textContent = `Add ${SITE_CONFIG.currency} ${SITE_CONFIG.freeDeliveryThreshold.toFixed(2)} more for Free Ghana Delivery!`;
        if (checkoutBtn) checkoutBtn.disabled = true;
        if (clearBtn) clearBtn.style.display = "none";
        return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;
    if (clearBtn) clearBtn.style.display = "block";

    let subtotal = 0;
    container.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        const optText = item.option ? `<span class="cart-item-option">Option: ${escapeHTML(item.option)}</span>` : "";

        return `
            <div class="cart-item">
                <img src="${item.img}" alt="${escapeHTML(item.title)}" class="cart-item-img">
                <div class="cart-item-info">
                    <span class="cart-item-name">${escapeHTML(item.title)}</span>
                    ${optText}
                    <span class="cart-item-price">${SITE_CONFIG.currency} ${itemTotal.toFixed(2)}</span>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">-</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" aria-label="Remove item" onclick="removeFromCart(${index})">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
    }).join("");

    if (subtotalEl) subtotalEl.textContent = `${SITE_CONFIG.currency} ${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `${SITE_CONFIG.currency} ${subtotal.toFixed(2)}`;

    // Free Delivery Meter calculation
    if (deliveryMeterEl) {
        if (subtotal >= SITE_CONFIG.freeDeliveryThreshold) {
            deliveryMeterEl.innerHTML = `<strong>✨ You've unlocked FREE Delivery across Ghana!</strong>`;
        } else {
            const needed = SITE_CONFIG.freeDeliveryThreshold - subtotal;
            deliveryMeterEl.textContent = `Add ${SITE_CONFIG.currency} ${needed.toFixed(2)} more for Free Delivery!`;
        }
    }
}

// ── WhatsApp Direct Order ──
function checkoutWhatsApp() {
    if (cart.length === 0) return;

    let subtotal = 0;
    let message = `*NEW ORDER — ${SITE_CONFIG.brandName.toUpperCase()}*\n`;
    message += `──────────────────────\n`;

    cart.forEach((item, idx) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        message += `${idx + 1}. *${item.title}*\n`;
        if (item.option) message += `   • Size/Length: ${item.option}\n`;
        message += `   • Qty: ${item.qty} × ${SITE_CONFIG.currency} ${item.price.toFixed(2)} = ${SITE_CONFIG.currency} ${itemTotal.toFixed(2)}\n`;
    });

    message += `──────────────────────\n`;
    message += `*Total Amount:* ${SITE_CONFIG.currency} ${subtotal.toFixed(2)}\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${currentUser ? currentUser.name : ''}\n`;
    message += `Phone: ${currentUser ? (currentUser.phone || '') : ''}\n`;
    message += `Email: ${currentUser ? (currentUser.email || '') : ''}\n`;
    message += `Delivery Address:\n`;
    message += `Notes / Custom Nameplate Text:\n`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`, "_blank");
}

function orderItemDirectWhatsApp(productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;
    const msg = `Hi Jewels by J! I would like to order "${p.title}" priced at ${SITE_CONFIG.currency} ${p.price.toFixed(2)}. Please confirm availability and delivery details.`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ═══════════════════════════════════════════════════════════════════════════
// WISHLIST SYSTEM
// ═══════════════════════════════════════════════════════════════════════════
function toggleWishlist(productId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast("Removed from Wishlist", "Item removed from your favorites.");
    } else {
        wishlist.push(productId);
        showToast("Saved to Wishlist", "Item saved to your favorites!");
    }

    localStorage.setItem("j_wishlist", JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts();
}

function updateWishlistUI() {
    const badge = document.getElementById("wishlistBadgeCount");
    if (badge) {
        badge.textContent = wishlist.length;
        badge.style.display = wishlist.length > 0 ? "flex" : "none";
    }
    const drawerBadge = document.getElementById("drawerWishlistCount");
    if (drawerBadge) {
        drawerBadge.textContent = wishlist.length;
    }
    const sidebarBadge = document.getElementById("sidebarWishlistCount");
    if (sidebarBadge) {
        sidebarBadge.textContent = wishlist.length;
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// CLIENT CAM (VIDEO SOCIAL PROOF) & LIGHTBOX
// ═══════════════════════════════════════════════════════════════════════════
function initClientCam() {
    const grid = document.getElementById("clientCamGrid");
    if (!grid) return;

    grid.innerHTML = CLIENT_VIDEOS.map(v => `
        <div class="cam-card">
            <div class="cam-video-wrap" onclick="openVideoLightbox('${v.video}', '${escapeHTML(v.title)}')">
                <video autoplay loop muted playsinline preload="metadata">
                    <source src="${v.video}" type="video/mp4">
                    <source src="${v.video}" type="video/quicktime">
                </video>
                <div class="cam-overlay-play">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <div class="cam-card-info">
                <h4 class="cam-card-title">${escapeHTML(v.title)}</h4>
                <span class="cam-card-meta">${escapeHTML(v.tag)}</span>
            </div>
        </div>
    `).join("");
}

function initLightbox() {
    const closeBtn = document.getElementById("lightboxCloseBtn");
    const modal = document.getElementById("generalLightboxModal");

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeLightbox();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });
}

function openVideoLightbox(videoSrc, title) {
    const body = document.getElementById("lightboxBody");
    const modal = document.getElementById("generalLightboxModal");
    if (!body || !modal) return;

    body.innerHTML = `
        <video controls autoplay playsinline style="max-height: 80vh; width: 100%; border-radius: 8px;">
            <source src="${videoSrc}" type="video/mp4">
            <source src="${videoSrc}" type="video/quicktime">
            Your browser does not support HTML5 video.
        </video>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const body = document.getElementById("lightboxBody");
    const modal = document.getElementById("generalLightboxModal");
    if (!modal) return;

    const video = body?.querySelector("video");
    if (video) video.pause();
    if (body) body.innerHTML = "";

    modal.classList.remove("active");
    document.body.style.overflow = "";
}

// ═══════════════════════════════════════════════════════════════════════════
// CONTACT FORM SUBMISSION
// ═══════════════════════════════════════════════════════════════════════════
function initContactForm() {
    const form = document.getElementById("customerContactForm");
    const statusEl = document.getElementById("contactFormStatus");
    const submitBtn = document.getElementById("contactSubmitBtn");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !message) {
            statusEl.textContent = "Please fill in all required fields.";
            statusEl.className = "form-status-msg error";
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
        statusEl.className = "form-status-msg";
        statusEl.textContent = "";

        fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.email}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                _subject: `Jewels by J Inquiry: ${subject || "General Consultation"} (from ${name})`,
                message: message,
                _replyto: email
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data && (data.success === "true" || data.success === true)) {
                    statusEl.textContent = `Thank you, ${name}! Your inquiry has been sent to ${SITE_CONFIG.email}. We will reply shortly.`;
                    statusEl.className = "form-status-msg success";
                    form.reset();
                } else {
                    const fallbackUrl = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
                    statusEl.innerHTML = `Message ready! <a href="${fallbackUrl}" style="color:var(--color-gold); font-weight:600; text-decoration:underline;">Click here to send via email client</a>`;
                    statusEl.className = "form-status-msg success";
                }
            })
            .catch(() => {
                const mailto = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
                window.location.href = mailto;
                statusEl.innerHTML = `Opening your email app... <a href="${mailto}" style="color:var(--color-gold); font-weight:600; text-decoration:underline;">Click here if it didn't open automatically</a>`;
                statusEl.className = "form-status-msg success";
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Consultation Inquiry`;
            });
    });
}

function initNewsletterForm() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector("input");
        if (input && input.value) {
            showToast("Subscribed!", "Thank you for joining the Jewels by J family. Check your inbox soon!");
            input.value = "";
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// AUTHENTICATION SYSTEM (LOG IN, SIGN UP & ACCOUNT DASHBOARD)
// ═══════════════════════════════════════════════════════════════════════════
function initAuthSystem() {
    const backdrop = document.getElementById("authModalBackdrop");
    const closeBtn = document.getElementById("authCloseBtn");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const navAuthBtn = document.getElementById("navAuthBtn");

    if (closeBtn) closeBtn.addEventListener("click", closeAuthModal);
    if (backdrop) {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeAuthModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAuthModal();
    });

    if (navAuthBtn) {
        navAuthBtn.addEventListener("click", () => {
            if (currentUser) {
                openAuthModal("account");
            } else {
                openAuthModal("login");
            }
        });
    }

    // Handle Log In submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            if (!email || !password) {
                showToast("Missing Details", "Please provide both email and password.");
                return;
            }

            // Derive display name from email or default
            let displayName = email.split("@")[0].replace(/[._-]/g, " ");
            displayName = displayName.replace(/\b\w/g, l => l.toUpperCase());

            currentUser = {
                name: displayName || "Valued Customer",
                email: email,
                phone: "+233 54 123 4567"
            };

            localStorage.setItem("j_user", JSON.stringify(currentUser));
            updateAuthUI();
            closeAuthModal();
            loginForm.reset();
            showToast("Welcome Back!", `Signed in successfully as ${currentUser.name}.`);
        });
    }

    // Handle Sign Up submission
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("signupName").value.trim();
            const phone = document.getElementById("signupPhone").value.trim();
            const email = document.getElementById("signupEmail").value.trim();
            const password = document.getElementById("signupPassword").value;

            if (!name || !email || !password) {
                showToast("Missing Details", "Please fill in all required fields.");
                return;
            }

            if (password.length < 6) {
                showToast("Weak Password", "Password must be at least 6 characters long.");
                return;
            }

            currentUser = {
                name: name,
                phone: phone || "+233 50 059 4879",
                email: email
            };

            localStorage.setItem("j_user", JSON.stringify(currentUser));
            updateAuthUI();
            closeAuthModal();
            signupForm.reset();
            showToast("Welcome to Jewels by J!", `Your account has been created, ${currentUser.name}!`);
        });
    }
}

function openAuthModal(initialTab = "login") {
    const backdrop = document.getElementById("authModalBackdrop");
    const navTabs = document.getElementById("authNavTabs");
    if (!backdrop) return;

    if (currentUser && initialTab !== "signup") {
        // Show account dashboard view for signed-in user
        if (navTabs) navTabs.style.display = "none";
        document.querySelectorAll(".auth-panel").forEach(p => p.classList.remove("active"));
        document.getElementById("panelAccount")?.classList.add("active");
    } else {
        // Show guest tab view
        if (navTabs) navTabs.style.display = "grid";
        document.getElementById("panelAccount")?.classList.remove("active");
        switchAuthTab(initialTab || "login");
    }

    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeAuthModal() {
    const backdrop = document.getElementById("authModalBackdrop");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
}

function switchAuthTab(tab) {
    const tabLogin = document.getElementById("tabBtnLogin");
    const tabSignup = document.getElementById("tabBtnSignup");
    const panelLogin = document.getElementById("panelLogin");
    const panelSignup = document.getElementById("panelSignup");
    const panelAccount = document.getElementById("panelAccount");

    if (panelAccount) panelAccount.classList.remove("active");

    if (tab === "login") {
        tabLogin?.classList.add("active");
        tabSignup?.classList.remove("active");
        panelLogin?.classList.add("active");
        panelSignup?.classList.remove("active");
        document.getElementById("loginEmail")?.focus();
    } else if (tab === "signup") {
        tabSignup?.classList.add("active");
        tabLogin?.classList.remove("active");
        panelSignup?.classList.add("active");
        panelLogin?.classList.remove("active");
        document.getElementById("signupName")?.focus();
    }
}

function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input || !btn) return;

    if (input.type === "password") {
        input.type = "text";
        btn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    } else {
        input.type = "password";
        btn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    }
}

function handleForgotPassword() {
    const email = document.getElementById("loginEmail")?.value.trim();
    if (email) {
        showToast("Password Reset Dispatched", `A reset link was sent to ${email}. Please check your inbox.`);
    } else {
        showToast("Enter Your Email", "Please type your email address above to receive a reset link.");
        document.getElementById("loginEmail")?.focus();
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem("j_user");
    updateAuthUI();
    closeAuthModal();
    showToast("Signed Out", "You have been signed out successfully.");
}

function updateAuthUI() {
    const navAuthBtn = document.getElementById("navAuthBtn");
    const navAuthLabel = document.getElementById("navAuthLabel");
    const drawerAvatar = document.getElementById("drawerAccountAvatar");
    const drawerText = document.getElementById("drawerAccountText");
    const drawerActions = document.getElementById("drawerAccountActions");

    const avatarLetter = document.getElementById("accountAvatarLetter");
    const accountName = document.getElementById("accountUserName");
    const accountEmail = document.getElementById("accountUserEmail");
    const accountPhone = document.getElementById("accountUserPhone");
    const accountOrders = document.getElementById("accountOrdersSummary");

    if (currentUser) {
        const firstName = currentUser.name.split(" ")[0];
        const initial = currentUser.name.charAt(0).toUpperCase();

        // Update header button
        if (navAuthBtn) {
            navAuthBtn.classList.add("is-logged-in");
            navAuthBtn.innerHTML = `<i class="fa-solid fa-circle-user"></i> <span class="auth-label">${escapeHTML(firstName)}</span>`;
        }

        // Update mobile drawer account box
        if (drawerAvatar) drawerAvatar.innerHTML = `<span style="font-weight:700;">${initial}</span>`;
        if (drawerText) {
            drawerText.innerHTML = `<strong>Hi, ${escapeHTML(firstName)}</strong><span>${escapeHTML(currentUser.email)}</span>`;
        }
        if (drawerActions) {
            drawerActions.innerHTML = `
                <button class="btn btn-outline btn-sm" onclick="closeMobileDrawer(); openAuthModal('account');">My Account</button>
                <button class="btn btn-primary btn-sm" onclick="handleLogout()">Sign Out</button>
            `;
        }

        // Update dashboard modal panel
        if (avatarLetter) avatarLetter.textContent = initial;
        if (accountName) accountName.textContent = currentUser.name;
        if (accountEmail) accountEmail.textContent = currentUser.email;
        if (accountPhone) accountPhone.textContent = `Ghana • ${currentUser.phone || '+233 50 059 4879'}`;
        if (accountOrders) {
            accountOrders.textContent = "Your profile is active. Ready to order your signature bespoke jewelry!";
        }
    } else {
        // Guest mode
        if (navAuthBtn) {
            navAuthBtn.classList.remove("is-logged-in");
            navAuthBtn.innerHTML = `<i class="fa-regular fa-user"></i> <span class="auth-label" id="navAuthLabel">Sign In / Log In</span>`;
        }

        if (drawerAvatar) drawerAvatar.innerHTML = `<i class="fa-regular fa-user"></i>`;
        if (drawerText) {
            drawerText.innerHTML = `<strong>Welcome Beautiful!</strong><span>Sign in or create an account</span>`;
        }
        if (drawerActions) {
            drawerActions.innerHTML = `
                <button class="btn btn-primary btn-sm" onclick="closeMobileDrawer(); openAuthModal('login');">Log In</button>
                <button class="btn btn-outline btn-sm" onclick="closeMobileDrawer(); openAuthModal('signup');">Sign Up</button>
            `;
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════
function showToast(title, message) {
    let toast = document.getElementById("toastNotice");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toastNotice";
        toast.className = "toast-notice";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <i class="fa-solid fa-check" style="color:var(--color-gold);"></i>
        <div>
            <strong style="display:block; font-size:0.82rem;">${escapeHTML(title)}</strong>
            <span style="font-size:0.76rem; color:#ddd;">${escapeHTML(message)}</span>
        </div>
    `;

    toast.classList.add("active");
    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
        toast.classList.remove("active");
    }, 3500);
}

function escapeHTML(str) {
    return String(str || "").replace(/[&<>'"]/g, tag => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag]));
}

// ═══════════════════════════════════════════════════════════════════════════
// DYNAMIC CATEGORY COUNTS (FEATURE #1)
// ═══════════════════════════════════════════════════════════════════════════
function updateCategoryCounts() {
    const allCount = storeProducts.length;
    const necklacesCount = storeProducts.filter(p => p.category === "necklaces").length;
    const braceletsCount = storeProducts.filter(p => p.category === "bracelets").length;
    const giftsetsCount = storeProducts.filter(p => p.category === "giftsets").length;

    document.querySelectorAll(".category-filter-btn").forEach(btn => {
        const cat = btn.getAttribute("data-cat");
        const countSpan = btn.querySelector(".category-count");
        if (countSpan) {
            if (cat === "all") countSpan.textContent = allCount;
            else if (cat === "necklaces") countSpan.textContent = necklacesCount;
            else if (cat === "bracelets") countSpan.textContent = braceletsCount;
            else if (cat === "giftsets") countSpan.textContent = giftsetsCount;
            else if (cat === "favorites") countSpan.textContent = wishlist.length;
        }
    });

    const mobileSelect = document.getElementById("mobileCategorySelect");
    if (mobileSelect) {
        const allOpt = mobileSelect.querySelector('option[value="all"]');
        if (allOpt) allOpt.textContent = `All Designs (${allCount})`;
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// FEATURE 5: BESPOKE CUSTOMIZATION STUDIO
// ═══════════════════════════════════════════════════════════════════════════
function initCustomizer() {
    const textInput = document.getElementById("customTextInput");
    const countSpan = document.getElementById("customCharCount");

    if (textInput) {
        textInput.addEventListener("input", (e) => {
            const rawVal = e.target.value.replace(/[^a-zA-Z0-9\s]/g, "");
            customDesign.text = rawVal || "Signature";
            if (countSpan) countSpan.textContent = rawVal.length;
            updateCustomizerPreview();
        });
    }

    updateCustomizerPreview();
}

function setCustomText(text) {
    const input = document.getElementById("customTextInput");
    const countSpan = document.getElementById("customCharCount");
    if (input) input.value = text;
    if (countSpan) countSpan.textContent = text.length;
    customDesign.text = text;
    updateCustomizerPreview();
}

function setCustomFont(fontKey, el) {
    customDesign.font = fontKey;
    const names = {
        calligraphy: "Calligraphy Royal Script",
        gothic: "Old English Gothic",
        serif: "Modern Serif Luxe",
        cursive: "Chic Cursive"
    };
    customDesign.fontName = names[fontKey] || fontKey;

    if (el) {
        el.parentElement.querySelectorAll(".customizer-option-card").forEach(c => c.classList.remove("active"));
        el.classList.add("active");
    }
    updateCustomizerPreview();
}

function setCustomMetal(metalKey, el) {
    customDesign.metal = metalKey;
    const names = {
        gold: "18K Gold Vermeil",
        silver: "925 Sterling Silver",
        rosegold: "Rose Gold Lustre"
    };
    customDesign.metalName = names[metalKey] || metalKey;

    if (el) {
        el.parentElement.querySelectorAll(".customizer-option-card").forEach(c => c.classList.remove("active"));
        el.classList.add("active");
    }
    updateCustomizerPreview();
}

function updateCustomizerChain(chainVal) {
    customDesign.chain = chainVal;
    if (chainVal === "cuban") {
        customDesign.chainName = "Bold Cuban Curb Chain";
        customDesign.chainPrice = 50;
    } else if (chainVal === "figaro") {
        customDesign.chainName = "Italian Figaro Chain";
        customDesign.chainPrice = 30;
    } else {
        customDesign.chainName = "Dainty Cable Chain";
        customDesign.chainPrice = 0;
    }
    updateCustomizerPreview();
}

function updateCustomizerLength(lengthVal) {
    customDesign.length = lengthVal;
    updateCustomizerPreview();
}

function setCustomCharm(charmKey, emoji, el) {
    customDesign.charm = charmKey;
    customDesign.charmEmoji = emoji;
    const names = {
        butterfly: "Butterfly Emblem",
        crown: "Royal Crown",
        heart: "Sweet Heart",
        star: "Celestial Star",
        none: "None"
    };
    customDesign.charmName = names[charmKey] || charmKey;
    customDesign.charmPrice = (charmKey === "butterfly" || charmKey === "crown") ? 30 : (charmKey === "none" ? 0 : 20);

    if (el) {
        el.parentElement.querySelectorAll(".customizer-option-card").forEach(c => c.classList.remove("active"));
        el.classList.add("active");
    }
    updateCustomizerPreview();
}

function updateCustomizerPreview() {
    const plateText = document.getElementById("customizerPlateText");
    const charmIcon = document.getElementById("customizerCharmIcon");
    const chainGraphic = document.getElementById("customizerChainGraphic");
    const priceDisplay = document.getElementById("customizerPriceDisplay");

    const specMetal = document.getElementById("specMetal");
    const specFont = document.getElementById("specFont");
    const specChain = document.getElementById("specChain");
    const specCharm = document.getElementById("specCharm");

    // Text & Font
    if (plateText) {
        plateText.textContent = customDesign.text || "Jewels";
        plateText.className = "customizer-plate-text";
        plateText.classList.add("font-" + customDesign.font);
        plateText.classList.add("metal-" + customDesign.metal);
    }

    // Charm
    if (charmIcon) {
        charmIcon.textContent = customDesign.charmEmoji || "";
        charmIcon.style.display = customDesign.charm === "none" ? "none" : "inline-block";
    }

    // Chain Graphic
    if (chainGraphic) {
        chainGraphic.className = "customizer-chain-render chain-style-" + customDesign.chain;
    }

    // Pricing Calculation
    const calculated = customDesign.basePrice + customDesign.chainPrice + customDesign.charmPrice;
    customDesign.calculatedPrice = calculated;
    if (priceDisplay) {
        priceDisplay.textContent = `${SITE_CONFIG.currency} ${calculated.toFixed(2)}`;
    }

    // Spec Summary
    if (specMetal) specMetal.textContent = customDesign.metalName;
    if (specFont) specFont.textContent = customDesign.fontName;
    if (specChain) specChain.textContent = `${customDesign.chainName} (${customDesign.length})`;
    if (specCharm) specCharm.textContent = customDesign.charmName;
}

function submitCustomizationViaWhatsApp() {
    let msg = `*BESPOKE JEWELRY INQUIRY — ${SITE_CONFIG.brandName.toUpperCase()}*\n`;
    msg += `─────────────────────────\n`;
    msg += `Hello Jerrilyn, I designed a custom bespoke piece on your website and would love to place an order:\n\n`;
    msg += `• *Custom Text / Name:* ${customDesign.text}\n`;
    msg += `• *Font Style:* ${customDesign.fontName}\n`;
    msg += `• *Precious Metal:* ${customDesign.metalName}\n`;
    msg += `• *Chain Style:* ${customDesign.chainName}\n`;
    msg += `• *Chain Length:* ${customDesign.length}\n`;
    msg += `• *Accent Charm:* ${customDesign.charmName} ${customDesign.charmEmoji}\n`;
    msg += `• *Estimated Price:* ${SITE_CONFIG.currency} ${customDesign.calculatedPrice.toFixed(2)}\n\n`;
    msg += `Please confirm availability and crafting schedule. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber}?text=${encoded}`, "_blank");
}

function addCustomPieceToCart() {
    const customItem = {
        id: "custom-" + Date.now(),
        title: `Custom Nameplate: "${customDesign.text}"`,
        price: customDesign.calculatedPrice,
        img: customDesign.metal === "silver" ? "images/B1.jpg" : "images/jerrilyn.jpg",
        option: `${customDesign.metalName} | ${customDesign.fontName} | ${customDesign.chainName} (${customDesign.length}) | Charm: ${customDesign.charmName}`,
        qty: 1,
        isCustom: true
    };

    cart.push(customItem);
    saveCart();
    showToast("Bespoke Piece Added", `Custom nameplate "${customDesign.text}" added to your bag.`);
    openCartDrawer();
}

// ═══════════════════════════════════════════════════════════════════════════
// FEATURE 7: DELIVERY INFORMATION & CALCULATOR
// ═══════════════════════════════════════════════════════════════════════════
const DELIVERY_RATES = {
    "accra-std": { name: "Greater Accra Central (Standard)", fee: 35, ready: "24 to 48 Hours", custom: "4 to 7 Business Days" },
    "accra-exp": { name: "Greater Accra Express (Same-Day)", fee: 55, ready: "Under 6 Hours (ordered before 12pm)", custom: "4 to 5 Days Express" },
    "tema": { name: "Tema / Kasoa / Outskirts", fee: 45, ready: "24 to 48 Hours", custom: "4 to 7 Business Days" },
    "kumasi": { name: "Kumasi & Ashanti Region", fee: 50, ready: "1 to 2 Business Days", custom: "5 to 8 Business Days" },
    "regional": { name: "Central, Western, Eastern, Volta", fee: 55, ready: "2 to 3 Business Days", custom: "5 to 8 Business Days" },
    "northern": { name: "Northern & Upper Regions", fee: 65, ready: "2 to 4 Business Days", custom: "6 to 9 Business Days" }
};

function initDeliveryCalculator() {
    calculateDeliveryFee("accra-std");
}

function calculateDeliveryFee(selectedVal) {
    const select = document.getElementById("deliveryCalcSelect");
    const itemTypeSelect = document.getElementById("deliveryCalcItemType");
    const resultFee = document.getElementById("calcResultFee");
    const resultArrival = document.getElementById("calcResultArrival");

    const key = selectedVal || (select ? select.value : "accra-std");
    const itemType = itemTypeSelect ? itemTypeSelect.value : "ready";
    const data = DELIVERY_RATES[key] || DELIVERY_RATES["accra-std"];

    if (resultFee) {
        resultFee.textContent = `${SITE_CONFIG.currency} ${data.fee.toFixed(2)}`;
    }
    if (resultArrival) {
        resultArrival.textContent = itemType === "ready" ? data.ready : data.custom;
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// FEATURE 2, 3 & 4: ONLINE CHECKOUT MODAL (GHANA MOMO & CARD)
// ═══════════════════════════════════════════════════════════════════════════
function initCheckoutModal() {
    const backdrop = document.getElementById("checkoutModalBackdrop");
    if (backdrop) {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeCheckoutModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && backdrop && backdrop.classList.contains("active")) {
            closeCheckoutModal();
        }
    });
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast("Shopping Bag Empty", "Add some handcrafted jewelry to your bag before checking out.");
        return;
    }

    const backdrop = document.getElementById("checkoutModalBackdrop");
    if (!backdrop) return;

    // Reset checkout step to 1
    checkoutState.step = 1;
    showCheckoutPane(1);

    // Auto-fill logged in customer
    if (currentUser) {
        const nameField = document.getElementById("chkCustName");
        const phoneField = document.getElementById("chkCustPhone");
        const emailField = document.getElementById("chkCustEmail");
        if (nameField && !nameField.value) nameField.value = currentUser.name || "";
        if (phoneField && !phoneField.value) phoneField.value = currentUser.phone || "";
        if (emailField && !emailField.value) emailField.value = currentUser.email || "";
    }

    // Calculate initial totals
    updateCheckoutTotals();
    renderCheckoutMiniItems();

    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
    const backdrop = document.getElementById("checkoutModalBackdrop");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";

    if (checkoutState.simTimer) {
        clearInterval(checkoutState.simTimer);
        checkoutState.simTimer = null;
    }
}

function showCheckoutPane(stepNum) {
    checkoutState.step = stepNum;
    const p1 = document.getElementById("checkoutPaneStep1");
    const p2 = document.getElementById("checkoutPaneStep2");
    const sim = document.getElementById("checkoutPaneMoMoSimulation");
    const p3 = document.getElementById("checkoutPaneStep3");

    const s1 = document.getElementById("checkoutStepIndicator1");
    const s2 = document.getElementById("checkoutStepIndicator2");
    const s3 = document.getElementById("checkoutStepIndicator3");

    if (p1) p1.style.display = stepNum === 1 ? "block" : "none";
    if (p2) p2.style.display = stepNum === 2 ? "block" : "none";
    if (sim) sim.style.display = stepNum === "sim" ? "block" : "none";
    if (p3) p3.style.display = stepNum === 3 ? "block" : "none";

    if (s1) s1.className = `checkout-step-pill ${stepNum >= 1 ? 'active' : ''}`;
    if (s2) s2.className = `checkout-step-pill ${stepNum >= 2 ? 'active' : ''}`;
    if (s3) s3.className = `checkout-step-pill ${stepNum === 3 ? 'active' : ''}`;
}

function updateCheckoutTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    checkoutState.subtotal = subtotal;

    // Free delivery calculation
    const threshold = storeSettings.freeDeliveryThreshold || SITE_CONFIG.freeDeliveryThreshold;
    let fee = checkoutState.deliveryFee;
    let isFree = false;

    if (subtotal >= threshold) {
        fee = 0;
        isFree = true;
    }

    const grandTotal = subtotal + fee;
    checkoutState.grandTotal = grandTotal;

    const subEl = document.getElementById("chkSubtotalDisplay");
    const delEl = document.getElementById("chkDeliveryDisplay");
    const grandEl = document.getElementById("chkGrandTotalDisplay");

    const paySubEl = document.getElementById("chkPaySubtotalDisplay");
    const payDelEl = document.getElementById("chkPayDeliveryDisplay");
    const payGrandEl = document.getElementById("chkPayGrandTotalDisplay");
    const momoBtnEl = document.getElementById("momoPayBtnAmount");
    const cardBtnEl = document.getElementById("cardPayBtnAmount");

    const formattedSub = `${SITE_CONFIG.currency} ${subtotal.toFixed(2)}`;
    const formattedDel = isFree ? `<span style="color:#2e7d32; font-weight:700;">FREE (Promo)</span>` : `${SITE_CONFIG.currency} ${fee.toFixed(2)}`;
    const formattedGrand = `${SITE_CONFIG.currency} ${grandTotal.toFixed(2)}`;

    if (subEl) subEl.textContent = formattedSub;
    if (delEl) delEl.innerHTML = formattedDel;
    if (grandEl) grandEl.textContent = formattedGrand;

    if (paySubEl) paySubEl.textContent = formattedSub;
    if (payDelEl) payDelEl.innerHTML = formattedDel;
    if (payGrandEl) payGrandEl.textContent = formattedGrand;

    if (momoBtnEl) momoBtnEl.textContent = formattedGrand;
    if (cardBtnEl) cardBtnEl.textContent = formattedGrand;
}

function renderCheckoutMiniItems() {
    const list = document.getElementById("checkoutItemsMiniList");
    if (!list) return;

    list.innerHTML = cart.map(item => `
        <div class="checkout-mini-item">
            <img src="${item.img}" alt="${escapeHTML(item.title)}">
            <div class="checkout-mini-info">
                <div class="checkout-mini-title">${escapeHTML(item.title)}</div>
                <div style="font-size:0.74rem; color:var(--color-text-muted);">Qty: ${item.qty} ${item.option ? '• ' + escapeHTML(item.option) : ''}</div>
                <div class="checkout-mini-price">${SITE_CONFIG.currency} ${(item.price * item.qty).toFixed(2)}</div>
            </div>
        </div>
    `).join("");
}

function updateCheckoutDeliveryFee(regionKey) {
    const data = DELIVERY_RATES[regionKey] || DELIVERY_RATES["accra-std"];
    checkoutState.deliveryRegion = regionKey;
    checkoutState.deliveryFee = data.fee;
    checkoutState.deliveryTimeline = data.ready;
    updateCheckoutTotals();
}

function proceedToCheckoutPayment(event) {
    if (event) event.preventDefault();

    const name = document.getElementById("chkCustName")?.value.trim();
    const phone = document.getElementById("chkCustPhone")?.value.trim();
    const email = document.getElementById("chkCustEmail")?.value.trim();
    const address = document.getElementById("chkDeliveryAddress")?.value.trim();
    const notes = document.getElementById("chkCustomNotes")?.value.trim();

    if (!name || !phone || !email || !address) {
        showToast("Missing Fields", "Please fill in all required delivery details.");
        return;
    }

    checkoutState.customerInfo = { name, phone, email, address, notes };

    // Fill Payment summary overview
    const sumName = document.getElementById("chkSummaryRecipientName");
    const sumAddr = document.getElementById("chkSummaryAddress");
    const sumPhone = document.getElementById("chkSummaryPhone");
    const momoPhoneInput = document.getElementById("chkMoMoNumber");

    if (sumName) sumName.textContent = name;
    if (sumAddr) sumAddr.textContent = `${address} (${DELIVERY_RATES[checkoutState.deliveryRegion]?.name || 'Accra'})`;
    if (sumPhone) sumPhone.textContent = phone;
    if (momoPhoneInput && !momoPhoneInput.value) momoPhoneInput.value = phone;

    showCheckoutPane(2);
}

function backToCheckoutDelivery() {
    showCheckoutPane(1);
}

// ── MoMo Tab & Networks (Feature #3) ──
function switchPaymentTab(tabKey) {
    checkoutState.paymentMethod = tabKey;
    const tabBtnMoMo = document.getElementById("tabBtnMoMo");
    const tabBtnCard = document.getElementById("tabBtnCard");
    const payPanelMoMo = document.getElementById("payPanelMoMo");
    const payPanelCard = document.getElementById("payPanelCard");

    if (tabKey === "momo") {
        tabBtnMoMo?.classList.add("active");
        tabBtnCard?.classList.remove("active");
        if (payPanelMoMo) payPanelMoMo.style.display = "block";
        if (payPanelCard) payPanelCard.style.display = "none";
    } else {
        tabBtnCard?.classList.add("active");
        tabBtnMoMo?.classList.remove("active");
        if (payPanelCard) payPanelCard.style.display = "block";
        if (payPanelMoMo) payPanelMoMo.style.display = "none";
    }
}

function selectMoMoProvider(providerKey) {
    checkoutState.momoProvider = providerKey;
    document.querySelectorAll(".momo-provider-chip").forEach(c => c.classList.remove("active"));
    const selected = document.getElementById("momoChip" + providerKey.toUpperCase());
    if (selected) selected.classList.add("active");

    const telecelWrap = document.getElementById("telecelVoucherWrap");
    if (telecelWrap) {
        telecelWrap.style.display = providerKey === "telecel" ? "block" : "none";
    }
}

function processMoMoPayment() {
    const momoNumber = document.getElementById("chkMoMoNumber")?.value.trim();
    if (!momoNumber) {
        showToast("MoMo Number Required", "Please enter your Mobile Money phone number.");
        return;
    }

    if (checkoutState.momoProvider === "telecel") {
        const voucher = document.getElementById("chkTelecelVoucher")?.value.trim();
        if (!voucher) {
            showToast("Voucher Required", "Please enter your 6-digit Telecel Cash voucher code (dial *110#).");
            return;
        }
    }

    // Open USSD simulation screen
    const simAmount = document.getElementById("simPromptAmount");
    const simAmountInner = document.getElementById("simPromptAmountInner");
    const simPhone = document.getElementById("simPromptPhone");
    const simCountdown = document.getElementById("simCountdown");

    const amountFormatted = `${SITE_CONFIG.currency} ${checkoutState.grandTotal.toFixed(2)}`;
    if (simAmount) simAmount.textContent = amountFormatted;
    if (simAmountInner) simAmountInner.textContent = checkoutState.grandTotal.toFixed(2);
    if (simPhone) simPhone.textContent = momoNumber;

    showCheckoutPane("sim");

    // Countdown simulation
    let timeLeft = 4;
    if (simCountdown) simCountdown.textContent = timeLeft;

    if (checkoutState.simTimer) clearInterval(checkoutState.simTimer);
    checkoutState.simTimer = setInterval(() => {
        timeLeft--;
        if (simCountdown) simCountdown.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(checkoutState.simTimer);
            checkoutState.simTimer = null;
            completeMoMoSimulation();
        }
    }, 1000);
}

function completeMoMoSimulation() {
    if (checkoutState.simTimer) {
        clearInterval(checkoutState.simTimer);
        checkoutState.simTimer = null;
    }

    const providerNames = { mtn: "MTN MoMo", telecel: "Telecel Cash", at: "AT Money" };
    const network = providerNames[checkoutState.momoProvider] || "MTN MoMo";
    const ref = `MOMO-${checkoutState.momoProvider.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

    finalizeOrderPlacement(network, ref);
}

// ── Card Payments (Feature #4) ──
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, "");
    let formatted = value.match(/.{1,4}/g)?.join(" ") || "";
    input.value = formatted;

    // Detect card type
    const visaIcon = document.getElementById("cardBrandVisa");
    const mcIcon = document.getElementById("cardBrandMastercard");

    if (value.startsWith("4")) {
        visaIcon?.classList.add("active");
        mcIcon?.classList.remove("active");
    } else if (/^(5[1-5]|2[2-7])/.test(value)) {
        mcIcon?.classList.add("active");
        visaIcon?.classList.remove("active");
    } else {
        visaIcon?.classList.remove("active");
        mcIcon?.classList.remove("active");
    }
}

function formatCardExpiry(input) {
    let value = input.value.replace(/\D/g, "");
    if (value.length > 2) {
        input.value = value.substring(0, 2) + "/" + value.substring(2, 4);
    } else {
        input.value = value;
    }
}

function fillDemoCard() {
    const nameEl = document.getElementById("chkCardName");
    const numEl = document.getElementById("chkCardNumber");
    const expEl = document.getElementById("chkCardExpiry");
    const cvvEl = document.getElementById("chkCardCVV");

    if (nameEl) nameEl.value = checkoutState.customerInfo?.name || "Ama Serwaa Mensah";
    if (numEl) {
        numEl.value = "4111 2222 3333 4444";
        formatCardNumber(numEl);
    }
    if (expEl) expEl.value = "12/28";
    if (cvvEl) cvvEl.value = "123";

    showToast("Test Card Loaded", "Loaded verified demo Visa card for testing.");
}

function processCardPayment() {
    const cardName = document.getElementById("chkCardName")?.value.trim();
    const cardNum = document.getElementById("chkCardNumber")?.value.replace(/\s/g, "");
    const cardExp = document.getElementById("chkCardExpiry")?.value.trim();
    const cardCVV = document.getElementById("chkCardCVV")?.value.trim();

    if (!cardName || !cardNum || !cardExp || !cardCVV) {
        showToast("Missing Card Details", "Please fill in all card payment fields.");
        return;
    }

    if (cardNum.length < 15) {
        showToast("Invalid Card Number", "Please enter a valid 16-digit card number.");
        return;
    }

    const cardBrand = cardNum.startsWith("4") ? "Visa Card" : "Mastercard";
    const ref = `CARD-${Math.floor(100000 + Math.random() * 900000)}`;

    finalizeOrderPlacement(cardBrand, ref);
}

// ── Finalize Order & Trigger Notifications (Feature #6) ──
function finalizeOrderPlacement(paymentMethodName, paymentRef) {
    const orderId = `JBJ-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(100 + Math.random() * 900)}`;
    const cust = checkoutState.customerInfo || {
        name: "Valued Customer",
        phone: "+233 50 059 4879",
        email: "client@jewelsbyj.com",
        address: "Accra, Ghana",
        notes: ""
    };

    const newOrder = {
        id: orderId,
        date: new Date().toISOString().replace("T", " ").slice(0, 16),
        customerName: cust.name,
        customerPhone: cust.phone,
        customerEmail: cust.email,
        address: cust.address,
        region: checkoutState.deliveryRegion,
        regionName: DELIVERY_RATES[checkoutState.deliveryRegion]?.name || "Greater Accra",
        deliveryFee: checkoutState.deliveryFee,
        items: cart.map(item => ({
            title: item.title,
            option: item.option || "",
            qty: item.qty,
            price: item.price,
            img: item.img
        })),
        subtotal: checkoutState.subtotal,
        total: checkoutState.grandTotal,
        paymentMethod: paymentMethodName,
        paymentRef: paymentRef,
        notes: cust.notes || "None",
        status: "Payment Confirmed",
        statusCode: "confirmed",
        timeline: `Dispatches to ${cust.address} (${checkoutState.deliveryTimeline})`
    };

    // Save order
    storeOrders.unshift(newOrder);
    localStorage.setItem("j_orders", JSON.stringify(storeOrders));

    // Play subtle audio alert & trigger email notification
    playOrderNotificationSound();
    sendEmailOrderNotification(newOrder);

    // Update Display
    const orderIdDisplay = document.getElementById("successOrderIdDisplay");
    if (orderIdDisplay) orderIdDisplay.textContent = orderId;

    // Set WhatsApp notification button
    const notifyBtn = document.getElementById("btnNotifyAtelierWhatsApp");
    if (notifyBtn) {
        let waText = `*PAID ORDER CONFIRMATION — ${SITE_CONFIG.brandName.toUpperCase()}*\n`;
        waText += `─────────────────────────\n`;
        waText += `*Order ID:* ${orderId}\n`;
        waText += `*Customer:* ${cust.name} (${cust.phone})\n`;
        waText += `*Email:* ${cust.email}\n`;
        waText += `*Delivery Address:* ${cust.address} (${newOrder.regionName})\n`;
        waText += `*Payment Method:* ${paymentMethodName} (Ref: ${paymentRef})\n`;
        waText += `*Total Amount:* ${SITE_CONFIG.currency} ${newOrder.total.toFixed(2)}\n\n`;
        waText += `*Items Ordered:*\n`;
        newOrder.items.forEach((it, idx) => {
            waText += `${idx + 1}. ${it.title} ${it.option ? '(' + it.option + ')' : ''} × ${it.qty} = ${SITE_CONFIG.currency} ${(it.price * it.qty).toFixed(2)}\n`;
        });
        if (cust.notes) waText += `\n*Custom Notes / Engraving:* ${cust.notes}\n`;
        waText += `\nPlease confirm receiving my order!`;

        const waUrl = `https://wa.me/${storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
        notifyBtn.onclick = () => window.open(waUrl, "_blank");
    }

    // Empty Cart
    cart = [];
    saveCart();

    // Advance to Step 3
    showCheckoutPane(3);
    updateAdminNotificationBadge();
    showToast("Order Placed!", `Order #${orderId} confirmed via ${paymentMethodName}.`);
}

// ── Audio Notification Chime (Feature #6) ──
function playOrderNotificationSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
        // Audio policy ignore
    }
}

// ── Email Notification Dispatch (Feature #6) ──
function sendEmailOrderNotification(order) {
    const targetEmail = storeSettings.email || SITE_CONFIG.email;
    try {
        fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
                _subject: `💎 NEW PAID ORDER #${order.id} — ${order.customerName} (${SITE_CONFIG.currency} ${order.total.toFixed(2)})`,
                order_id: order.id,
                customer_name: order.customerName,
                customer_phone: order.customerPhone,
                customer_email: order.customerEmail,
                delivery_address: order.address,
                payment_method: order.paymentMethod,
                payment_ref: order.paymentRef,
                items: order.items.map(i => `${i.title} (${i.option || 'Standard'}) x${i.qty} = GH₵ ${i.price * i.qty}`).join("\n"),
                notes: order.notes,
                grand_total: `GH₵ ${order.total.toFixed(2)}`
            })
        }).catch(() => { /* Silent background catch */ });
    } catch (e) {
        // Ignore background network errors
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// ORDER TRACKING SYSTEM (THE STRAND BRAND PARCEL TRACKER)
// ═══════════════════════════════════════════════════════════════════════════
function initTrackOrder() {
    const form = document.getElementById("trackOrderForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const orderNum = document.getElementById("trackOrderNumber")?.value.trim().toUpperCase();
        const contact = document.getElementById("trackOrderContact")?.value.trim().toLowerCase().replace(/[\s+-]/g, "");

        if (!orderNum || !contact) return;

        // Search storeOrders
        const found = storeOrders.find(ord => {
            const matchesId = ord.id.toUpperCase() === orderNum;
            const ordContactClean = (ord.customerEmail + " " + ord.customerPhone).toLowerCase().replace(/[\s+-]/g, "");
            const matchesContact = ordContactClean.includes(contact) || contact.includes(ord.customerPhone.replace(/[\s+-]/g, ""));
            return matchesId && matchesContact;
        });

        const emptyState = document.getElementById("trackEmptyState");
        const resultCard = document.getElementById("trackResultCard");

        if (found) {
            if (emptyState) emptyState.style.display = "none";
            renderOrderTrackingResult(found);
            if (resultCard) {
                resultCard.style.display = "block";
                resultCard.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            if (resultCard) resultCard.style.display = "none";
            if (emptyState) emptyState.style.display = "block";
        }
    });
}

function fillDemoOrder(orderId, contact) {
    const numInput = document.getElementById("trackOrderNumber");
    const contactInput = document.getElementById("trackOrderContact");
    if (numInput) numInput.value = orderId;
    if (contactInput) contactInput.value = contact;

    const form = document.getElementById("trackOrderForm");
    if (form) {
        const submitEvent = new Event("submit", { cancelable: true });
        form.dispatchEvent(submitEvent);
    }
}

function renderOrderTrackingResult(order) {
    const card = document.getElementById("trackResultCard");
    if (!card) return;

    const steps = [
        { code: "placed", label: "Order Placed", icon: "fa-cart-shopping" },
        { code: "confirmed", label: "Payment Confirmed", icon: "fa-shield-check" },
        { code: "crafting", label: "Atelier Crafting", icon: "fa-wand-magic-sparkles" },
        { code: "transit", label: "In Transit / Out for Delivery", icon: "fa-truck-fast" },
        { code: "delivered", label: "Delivered", icon: "fa-house-circle-check" }
    ];

    let activeIndex = 1;
    if (order.statusCode === "placed") activeIndex = 0;
    else if (order.statusCode === "confirmed") activeIndex = 1;
    else if (order.statusCode === "crafting") activeIndex = 2;
    else if (order.statusCode === "transit") activeIndex = 3;
    else if (order.statusCode === "delivered") activeIndex = 4;

    card.innerHTML = `
        <div style="background:#fff; border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:28px; box-shadow:var(--shadow-md); margin-top:24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--color-border); padding-bottom:16px; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--color-gold); font-weight:700;">Live Tracking Order</span>
                    <h3 style="font-size:1.4rem; color:var(--color-black); font-family:monospace; margin-top:2px;">${escapeHTML(order.id)}</h3>
                </div>
                <div>
                    <span class="status-pill status-${order.statusCode || 'confirmed'}">${escapeHTML(order.status)}</span>
                </div>
            </div>

            <!-- Stepper Progress Bar -->
            <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin:24px 0 32px; text-align:center;">
                ${steps.map((st, idx) => `
                    <div style="position:relative;">
                        <div style="width:36px; height:36px; border-radius:50%; margin:0 auto 8px; display:flex; align-items:center; justify-content:center; font-size:0.95rem; background:${idx <= activeIndex ? 'var(--color-black)' : 'var(--color-surface-soft)'}; color:${idx <= activeIndex ? 'var(--color-gold)' : 'var(--color-text-subtle)'}; border:1.5px solid ${idx <= activeIndex ? 'var(--color-gold)' : 'var(--color-border)'};">
                            <i class="fa-solid ${st.icon}"></i>
                        </div>
                        <span style="font-size:0.72rem; font-weight:${idx <= activeIndex ? '700' : '500'}; color:${idx <= activeIndex ? 'var(--color-black)' : 'var(--color-text-subtle)'}; display:block;">
                            ${st.label}
                        </span>
                    </div>
                `).join("")}
            </div>

            <!-- Details Grid -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; background:var(--color-surface-soft); padding:20px; border-radius:var(--radius-md); font-size:0.85rem; margin-bottom:20px;">
                <div>
                    <div style="color:var(--color-text-muted); font-size:0.75rem; text-transform:uppercase; font-weight:700; margin-bottom:4px;">Delivery Destination</div>
                    <strong>${escapeHTML(order.customerName)}</strong><br>
                    <span>${escapeHTML(order.address)}</span><br>
                    <span style="color:var(--color-gold); font-size:0.8rem;">${escapeHTML(order.customerPhone)}</span>
                </div>
                <div>
                    <div style="color:var(--color-text-muted); font-size:0.75rem; text-transform:uppercase; font-weight:700; margin-bottom:4px;">Courier Timeline &amp; Payment</div>
                    <div><i class="fa-solid fa-clock" style="color:var(--color-gold);"></i> ${escapeHTML(order.timeline || 'In progress')}</div>
                    <div><i class="fa-solid fa-credit-card" style="color:var(--color-gold);"></i> Paid via ${escapeHTML(order.paymentMethod)} (${SITE_CONFIG.currency} ${Number(order.total).toFixed(2)})</div>
                </div>
            </div>

            <div style="text-align:center;">
                <a href="https://wa.me/${storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber}?text=Hi%20Jewels%20by%20J,%20I'm%20inquiring%20about%20my%20order%20${encodeURIComponent(order.id)}" target="_blank" class="btn btn-whatsapp btn-sm">
                    <i class="fa-brands fa-whatsapp"></i> Chat with Concierge About This Order
                </a>
            </div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════════════════
// FEATURE 8: ATELIER ADMIN PORTAL (PRODUCTS & ORDERS MANAGEMENT)
// ═══════════════════════════════════════════════════════════════════════════
function initAdminPortal() {
    renderAdminDashboardStats();
    renderAdminProducts();
    renderAdminOrders();

    // Populate Settings form
    const setWa = document.getElementById("settingWhatsapp");
    const setEmail = document.getElementById("settingEmail");
    const setFree = document.getElementById("settingFreeDelivery");
    const setPin = document.getElementById("settingAdminPIN");

    if (setWa) setWa.value = storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber;
    if (setEmail) setEmail.value = storeSettings.email || SITE_CONFIG.email;
    if (setFree) setFree.value = storeSettings.freeDeliveryThreshold || SITE_CONFIG.freeDeliveryThreshold;
    if (setPin) setPin.value = storeSettings.adminPIN || "2023";
}

function updateAdminNotificationBadge() {
    const dot = document.getElementById("navAdminNotifyDot");
    const pendingOrders = storeOrders.filter(o => o.statusCode !== "delivered").length;
    if (dot) {
        dot.style.display = pendingOrders > 0 ? "block" : "none";
    }
}

// ── PIN Authentication Keypad ──
function pressAdminKey(digit) {
    if (adminEnteredPIN.length < 4) {
        adminEnteredPIN += digit;
        updateAdminPinDots();
        if (adminEnteredPIN.length === 4) {
            setTimeout(submitAdminPIN, 180);
        }
    }
}

function clearAdminKey() {
    adminEnteredPIN = adminEnteredPIN.slice(0, -1);
    updateAdminPinDots();
}

function updateAdminPinDots() {
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById("pindot-" + i);
        if (dot) {
            dot.classList.toggle("filled", i <= adminEnteredPIN.length);
        }
    }
}

function submitAdminPIN() {
    const validPIN = storeSettings.adminPIN || "2023";
    if (adminEnteredPIN === validPIN) {
        unlockAdminDashboard();
    } else {
        showToast("Incorrect PIN", "Access denied. Please check your 4-digit PIN.");
        adminEnteredPIN = "";
        updateAdminPinDots();
    }
}

function unlockAdminDashboard() {
    isAdminAuthenticated = true;
    const gate = document.getElementById("adminAuthGate");
    const dash = document.getElementById("adminDashboardView");
    if (gate) gate.style.display = "none";
    if (dash) dash.style.display = "block";

    renderAdminDashboardStats();
    renderAdminProducts();
    renderAdminOrders();
    showToast("Welcome Jerrilyn", "Atelier Dashboard unlocked.");
}

function lockAdminDashboard() {
    isAdminAuthenticated = false;
    adminEnteredPIN = "";
    updateAdminPinDots();
    const gate = document.getElementById("adminAuthGate");
    const dash = document.getElementById("adminDashboardView");
    if (gate) gate.style.display = "block";
    if (dash) dash.style.display = "none";
    showToast("Dashboard Locked", "Admin session ended securely.");
}

function switchAdminTab(tabKey) {
    const tabs = ["products", "orders", "settings"];
    tabs.forEach(t => {
        const btn = document.getElementById(`admTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
        const content = document.getElementById(`admTabContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (btn) btn.classList.toggle("active", t === tabKey);
        if (content) content.style.display = t === tabKey ? "block" : "none";
    });
}

function renderAdminDashboardStats() {
    const revEl = document.getElementById("adminStatRevenue");
    const ordEl = document.getElementById("adminStatOrders");
    const pendEl = document.getElementById("adminStatPending");
    const prodEl = document.getElementById("adminStatProducts");

    const totalRev = storeOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    const pendingCount = storeOrders.filter(o => o.statusCode !== "delivered").length;

    if (revEl) revEl.textContent = `${SITE_CONFIG.currency} ${totalRev.toFixed(2)}`;
    if (ordEl) ordEl.textContent = storeOrders.length;
    if (pendEl) pendEl.textContent = pendingCount;
    if (prodEl) prodEl.textContent = storeProducts.length;

    const tabProdCount = document.getElementById("admTabProdCount");
    const tabOrdCount = document.getElementById("admTabOrderCount");
    if (tabProdCount) tabProdCount.textContent = storeProducts.length;
    if (tabOrdCount) tabOrdCount.textContent = storeOrders.length;
}

// ── Admin Product Management Suite ──
function renderAdminProducts() {
    const tbody = document.getElementById("adminProductsTableBody");
    if (!tbody) return;

    tbody.innerHTML = storeProducts.map(p => `
        <tr>
            <td>
                <img src="${p.img}" alt="${escapeHTML(p.title)}" class="admin-prod-thumb">
            </td>
            <td>
                <strong style="color:var(--color-black);">${escapeHTML(p.title)}</strong><br>
                <span style="font-size:0.75rem; color:var(--color-text-muted);">${escapeHTML(p.metal || 'Atelier Fine')}</span>
            </td>
            <td>
                <span style="font-size:0.8rem; text-transform:capitalize;">${escapeHTML(p.categoryName || p.category)}</span>
            </td>
            <td>
                <strong style="color:var(--color-gold);">${SITE_CONFIG.currency} ${p.price.toFixed(2)}</strong>
            </td>
            <td>
                ${p.originalPrice ? `<span style="text-decoration:line-through; color:var(--color-text-subtle);">${SITE_CONFIG.currency} ${p.originalPrice.toFixed(2)}</span>` : '<span style="color:var(--color-text-subtle);">-</span>'}
            </td>
            <td>
                ${p.badge ? `<span class="badge badge-${p.badgeType || 'bestseller'}">${escapeHTML(p.badge)}</span>` : '<span style="color:var(--color-text-subtle);">-</span>'}
            </td>
            <td>
                <span style="color:#2e7d32; font-weight:600; font-size:0.8rem;"><i class="fa-solid fa-circle-check"></i> In Stock</span>
            </td>
            <td>
                <div style="display:flex; gap:6px;">
                    <button class="btn btn-outline btn-sm" onclick="openEditProductModal('${p.id}')" style="padding:4px 8px; font-size:0.75rem;" title="Edit Product">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="deleteAdminProduct('${p.id}')" style="padding:4px 8px; font-size:0.75rem; color:#d32f2f;" title="Delete Product">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join("");
}

function openAddProductModal() {
    const backdrop = document.getElementById("adminProductModalBackdrop");
    const titleEl = document.getElementById("adminProdModalTitle");
    const form = document.getElementById("adminProductForm");
    const preview = document.getElementById("admProdImgPreview");

    if (titleEl) titleEl.textContent = "Add New Atelier Product";
    if (form) form.reset();
    document.getElementById("admProdId").value = "";
    document.getElementById("admProdImgData").value = "";
    if (preview) {
        preview.src = "";
        preview.style.display = "none";
    }

    if (backdrop) backdrop.classList.add("active");
}

function openEditProductModal(productId) {
    const p = storeProducts.find(item => item.id === productId);
    if (!p) return;

    const backdrop = document.getElementById("adminProductModalBackdrop");
    const titleEl = document.getElementById("adminProdModalTitle");
    const preview = document.getElementById("admProdImgPreview");

    if (titleEl) titleEl.textContent = `Edit Product: ${p.title}`;

    document.getElementById("admProdId").value = p.id;
    document.getElementById("admProdTitle").value = p.title;
    document.getElementById("admProdCategory").value = p.category;
    document.getElementById("admProdPrice").value = p.price;
    document.getElementById("admProdOriginalPrice").value = p.originalPrice || "";
    document.getElementById("admProdMetal").value = p.metal || "";
    document.getElementById("admProdBadge").value = p.badge || "";
    document.getElementById("admProdOptions").value = p.options ? p.options.join(", ") : "";
    document.getElementById("admProdDesc").value = p.description || "";
    document.getElementById("admProdImgUrl").value = p.img.startsWith("data:") ? "" : p.img;
    document.getElementById("admProdImgData").value = p.img;

    if (preview) {
        preview.src = p.img;
        preview.style.display = "block";
    }

    if (backdrop) backdrop.classList.add("active");
}

function closeAdminProductModal() {
    const backdrop = document.getElementById("adminProductModalBackdrop");
    if (backdrop) backdrop.classList.remove("active");
}

function handleAdminImageUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64Data = e.target.result;
        document.getElementById("admProdImgData").value = base64Data;
        const preview = document.getElementById("admProdImgPreview");
        if (preview) {
            preview.src = base64Data;
            preview.style.display = "block";
        }
        showToast("Photo Ready", "Image loaded into product preview.");
    };
    reader.readAsDataURL(file);
}

function saveAdminProduct(event) {
    event.preventDefault();

    const id = document.getElementById("admProdId").value;
    const title = document.getElementById("admProdTitle").value.trim();
    const category = document.getElementById("admProdCategory").value;
    const price = parseFloat(document.getElementById("admProdPrice").value);
    const origPriceVal = document.getElementById("admProdOriginalPrice").value.trim();
    const originalPrice = origPriceVal ? parseFloat(origPriceVal) : null;
    const metal = document.getElementById("admProdMetal").value.trim() || "Atelier Handcrafted";
    const badge = document.getElementById("admProdBadge").value;
    const optionsRaw = document.getElementById("admProdOptions").value.trim();
    const description = document.getElementById("admProdDesc").value.trim();
    const imgData = document.getElementById("admProdImgData").value;
    const imgUrl = document.getElementById("admProdImgUrl").value.trim();

    const finalImg = imgData || imgUrl || "images/jerrilyn.jpg";
    const options = optionsRaw ? optionsRaw.split(",").map(o => o.trim()).filter(Boolean) : ["16\"", "18\""];

    const categoryNames = {
        necklaces: "Nameplate Necklaces",
        bracelets: "Bracelets & Bangles",
        giftsets: "Gift Sets & Keepsakes",
        pendants: "Initial Pendants",
        custom: "Bespoke Jewelry"
    };

    if (id) {
        // Edit existing
        const idx = storeProducts.findIndex(p => p.id === id);
        if (idx > -1) {
            storeProducts[idx] = {
                ...storeProducts[idx],
                title,
                category,
                categoryName: categoryNames[category] || category,
                price,
                originalPrice,
                metal,
                badge,
                badgeType: badge ? badge.toLowerCase() : "",
                options,
                description,
                img: finalImg
            };
            showToast("Product Updated", `${title} has been updated in the catalogue.`);
        }
    } else {
        // Add new product
        const newProduct = {
            id: "p_" + Date.now(),
            title,
            category,
            categoryName: categoryNames[category] || category,
            price,
            originalPrice,
            metal,
            badge,
            badgeType: badge ? badge.toLowerCase() : "",
            options,
            description,
            img: finalImg,
            isNew: true
        };
        storeProducts.unshift(newProduct);
        showToast("Product Created", `${title} added directly to your online store.`);
    }

    PRODUCTS = storeProducts;
    localStorage.setItem("j_products", JSON.stringify(storeProducts));

    renderProducts();
    renderAdminProducts();
    renderAdminDashboardStats();
    closeAdminProductModal();
}

function deleteAdminProduct(productId) {
    const p = storeProducts.find(item => item.id === productId);
    if (!p) return;

    if (confirm(`Are you sure you want to remove "${p.title}" from the store catalogue?`)) {
        storeProducts = storeProducts.filter(item => item.id !== productId);
        PRODUCTS = storeProducts;
        localStorage.setItem("j_products", JSON.stringify(storeProducts));

        renderProducts();
        renderAdminProducts();
        renderAdminDashboardStats();
        showToast("Product Removed", `"${p.title}" deleted from the catalogue.`);
    }
}

function resetProductsToDefault() {
    if (confirm("Reset store catalogue back to the original 21 atelier pieces? Custom added products will be restored to defaults.")) {
        storeProducts = INITIAL_PRODUCTS.slice();
        PRODUCTS = storeProducts;
        localStorage.setItem("j_products", JSON.stringify(storeProducts));

        renderProducts();
        renderAdminProducts();
        renderAdminDashboardStats();
        showToast("Catalogue Restored", "Store reset to atelier factory drops.");
    }
}

// ── Admin Orders Suite ──
function renderAdminOrders() {
    const tbody = document.getElementById("adminOrdersTableBody");
    if (!tbody) return;

    if (storeOrders.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align:center; padding:30px; color:var(--color-text-muted);">
                    No customer orders received yet. Live orders from online checkout will display here in real-time.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = storeOrders.map(ord => `
        <tr>
            <td>
                <strong style="font-family:monospace; color:var(--color-black);">${escapeHTML(ord.id)}</strong>
            </td>
            <td>
                <span style="font-size:0.75rem; color:var(--color-text-muted);">${escapeHTML(ord.date)}</span>
            </td>
            <td>
                <strong>${escapeHTML(ord.customerName)}</strong><br>
                <span style="font-size:0.75rem; color:var(--color-gold);">${escapeHTML(ord.customerPhone)}</span>
            </td>
            <td>
                <span style="font-size:0.75rem;">${escapeHTML(ord.address)}</span>
            </td>
            <td>
                <span style="font-size:0.75rem;">${ord.items.map(i => `${escapeHTML(i.title)} (×${i.qty})`).join("<br>")}</span>
            </td>
            <td>
                <span style="font-size:0.75rem; font-weight:600;">${escapeHTML(ord.paymentMethod)}</span>
            </td>
            <td>
                <strong style="color:var(--color-black);">${SITE_CONFIG.currency} ${Number(ord.total).toFixed(2)}</strong>
            </td>
            <td>
                <select class="shop-select" onchange="updateOrderStatus('${ord.id}', this.value)" style="padding:4px 8px; font-size:0.75rem;">
                    <option value="confirmed" ${ord.statusCode === 'confirmed' ? 'selected' : ''}>Confirmed / Paid</option>
                    <option value="crafting" ${ord.statusCode === 'crafting' ? 'selected' : ''}>Crafting in Atelier</option>
                    <option value="transit" ${ord.statusCode === 'transit' ? 'selected' : ''}>In Transit</option>
                    <option value="delivered" ${ord.statusCode === 'delivered' ? 'selected' : ''}>Delivered</option>
                </select>
            </td>
            <td>
                <button class="btn btn-whatsapp btn-sm" onclick="whatsappCustomerOrder('${ord.id}')" style="padding:4px 10px; font-size:0.75rem;" title="WhatsApp Customer">
                    <i class="fa-brands fa-whatsapp"></i> Chat
                </button>
            </td>
        </tr>
    `).join("");
}

function updateOrderStatus(orderId, newStatusCode) {
    const ord = storeOrders.find(o => o.id === orderId);
    if (!ord) return;

    const statusNames = {
        confirmed: "Payment Confirmed",
        crafting: "Crafting in Atelier",
        transit: "In Transit / Out for Delivery",
        delivered: "Delivered"
    };

    ord.statusCode = newStatusCode;
    ord.status = statusNames[newStatusCode] || newStatusCode;
    localStorage.setItem("j_orders", JSON.stringify(storeOrders));

    renderAdminOrders();
    renderAdminDashboardStats();
    updateAdminNotificationBadge();
    showToast("Status Updated", `Order #${orderId} marked as "${ord.status}".`);
}

function whatsappCustomerOrder(orderId) {
    const ord = storeOrders.find(o => o.id === orderId);
    if (!ord) return;

    let phoneClean = ord.customerPhone.replace(/[\s+-]/g, "");
    if (phoneClean.startsWith("0")) phoneClean = "233" + phoneClean.slice(1);

    const msg = `Hello ${ord.customerName}! ✨ This is Jerrilyn from Jewels by J atelier regarding your order #${ord.id}. Your order status is currently: *${ord.status}*. We are making sure your pieces are flawless! Delivery address: ${ord.address}. Let us know if you need anything!`;
    window.open(`https://wa.me/${phoneClean}?text=${encodeURIComponent(msg)}`, "_blank");
}

function exportOrdersJSON() {
    const blob = new Blob([JSON.stringify(storeOrders, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jewels_by_j_orders_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Backup Saved", "Orders exported to JSON file.");
}

function saveAdminSettings(event) {
    event.preventDefault();
    storeSettings.whatsappNumber = document.getElementById("settingWhatsapp").value.trim();
    storeSettings.email = document.getElementById("settingEmail").value.trim();
    storeSettings.freeDeliveryThreshold = parseFloat(document.getElementById("settingFreeDelivery").value);
    storeSettings.adminPIN = document.getElementById("settingAdminPIN").value.trim() || "2023";

    localStorage.setItem("j_settings", JSON.stringify(storeSettings));
    showToast("Settings Saved", "Atelier contact and security settings updated.");
}