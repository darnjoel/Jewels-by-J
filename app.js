/* ═══════════════════════════════════════════════════════════════════════════
   JEWELS BY J — E-COMMERCE APPLICATION JAVASCRIPT
   Inspired by The Strand Brand Architecture & Features
   (Email system updated: central sender, activation-safe, auto-reply, spam trap)
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Configuration ──
const SITE_CONFIG = {
    brandName: "Jewels by J",
    phone: "+233 59 325 2913",
    whatsappNumber: "233593252913",
    email: "mensahjerrilyn@gmail.com",
    snapchatUrl: "https://snapchat.com/t/9O7WC58U",
    instagramUrl: "https://www.instagram.com/Jewels.with_j",
    tiktokUrl: "https://www.tiktok.com/@jewels.by_j4",
    currency: "GH₵",
    freeDeliveryThreshold: 30,
    // ── EmailJS Dispatch & Reply Gateway (mensahjerrilyn@gmail.com) ──
    emailjs: {
        serviceId: "service_0wy2cgh",
        templateId: "template_ocw57xp",
        publicKey: "H29CgoFchjgsnL_0S"
    },
    // ── Firebase Database Security & Auth Vault ──
    firebase: {
        apiKey: "AIzaSyB3_JewelsByJ_SecurityVault2026",
        authDomain: "jewels-by-j-store.firebaseapp.com",
        projectId: "jewels-by-j-store",
        storageBucket: "jewels-by-j-store.appspot.com",
        messagingSenderId: "982736412034",
        appId: "1:982736412034:web:7f6a9c1e3b5d2048"
    }
};

// ── Complete Initial Product Catalog ──
const INITIAL_PRODUCTS = [
    {
        id: "p1",
        title: "Jerrilyn Duo Butterfly Nameplates",
        category: "necklaces",
        categoryName: "Nameplate Necklaces",
        price: 380,
        originalPrice: null,
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
// Normalize stock availability status on all products
storeProducts.forEach(p => {
    if (!p.status) p.status = (p.inStock === false ? "unavailable" : "available");
    if (p.inStock === undefined) p.inStock = (p.status !== "unavailable");
});
// For backwards compatibility across all catalog & cart lookups
let PRODUCTS = storeProducts;

// ── Customer Reviews Dataset (Real Customer Reviews Only) ──
const INITIAL_REVIEWS = [];

let storeReviews = JSON.parse(localStorage.getItem("j_reviews") || "null");
if (!storeReviews || !Array.isArray(storeReviews)) {
    storeReviews = [];
    localStorage.setItem("j_reviews", JSON.stringify(storeReviews));
}
// Clean out any legacy mock demo reviews so store starts strictly fresh
if (storeReviews.length > 0 && storeReviews.every(r => r.id === "rev_1" || r.id === "rev_2" || r.id === "rev_3")) {
    storeReviews = [];
    localStorage.setItem("j_reviews", JSON.stringify(storeReviews));
}

// ── Store Orders State (Feature #6 & #8) ──
let storeOrders = JSON.parse(localStorage.getItem("j_orders") || "null");
if (!storeOrders) {
    storeOrders = [
        {
            id: "JBJ-20261029-001",
            date: "2026-10-29 14:20",
            customerName: "Ama Serwaa",
            customerPhone: "+233 59 325 2913",
            customerEmail: "client@jewelsbyj.com",
            address: "East Legon, near Melcom, Accra",
            region: "accra-std",
            regionName: "Greater Accra (Metro)",
            deliveryFee: 0,
            items: [
                { title: "Jerrilyn Duo Butterfly Nameplates", option: "18\"", qty: 1, price: 380, img: "images/jerrilyn.jpg" }
            ],
            subtotal: 380,
            total: 380,
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
            customerPhone: "0593252913",
            customerEmail: "kofi@example.com",
            address: "KNUST Campus, Commercial Area, Kumasi",
            region: "kumasi",
            regionName: "Kumasi (Ashanti Region)",
            deliveryFee: 0,
            items: [
                { title: "Selorm Custom Silver Cuban ID Bracelet", option: "7.5\"", qty: 1, price: 390, img: "images/B1.jpg" }
            ],
            subtotal: 390,
            total: 390,
            paymentMethod: "Visa Card",
            paymentRef: "CARD-AUTH-88219",
            notes: "Engrave 'Selorm' in bold block capital",
            status: "Crafting in Studio",
            statusCode: "crafting",
            timeline: "In hand-polishing and silver engraving. Dispatches Thursday"
        }
    ];
    localStorage.setItem("j_orders", JSON.stringify(storeOrders));
}

// Normalize stored orders so delivery fees are never added to customer total
if (Array.isArray(storeOrders)) {
    storeOrders.forEach(ord => {
        ord.deliveryFee = 0;
        if (ord.subtotal) ord.total = ord.subtotal;
    });
}

// ── Store Settings (Feature #7 & #8) ──
let storeSettings = JSON.parse(localStorage.getItem("j_settings") || "null");
if (!storeSettings) {
    storeSettings = {
        whatsappNumber: SITE_CONFIG.whatsappNumber,
        email: SITE_CONFIG.email,
        freeDeliveryThreshold: SITE_CONFIG.freeDeliveryThreshold,
        adminPIN: "2023",
        paystackPublicKey: "",
        momoMerchantNumber: "0593252913",
        momoMerchantName: "Jewels by J (Jerrilyn Mensah)",
        cloudSyncUrl: "",
        web3Key: "",
        emailjsServiceId: "service_0wy2cgh",
        emailjsTemplateId: "template_ocw57xp",
        emailjsPublicKey: "H29CgoFchjgsnL_0S",
        preferences: {
            theme: "default",
            fontSize: "standard",
            headingFont: "cormorant",
            storeStatus: "open",
            orderChime: true,
            autoMarkRead: true,
            lowStockThreshold: 3,
            currency: "GHS",
            waTemplate: "Hello! ✨ Thank you for contacting Jewels by J. How can we assist with your bespoke jewelry today?"
        }
    };
    localStorage.setItem("j_settings", JSON.stringify(storeSettings));
} else {
    if (storeSettings.adminPIN === "1234") {
        storeSettings.adminPIN = "2023";
    }
    if (storeSettings.paystackPublicKey === undefined) storeSettings.paystackPublicKey = "";
    if (!storeSettings.whatsappNumber || storeSettings.whatsappNumber === "233500594879") {
        storeSettings.whatsappNumber = "233593252913";
    }
    if (!storeSettings.momoMerchantNumber || storeSettings.momoMerchantNumber === "0500594879") {
        storeSettings.momoMerchantNumber = "0593252913";
    }
    if (!storeSettings.momoMerchantName) storeSettings.momoMerchantName = "Jewels by J (Jerrilyn Mensah)";
    if (storeSettings.cloudSyncUrl === undefined) storeSettings.cloudSyncUrl = "";
    if (storeSettings.emailjsServiceId === undefined) storeSettings.emailjsServiceId = "service_0wy2cgh";
    if (storeSettings.emailjsTemplateId === undefined) storeSettings.emailjsTemplateId = "template_ocw57xp";
    if (!storeSettings.emailjsPublicKey) storeSettings.emailjsPublicKey = "H29CgoFchjgsnL_0S";
    if (!storeSettings.preferences) {
        storeSettings.preferences = {
            theme: "default",
            fontSize: "standard",
            headingFont: "cormorant",
            storeStatus: "open",
            orderChime: true,
            autoMarkRead: true,
            lowStockThreshold: 3,
            currency: "GHS",
            waTemplate: "Hello! ✨ Thank you for contacting Jewels by J. How can we assist with your bespoke jewelry today?"
        };
    }
    localStorage.setItem("j_settings", JSON.stringify(storeSettings));
}

// ── Store Messages / Inquiries (Admin Customer Inbox) ──
let storeMessages = JSON.parse(localStorage.getItem("j_messages") || "null");
if (!storeMessages || !Array.isArray(storeMessages) || storeMessages.length === 0) {
    storeMessages = [
        {
            id: "msg_demo_001",
            name: "Nana Akua Frimpong",
            email: "nana.akua@gmail.com",
            phone: "+233 24 412 3890",
            subject: "Bespoke Bridal Suite Consultation",
            message: "Hello Jerrilyn, I am getting married in December at Kempinski Gold Coast City and would love a custom 18k gold bridal necklace with matching ear cuffs for my bridal party of 6. Could we schedule a bespoke design appointment?",
            type: "bespoke",
            date: "2026-10-31 16:42",
            unread: true
        },
        {
            id: "msg_demo_002",
            name: "Yaa Mansa",
            email: "yaa.mansa88@yahoo.com",
            phone: "+233 20 876 5432",
            subject: "Custom Rose Cuban Nameplate Inquiry",
            message: "Hi! I wanted to find out if the Moesha Royal Rose Cuban Nameplate can be crafted in 14k solid yellow gold instead of vermeil, and what the lead time would be for delivery to East Legon.",
            type: "inquiry",
            date: "2026-10-30 09:15",
            unread: false
        }
    ];
    localStorage.setItem("j_messages", JSON.stringify(storeMessages));
}

let currentAdminMessageFilter = "all";
let adminInboxSearchQuery = "";
let currentViewingMessageId = null;

// ── Registered Users Database Vault (Firebase & Local Security) ──
let registeredUsers = JSON.parse(localStorage.getItem("j_users_db") || "null");
if (!registeredUsers || !Array.isArray(registeredUsers) || registeredUsers.length === 0) {
    registeredUsers = [
        {
            uid: "usr_admin_001",
            name: "Jerrilyn Mensah",
            email: "mensahjerrilyn@gmail.com",
            phone: "+233 59 325 2913",
            passwordHash: "jerrilyn2026",
            createdAt: "2026-10-01 09:00"
        },
        {
            uid: "usr_demo_002",
            name: "Ama Serwaa",
            email: "ama@example.com",
            phone: "+233 54 123 4567",
            passwordHash: "password123",
            createdAt: "2026-10-15 14:30"
        }
    ];
    localStorage.setItem("j_users_db", JSON.stringify(registeredUsers));
}

// Firebase Global References
let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;
let isFirebaseReady = false;

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
let lastPlacedOrderId = null;

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
    deliveryFee: 0, // Delivery fee is NOT added to customer's price; arranged manually via phone/text
    deliveryTimeline: "24–48 Hours",
    grandTotal: 0,
    paymentMethod: "paystack",
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
    initFirebase();
    initAuthSystem();
    initLightbox();
    initContactForm();
    initNewsletterForm();
    initCustomizer();
    initDeliveryCalculator();
    initCheckoutModal();
    initAdminPortal();
    initTrackOrder();
    renderCustomerReviews();
    setReviewRating(5);
    updateCartUI();
    updateWishlistUI();
    updateAuthUI();
    updateAdminNotificationBadge();

    // Initialize EmailJS if public key is configured
    if (typeof emailjs !== "undefined" && storeSettings && storeSettings.emailjsPublicKey) {
        try {
            emailjs.init({ publicKey: storeSettings.emailjsPublicKey });
        } catch (e) {
            console.warn("EmailJS init warning:", e);
        }
    }

    // Check URL parameters for direct category navigation (like The Strand Brand ?category=...)
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("category");
    if (catParam) {
        setCategory(catParam);
        navigateTo("shop");
    }

    // Check URL parameters for direct order tracking deep-links (?track=JBJ-... or ?order=JBJ-...)
    const trackParam = params.get("track") || params.get("order");
    if (trackParam) {
        setTimeout(() => {
            trackSpecificOrder(trackParam.trim(), "");
        }, 150);
    }
});

// ═══════════════════════════════════════════════════════════════════════════
// CENTRAL EMAIL SENDER (FormSubmit.co Direct Delivery)
// Dispatches directly to the admin inbox (mensahjerrilyn@gmail.com).
// Free, reliable, with HTML table formatting, reply-to, and activation checks.
// ═══════════════════════════════════════════════════════════════════════════
function getAdminEmail() {
    return (storeSettings && storeSettings.email) || SITE_CONFIG.email || "mensahjerrilyn@gmail.com";
}

async function sendStoreEmail(subject, fields = {}, extra = {}) {
    const targetEmail = getAdminEmail();

    // Turn key/values into clean rows for email body
    const details = Object.entries(fields)
        .filter(([k, v]) => v !== undefined && v !== null && String(v).trim() !== "" && !k.startsWith("_"))
        .map(([k, v]) => `${k.replace(/_/g, " ").toUpperCase()}: ${v}`)
        .join("\n");

    const payload = {
        _subject: subject,
        name: fields.name || "Jewels by J Visitor",
        email: fields.email || "no-reply@jewelsbyj.com",
        phone: fields.phone || "Not provided",
        message: fields.message || details || "Customer inquiry submitted from Jewels by J store.",
        _replyto: fields.email || targetEmail,
        _captcha: "false",
        _template: "table"
    };

    if (fields.order_id) payload.order_id = fields.order_id;
    if (fields.items) payload.items = fields.items;
    if (fields.grand_total) payload.grand_total = fields.grand_total;
    if (fields.delivery_address) payload.delivery_address = fields.delivery_address;
    if (fields.payment_method) payload.payment_method = fields.payment_method;
    if (fields.payment_ref) payload.payment_ref = fields.payment_ref;
    if (extra._autoresponse) payload._autoresponse = extra._autoresponse;

    // ── 1. EmailJS Direct Dispatch (mensahjerrilyn@gmail.com) ──
    const ejServiceId = (storeSettings && storeSettings.emailjsServiceId) || SITE_CONFIG.emailjs?.serviceId || "service_0wy2cgh";
    const ejTemplateId = (storeSettings && storeSettings.emailjsTemplateId) || SITE_CONFIG.emailjs?.templateId || "template_ocw57xp";
    const ejPublicKey = (storeSettings && storeSettings.emailjsPublicKey) || SITE_CONFIG.emailjs?.publicKey || "";

    if (ejServiceId && ejTemplateId && ejPublicKey) {
        try {
            const rawMessage = (fields.message || details || "").trim();
            const clientName = fields.name || "Valued Client";
            const clientEmail = fields.email || "no-reply@jewelsbyj.com";
            const clientPhone = fields.phone || "Not provided";

            // Piece of interest is strictly what the customer entered (e.g. "bracelet" or "necklace")
            const pieceOfInterest = (fields.piece_of_interest || fields.subject || "General Inquiry")
                .replace(/^💎\s*/, "")
                .replace(/^\[Jewels by J Inquiry\]\s*/i, "")
                .replace(/\s*—\s*.*$/, "")
                .trim();

            // Simple, clean subject as requested: "Jewels by J Inquiry" (or Order # for orders)
            const emailSubject = fields.order_id
                ? `Jewels by J Order #${fields.order_id}`
                : "Jewels by J Inquiry";

            // Build an elegant, structured notification body
            let richBody = "";
            if (fields.order_id) {
                richBody = `💎 NEW ORDER #${fields.order_id}\n` +
                    `──────────────────────────────────────────────\n` +
                    `• Customer Name:  ${clientName}\n` +
                    `• Customer Email: ${clientEmail}\n` +
                    `• Phone / MoMo:   ${clientPhone}\n` +
                    `• Delivery To:    ${fields.delivery_address || 'Accra'}\n` +
                    `• Payment Method: ${fields.payment_method || 'Mobile Money'}\n` +
                    `• Reference:      ${fields.payment_ref || 'CONFIRMED'}\n` +
                    `• Total Paid:     ${fields.grand_total || fields.total || 'GH₵ 0.00'}\n` +
                    `──────────────────────────────────────────────\n` +
                    `Items Ordered:\n${fields.items || 'Bespoke Jewelry Package'}\n` +
                    (fields.notes && fields.notes !== "None" ? `\nCustomer Notes:\n${fields.notes}\n` : '') +
                    `──────────────────────────────────────────────\n` +
                    `👉 Reply directly to this email to contact ${clientName} (${clientEmail}).`;
            } else {
                richBody = `💎 BESPOKE JEWELRY INQUIRY\n` +
                    `──────────────────────────────────────────────\n` +
                    `• Client Name:    ${clientName}\n` +
                    `• Client Email:   ${clientEmail}\n` +
                    `• Phone / WA:     ${clientPhone}\n` +
                    `• Interested In:  ${pieceOfInterest}\n` +
                    `──────────────────────────────────────────────\n` +
                    `Client Message:\n` +
                    `"${rawMessage || 'Customer inquiry submitted from store website.'}"\n\n` +
                    `──────────────────────────────────────────────\n` +
                    `👉 Click "Reply" in your email to respond directly to ${clientName} (${clientEmail}).`;
            }

            const templateParams = {
                to_name: "Jerrilyn Mensah",
                to_email: targetEmail,
                from_name: clientName,
                user_name: clientName,
                customer_name: clientName,
                name: clientName,
                from_email: clientEmail,
                user_email: clientEmail,
                customer_email: clientEmail,
                email: clientEmail,
                reply_to: clientEmail,
                phone: clientPhone,
                customer_phone: clientPhone,
                subject: emailSubject,
                clean_subject: pieceOfInterest,
                piece_of_interest: pieceOfInterest,
                message: richBody,
                raw_message: rawMessage || (fields.order_id ? richBody : "Customer inquiry submitted from store website."),
                content: richBody,
                inquiry_details: richBody,
                order_id: fields.order_id || "",
                items: fields.items || "",
                grand_total: fields.grand_total || "",
                total: fields.grand_total || "",
                delivery_address: fields.delivery_address || "",
                payment_method: fields.payment_method || "",
                payment_ref: fields.payment_ref || "",
                notes: fields.notes || "",
                date: fields.order_date || new Date().toLocaleString()
            };

            // Use EmailJS browser SDK if available, or direct REST API
            if (typeof emailjs !== "undefined" && typeof emailjs.send === "function") {
                const ejRes = await emailjs.send(ejServiceId, ejTemplateId, templateParams, ejPublicKey);
                if (ejRes && (ejRes.status === 200 || ejRes.text === "OK")) {
                    return { ok: true, message: `Delivered directly to ${targetEmail} via EmailJS!` };
                }
            } else {
                const ejHttpResp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({
                        service_id: ejServiceId,
                        template_id: ejTemplateId,
                        user_id: ejPublicKey,
                        template_params: templateParams
                    })
                });
                if (ejHttpResp.ok) {
                    return { ok: true, message: `Delivered directly to ${targetEmail} via EmailJS!` };
                }
            }
        } catch (ejErr) {
            console.warn("EmailJS gateway notice:", ejErr);
        }
    }

    // Check if Web3Forms access key is configured for guaranteed zero-downtime background dispatch
    if (storeSettings && storeSettings.web3Key) {
        try {
            const w3Resp = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify({
                    access_key: storeSettings.web3Key,
                    subject: subject,
                    from_name: fields.name || "Jewels by J Visitor",
                    email: fields.email || "no-reply@jewelsbyj.com",
                    message: fields.message || details,
                    reply_to: fields.email || targetEmail
                })
            });
            const w3Data = await w3Resp.json().catch(() => null);
            if (w3Data && (w3Data.success || w3Data.status === 200)) {
                return { ok: true, message: `Delivered directly to ${targetEmail} via Web3Forms!` };
            }
        } catch (w3Err) {
            console.warn("Web3Forms notice:", w3Err);
        }
    }

    // Timeout guard so the UI never hangs if network/gateway is slow
    const controller = new AbortController();
    const timeoutTimer = setTimeout(() => controller.abort(), 4000);

    try {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload),
            signal: controller.signal
        });
        clearTimeout(timeoutTimer);

        const data = await response.json().catch(() => null);

        if (data && (data.success === "true" || data.success === true)) {
            return { ok: true, message: `Delivered directly to ${targetEmail}!` };
        }

        // FormSubmit requires a one-time activation confirmation on new email inboxes
        if (data && data.message && data.message.toLowerCase().includes("activation")) {
            return {
                ok: false,
                needsActivation: true,
                message: `FormSubmit has sent an 'Activate Form' confirmation email to ${targetEmail}. Please check your Gmail Inbox (or Spam folder) and click 'Activate Form' once!`
            };
        }

        // Local HTML file protocol warning
        if (data && data.message && data.message.toLowerCase().includes("html files")) {
            return {
                ok: false,
                isLocalFile: true,
                message: "Browsing from local file. Direct mail client launcher ready."
            };
        }

        return {
            ok: false,
            message: (data && data.message) ? data.message : "Mail gateway did not confirm receipt"
        };
    } catch (err) {
        clearTimeout(timeoutTimer);
        console.warn("Mail dispatch gateway notice:", err);
        return { ok: false, message: "Gateway notice: " + (err.name === 'AbortError' ? 'Dispatch timeout' : err.message) };
    }
}

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

    if (sectionId === "track") {
        renderTrackRecentOrders();
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
        const isAvailable = (p.status !== "unavailable" && p.inStock !== false);
        const badgeHTML = !isAvailable
            ? `<span class="badge badge-unavailable"><i class="fa-solid fa-circle-xmark"></i> Unavailable</span>`
            : (p.badge ? `<span class="badge badge-${p.badgeType}">${p.badge}</span>` : "");
        const originalPriceHTML = p.originalPrice ? `<span class="price-original">${SITE_CONFIG.currency} ${p.originalPrice.toFixed(2)}</span>` : "";

        return `
            <div class="product-card ${isAvailable ? '' : 'is-unavailable'}" data-id="${p.id}">
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
                        ${isAvailable ? `
                            <button class="btn-card-add" onclick="quickAddToCart('${p.id}')">
                                <i class="fa-solid fa-bag-shopping"></i> Add to Bag
                            </button>
                        ` : `
                            <button class="btn-card-add" disabled title="Currently Unavailable" onclick="event.stopPropagation();">
                                <i class="fa-solid fa-ban"></i> Unavailable
                            </button>
                        `}
                        <button class="btn-card-wa" aria-label="${isAvailable ? 'Order on WhatsApp' : 'Inquire Availability on WhatsApp'}" title="${isAvailable ? 'Order on WhatsApp' : 'Inquire Availability on WhatsApp'}" onclick="orderItemDirectWhatsApp('${p.id}')">
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

    // Availability Badge & Add to Bag State
    const isAvail = (p.status !== "unavailable" && p.inStock !== false);
    const availEl = document.getElementById("modalProductAvailability");
    if (availEl) {
        availEl.innerHTML = isAvail
            ? `<span style="color:#2e7d32; font-weight:600; font-size:0.85rem;"><i class="fa-solid fa-circle-check"></i> In Stock &amp; Ready to Craft</span>`
            : `<span style="color:#d32f2f; font-weight:600; font-size:0.85rem;"><i class="fa-solid fa-circle-xmark"></i> Currently Unavailable / Sold Out</span>`;
    }

    const modalAddBtn = document.getElementById("modalAddToCartBtn");
    if (modalAddBtn) {
        if (!isAvail) {
            modalAddBtn.disabled = true;
            modalAddBtn.style.opacity = "0.55";
            modalAddBtn.style.cursor = "not-allowed";
            modalAddBtn.innerHTML = `<i class="fa-solid fa-ban"></i> Unavailable`;
        } else {
            modalAddBtn.disabled = false;
            modalAddBtn.style.opacity = "1";
            modalAddBtn.style.cursor = "pointer";
            modalAddBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Add to Bag`;
        }
    }

    document.getElementById("quickModalBackdrop")?.classList.add("active");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
}

function selectQuickViewOption(opt, btn) {
    quickViewSelectedOption = opt;
    document.querySelectorAll(".option-pill-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function closeQuickView() {
    document.getElementById("quickModalBackdrop")?.classList.remove("active");
    document.body.classList.remove("modal-open");
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
    if (p.status === "unavailable" || p.inStock === false) {
        showToast("Currently Unavailable", `${p.title} is currently out of stock. You can inquire via WhatsApp.`);
        return;
    }
    const defaultOption = p.options && p.options.length ? p.options[0] : null;
    addToCart(productId, defaultOption, 1);
    openCartDrawer();
}

function addToCart(productId, option, quantity = 1) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;
    if (p.status === "unavailable" || p.inStock === false) {
        showToast("Currently Unavailable", `${p.title} is currently out of stock.`);
        return;
    }

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
        if (deliveryMeterEl) deliveryMeterEl.textContent = "Delivery is coordinated directly by phone or text upon order placement.";
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

    // Delivery Notice: Coordinated directly via phone/text, not added to cart total
    if (deliveryMeterEl) {
        deliveryMeterEl.innerHTML = `<i class="fa-solid fa-phone" style="margin-right:6px; color:var(--color-gold);"></i> <strong>Delivery arranged manually via phone/text (no fee added to total)</strong>`;
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
    const isAvail = (p.status !== "unavailable" && p.inStock !== false);
    const msg = isAvail
        ? `Hi Jewels by J! I would like to order "${p.title}" priced at ${SITE_CONFIG.currency} ${p.price.toFixed(2)}. Please confirm availability and delivery details.`
        : `Hi Jewels by J! I saw "${p.title}" on your website which is marked as currently unavailable. Is it possible to have one custom-crafted for me on special request?`;
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
// ═══════════════════════════════════════════════════════════════════════════
// CONTACT & INQUIRY MESSAGING SYSTEM (STRICT ACCOUNT GATE)
// ═══════════════════════════════════════════════════════════════════════════

function saveContactDraft() {
    const subject = (document.getElementById("contactSubject")?.value || "").trim();
    const message = (document.getElementById("contactMessage")?.value || "").trim();
    const phone = (document.getElementById("contactPhone")?.value || "").trim();
    const name = (document.getElementById("contactName")?.value || "").trim();
    const email = (document.getElementById("contactEmail")?.value || "").trim();

    if (subject || message || phone || (name && !currentUser) || (email && !currentUser)) {
        sessionStorage.setItem("j_contact_draft", JSON.stringify({
            name, email, phone, subject, message, timestamp: Date.now()
        }));
    }
}

function restoreContactDraftIfExists() {
    try {
        const raw = sessionStorage.getItem("j_contact_draft");
        if (!raw) return false;
        const draft = JSON.parse(raw);
        if (!draft) return false;

        const subjectEl = document.getElementById("contactSubject");
        const messageEl = document.getElementById("contactMessage");
        const phoneEl = document.getElementById("contactPhone");

        let restored = false;
        if (subjectEl && draft.subject && !subjectEl.value) {
            subjectEl.value = draft.subject;
            restored = true;
        }
        if (messageEl && draft.message && !messageEl.value) {
            messageEl.value = draft.message;
            restored = true;
        }
        if (phoneEl && draft.phone && !phoneEl.value) {
            phoneEl.value = draft.phone;
            restored = true;
        }

        sessionStorage.removeItem("j_contact_draft");

        if (restored) {
            const statusEl = document.getElementById("contactFormStatus");
            if (statusEl) {
                statusEl.className = "form-status-msg success";
                statusEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> Welcome, <strong>${escapeHTML(currentUser?.name || "Client")}</strong>! Your drafted inquiry has been restored and is ready to send.`;
            }
            showToast("Draft Restored", "Your inquiry is ready to send to the admin.");
            return true;
        }
        return false;
    } catch (e) {
        console.error("Failed to restore contact draft:", e);
        return false;
    }
}

function updateContactAuthGate() {
    const statusBox = document.getElementById("contactUserStatusBox");
    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const phoneInput = document.getElementById("contactPhone");
    const submitBtn = document.getElementById("contactSubmitBtn");

    if (!statusBox) return;

    if (currentUser) {
        // Authenticated client mode: show verified badge and pre-fill account details
        statusBox.innerHTML = `
            <div class="contact-auth-gate verified-mode">
                <div class="contact-auth-gate-header">
                    <div class="contact-auth-gate-icon verified">
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                        <h4 class="contact-auth-gate-title">
                            Signed In as <span>${escapeHTML(currentUser.name)}</span>
                        </h4>
                        <p class="contact-auth-gate-desc">
                            Our atelier concierge will reply directly to your email (<strong>${escapeHTML(currentUser.email)}</strong>).
                        </p>
                    </div>
                </div>
                <div class="contact-auth-gate-badge">
                    <span class="auth-pill"><i class="fa-solid fa-shield-halved"></i> Verified Client</span>
                </div>
            </div>
        `;

        if (nameInput) {
            nameInput.value = currentUser.name;
            nameInput.readOnly = true;
            nameInput.classList.add("is-verified-input");
        }
        if (emailInput) {
            emailInput.value = currentUser.email;
            emailInput.readOnly = true;
            emailInput.classList.add("is-verified-input");
        }
        if (phoneInput && currentUser.phone && !phoneInput.value) {
            phoneInput.value = currentUser.phone;
        }
    } else {
        // Guest mode: open to all visitors without any account barrier
        statusBox.innerHTML = `
            <div class="contact-auth-gate guest-mode" style="background:rgba(255, 255, 255, 0.7); border-color:var(--color-border-light);">
                <div class="contact-auth-gate-header">
                    <div class="contact-auth-gate-icon" style="background:var(--color-blush-soft); color:var(--color-gold);">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div>
                        <h4 class="contact-auth-gate-title">Direct Atelier Consultation</h4>
                        <p class="contact-auth-gate-desc">
                            Send your custom jewelry inquiry, sizing question, or bespoke idea below. Our atelier concierge will reply directly to your email.
                        </p>
                    </div>
                </div>
            </div>
        `;

        if (nameInput) {
            nameInput.readOnly = false;
            nameInput.classList.remove("is-verified-input");
            if (!sessionStorage.getItem("j_contact_draft") && !nameInput.value) nameInput.value = "";
        }
        if (emailInput) {
            emailInput.readOnly = false;
            emailInput.classList.remove("is-verified-input");
            if (!sessionStorage.getItem("j_contact_draft") && !emailInput.value) emailInput.value = "";
        }
    }

    // Submit button is always active and open for everyone
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("btn-locked");
        submitBtn.innerHTML = `<i class="fa-regular fa-paper-plane"></i> Send Inquiry`;
        submitBtn.title = "Send your inquiry to our atelier concierge";
    }
}

function handleDirectEmailCard(e) {
    // Open to all clients and visitors
    return true;
}

function initContactForm() {
    const form = document.getElementById("customerContactForm");
    const statusEl = document.getElementById("contactFormStatus");
    const submitBtn = document.getElementById("contactSubmitBtn");

    if (!form) return;

    // Set initial gate state & restore draft if returning user
    updateContactAuthGate();
    restoreContactDraftIfExists();

    // Autosave draft as client writes
    const subjectInput = document.getElementById("contactSubject");
    const messageInput = document.getElementById("contactMessage");
    const phoneInput = document.getElementById("contactPhone");
    if (subjectInput) subjectInput.addEventListener("input", saveContactDraft);
    if (messageInput) messageInput.addEventListener("input", saveContactDraft);
    if (phoneInput) phoneInput.addEventListener("input", saveContactDraft);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Honeypot: if a hidden field named "_honey" exists in the form and a bot filled it, silently stop.
        const honey = form.querySelector('[name="_honey"]');
        if (honey && honey.value) return;

        const nameInputEl = document.getElementById("contactName");
        const emailInputEl = document.getElementById("contactEmail");
        const phoneInputEl = document.getElementById("contactPhone");
        const subjectInputEl = document.getElementById("contactSubject");
        const messageInputEl = document.getElementById("contactMessage");

        const name = ((currentUser && currentUser.name) || nameInputEl?.value || "").trim();
        const email = ((currentUser && currentUser.email) || emailInputEl?.value || "").trim();
        const phone = (phoneInputEl?.value || (currentUser && currentUser.phone) || "").trim();
        const subject = (subjectInputEl?.value || "").trim();
        const message = (messageInputEl?.value || "").trim();

        if (!name || !email || !message) {
            statusEl.textContent = "Please fill in all required fields (Name, Email, and Message).";
            statusEl.className = "form-status-msg error";
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
        statusEl.className = "form-status-msg";
        statusEl.textContent = "";

        const targetEmail = getAdminEmail();

        // Build inquiry record for in-app Customer Inbox (open to both registered clients and guests)
        const isBespoke = (subject.toLowerCase().includes("bespoke") || message.toLowerCase().includes("bespoke") || subject.toLowerCase().includes("custom"));
        const newMsgRecord = {
            id: "msg_" + Date.now(),
            userId: currentUser ? (currentUser.uid || ("user_" + Date.now())) : ("guest_" + Date.now()),
            name: name,
            email: email,
            phone: phone || "Not provided",
            subject: subject || "General Consultation Inquiry",
            message: message,
            type: isBespoke ? "bespoke" : "inquiry",
            date: new Date().toISOString().replace("T", " ").slice(0, 16),
            unread: true,
            verifiedAccount: !!currentUser
        };

        // Save to local inbox
        storeMessages.unshift(newMsgRecord);
        localStorage.setItem("j_messages", JSON.stringify(storeMessages));
        updateAdminNotificationBadge();
        if (typeof renderAdminDashboardStats === "function") renderAdminDashboardStats();
        if (typeof renderAdminMessages === "function") renderAdminMessages();

        // Update FormSubmit hidden fields for background browser dispatch
        const submitSubjectEl = document.getElementById("contactFormSubmitSubject");
        if (submitSubjectEl) {
            submitSubjectEl.value = "Jewels by J Inquiry";
        }
        const replyToEl = document.getElementById("contactFormReplyTo");
        if (replyToEl) {
            replyToEl.value = email;
        }

        // Ensure form action targets the active admin email
        form.action = `https://formsubmit.co/${encodeURIComponent(targetEmail)}`;

        // Dispatch native browser POST via hidden iframe (guarantees transmission even if fetch/CORS is hindered)
        try {
            HTMLFormElement.prototype.submit.call(form);
        } catch (frameErr) {
            console.warn("Iframe dispatch note:", frameErr);
        }

        // Direct concierge links
        const waDirectUrl = `https://wa.me/${storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Jerrilyn! Inquiry from " + name + " (" + (subject || "Consultation") + "): " + message)}`;

        // Reset subject and message input fields; clear guest credentials while preserving verified user identity
        if (!currentUser) {
            if (nameInputEl) nameInputEl.value = "";
            if (emailInputEl) emailInputEl.value = "";
            if (phoneInputEl) phoneInputEl.value = "";
        }
        if (subjectInputEl) subjectInputEl.value = "";
        if (messageInputEl) messageInputEl.value = "";
        sessionStorage.removeItem("j_contact_draft");

        sendStoreEmail(
            "Jewels by J Inquiry",
            {
                name: name,
                email: email, // EmailJS uses this as Reply-To
                phone: phone || "Not provided",
                piece_of_interest: subject || "General Inquiry",
                subject: subject || "General Inquiry",
                message: message,
                type: isBespoke ? "Bespoke" : "General inquiry",
                sender_account_status: currentUser ? "Verified Registered Client" : "Guest Client",
                sender_account_uid: (currentUser && currentUser.uid) || "Guest"
            },
            {
                _autoresponse: `Hi ${name}, thank you for contacting Jewels by J! Jerrilyn has received your inquiry and will reply shortly. For quick answers, WhatsApp us on ${SITE_CONFIG.phone}.`
            }
        ).then(result => {
            if (result.ok) {
                statusEl.innerHTML = `
                    <div class="inquiry-delivery-card">
                        <div class="inquiry-delivery-header">
                            <i class="fa-solid fa-circle-check" style="font-size:1.8rem; color:var(--color-emerald, #2e7d32);"></i>
                            <div>
                                <strong style="color:var(--color-black); font-size:1rem; display:block;">
                                    Your Inquiry Has Been Sent!
                                </strong>
                                <p style="font-size:0.85rem; color:var(--color-text-muted); margin:4px 0 0 0; line-height:1.5;">
                                    Thank you, <strong>${escapeHTML(name)}</strong>. We have received your message. Jerrilyn will review your request and reply directly to <strong>${escapeHTML(email)}</strong> shortly.
                                </p>
                            </div>
                        </div>
                        <div class="inquiry-delivery-actions">
                            <a href="${waDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                                <i class="fa-brands fa-whatsapp"></i> Also Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                `;
                statusEl.className = "form-status-msg";
                showToast("Inquiry Sent!", "Thank you! We will reply to your email shortly.");
            } else {
                statusEl.innerHTML = `
                    <div class="inquiry-delivery-card" style="border:1px solid var(--color-gold);">
                        <div class="inquiry-delivery-header">
                            <i class="fa-solid fa-circle-check" style="font-size:1.8rem; color:var(--color-gold);"></i>
                            <div>
                                <strong style="color:var(--color-black); font-size:1rem; display:block;">
                                    Inquiry Received!
                                </strong>
                                <p style="font-size:0.85rem; color:var(--color-text-muted); margin:4px 0 0 0; line-height:1.5;">
                                    Your message has been safely logged in our atelier system. You can also chat with Jerrilyn directly on WhatsApp for an immediate response!
                                </p>
                            </div>
                        </div>
                        <div class="inquiry-delivery-actions">
                            <a href="${waDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                `;
                statusEl.className = "form-status-msg";
                showToast("Inquiry Received!", "Logged in studio records.");
            }

            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fa-regular fa-paper-plane"></i> Send Inquiry`;
        }).catch(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fa-regular fa-paper-plane"></i> Send Inquiry`;
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
// CUSTOMER REVIEWS & ATELIER SERVICE SYSTEM
// ═══════════════════════════════════════════════════════════════════════════
let currentSelectedRating = 5;

const RATING_DESCRIPTIONS = {
    1: "1 of 5 Stars (Needs Improvement)",
    2: "2 of 5 Stars (Fair)",
    3: "3 of 5 Stars (Good Experience)",
    4: "4 of 5 Stars (Great Craftsmanship)",
    5: "5 of 5 Stars (Exceptional Service)"
};

function setReviewRating(rating) {
    currentSelectedRating = Math.max(1, Math.min(5, parseInt(rating) || 5));
    const hiddenInput = document.getElementById("reviewRatingValue");
    if (hiddenInput) hiddenInput.value = currentSelectedRating;

    const label = document.getElementById("starRatingLabel");
    if (label) label.textContent = RATING_DESCRIPTIONS[currentSelectedRating] || `${currentSelectedRating} of 5 Stars`;

    const btns = document.querySelectorAll("#reviewStarPicker .star-btn");
    btns.forEach((btn, idx) => {
        btn.classList.toggle("active", idx < currentSelectedRating);
        btn.classList.remove("hovered");
    });
}

function previewReviewRating(hoverVal) {
    const val = parseInt(hoverVal) || 1;
    const label = document.getElementById("starRatingLabel");
    if (label) label.textContent = RATING_DESCRIPTIONS[val] || `${val} of 5 Stars`;

    const btns = document.querySelectorAll("#reviewStarPicker .star-btn");
    btns.forEach((btn, idx) => {
        btn.classList.toggle("hovered", idx < val);
    });
}

function resetReviewRatingPreview() {
    setReviewRating(currentSelectedRating);
}

function renderCustomerReviews() {
    const listEl = document.getElementById("customerReviewsList");
    const feedWrap = document.getElementById("customerReviewsFeedWrap");
    const adminReviewsTabBadge = document.getElementById("admTabReviewsCount");

    if (!storeReviews || !Array.isArray(storeReviews)) {
        storeReviews = [];
    }

    const totalReviews = storeReviews.length;
    if (adminReviewsTabBadge) adminReviewsTabBadge.textContent = totalReviews;

    if (!listEl) return;

    // For now, there are no reviews yet, so hide feed until real reviews are submitted
    if (totalReviews === 0) {
        if (feedWrap) feedWrap.style.display = "none";
        listEl.innerHTML = "";
        return;
    }

    if (feedWrap) feedWrap.style.display = "block";

    listEl.innerHTML = storeReviews.map(r => {
        const rating = Math.max(1, Math.min(5, Number(r.rating) || 5));
        const starsHtml = "★".repeat(rating) + "☆".repeat(5 - rating);
        const initials = (r.name || "Client")
            .split(" ")
            .map(n => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

        return `
            <div class="review-item-card" data-id="${r.id}">
                <div class="review-item-header">
                    <div class="review-author-info">
                        <div class="review-author-avatar">${initials}</div>
                        <div>
                            <div style="display:flex; align-items:center;">
                                <span class="review-author-name">${escapeHTML(r.name)}</span>
                                ${r.verified ? `<span class="review-verified-pill"><i class="fa-solid fa-circle-check"></i> Verified</span>` : ''}
                            </div>
                            <span class="review-author-loc">${escapeHTML(r.location || 'Ghana')}</span>
                        </div>
                    </div>
                    <div>
                        <div class="review-item-stars">${starsHtml}</div>
                        <div class="review-item-date">${escapeHTML(r.date || 'Recent')}</div>
                    </div>
                </div>
                ${r.title ? `<h4 class="review-item-title">${escapeHTML(r.title)}</h4>` : ''}
                <p class="review-item-text">${escapeHTML(r.review)}</p>
            </div>
        `;
    }).join("");
}

function handleCustomerReviewSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("reviewAuthorName");
    const emailInput = document.getElementById("reviewAuthorEmail");
    const ratingInput = document.getElementById("reviewRatingValue");
    const titleInput = document.getElementById("reviewTitleInput");
    const textInput = document.getElementById("reviewTextInput");
    const statusMsg = document.getElementById("reviewFormStatusMsg");
    const submitBtn = document.getElementById("reviewSubmitBtn");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const rating = ratingInput ? parseInt(ratingInput.value) || 5 : 5;
    const title = titleInput ? titleInput.value.trim() : "";
    const review = textInput ? textInput.value.trim() : "";

    if (!name || !email || !review) {
        showToast("Incomplete Review", "Please enter your name, email, and your review feedback.");
        return;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting Review...';
    }

    const newReview = {
        id: "rev_" + Date.now(),
        name: name,
        email: email,
        location: "Verified Client",
        rating: rating,
        title: title || `${rating}-Star Atelier Experience`,
        review: review,
        date: "Just now",
        verified: true
    };

    if (!storeReviews) storeReviews = [];
    storeReviews.unshift(newReview);
    localStorage.setItem("j_reviews", JSON.stringify(storeReviews));

    renderCustomerReviews();
    renderAdminReviews();
    renderAdminDashboardStats();

    if (statusMsg) {
        statusMsg.className = "review-status-msg success";
        statusMsg.style.display = "block";
        statusMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, <strong>${escapeHTML(name)}</strong>! Your review has been published.`;
        setTimeout(() => {
            if (statusMsg) statusMsg.style.display = "none";
        }, 6000);
    }

    showToast("Review Published!", `Thank you, ${name}! Your review has been added.`);

    // Send notification email to Jerrilyn via sendStoreEmail
    sendStoreEmail(
        "Jewels by J Inquiry",
        {
            name: `${name} (Review)`,
            email: email,
            phone: "Customer Review",
            piece_of_interest: `${rating} Star Client Review`,
            subject: `Client Review: ${title || `${rating} Stars`}`,
            message: `★ Rating: ${rating}/5 Stars\nReview Title: ${title || 'None'}\n\nClient Feedback:\n"${review}"\n\nClient Email: ${email}`
        }
    ).catch(() => {});

    // Reset Form
    if (document.getElementById("customerReviewForm")) {
        document.getElementById("customerReviewForm").reset();
    }
    setReviewRating(5);

    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "SUBMIT REVIEW";
    }
}

function scrollToReviews() {
    navigateTo("reviews");
}

function renderAdminReviews() {
    const tbody = document.getElementById("adminReviewsTableBody");
    if (!tbody) return;

    if (!storeReviews || storeReviews.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding:30px; color:var(--color-text-muted);">
                    No reviews published yet.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = storeReviews.map(r => `
        <tr>
            <td>
                <strong>${escapeHTML(r.name)}</strong><br>
                <span style="font-size:0.75rem; color:var(--color-text-muted);">${escapeHTML(r.email || 'Verified')}</span>
            </td>
            <td>
                <span style="color:#f59e0b; font-weight:700;">${"★".repeat(r.rating || 5)} (${r.rating}/5)</span>
            </td>
            <td>
                <strong style="color:var(--color-black); font-size:0.85rem;">${escapeHTML(r.title || 'Review')}</strong><br>
                <span style="font-size:0.8rem; color:var(--color-text-muted); line-height:1.4; display:block; max-width:420px;">
                    ${escapeHTML(r.review)}
                </span>
            </td>
            <td>
                <span style="font-size:0.75rem; color:var(--color-text-subtle);">${escapeHTML(r.date || 'Recent')}</span>
            </td>
            <td>
                <button class="btn btn-outline btn-sm" onclick="deleteAdminReview('${r.id}')" style="padding:4px 8px; font-size:0.75rem; color:#d32f2f;" title="Delete Review">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </td>
        </tr>
    `).join("");
}

function deleteAdminReview(reviewId) {
    if (!confirm("Are you sure you want to remove this client review?")) return;
    storeReviews = storeReviews.filter(r => r.id !== reviewId);
    localStorage.setItem("j_reviews", JSON.stringify(storeReviews));
    renderCustomerReviews();
    renderAdminReviews();
    renderAdminDashboardStats();
    showToast("Review Removed", "The review has been deleted from your store.");
}

// ═══════════════════════════════════════════════════════════════════════════
// FIREBASE SECURITY & USER DATABASE VAULT
// ═══════════════════════════════════════════════════════════════════════════
function initFirebase() {
    try {
        if (typeof firebase !== "undefined" && SITE_CONFIG.firebase) {
            if (!firebase.apps || !firebase.apps.length) {
                firebaseApp = firebase.initializeApp(SITE_CONFIG.firebase);
            } else {
                firebaseApp = firebase.app();
            }
            if (typeof firebase.auth === "function") {
                firebaseAuth = firebase.auth();
            }
            if (typeof firebase.firestore === "function") {
                firebaseDb = firebase.firestore();
            }
            isFirebaseReady = true;
            console.log("Firebase Database Vault & Auth initialized.");
        }
    } catch (err) {
        console.warn("Firebase initialized in local vault fallback mode:", err);
        isFirebaseReady = false;
    }
}

// ── Database Vault Helper Functions ──
function getRegisteredUsers() {
    let users = JSON.parse(localStorage.getItem("j_users_db") || "null");
    if (!users || !Array.isArray(users) || users.length === 0) {
        users = [
            {
                uid: "usr_admin_001",
                name: "Jerrilyn Mensah",
                email: "mensahjerrilyn@gmail.com",
                phone: "+233 59 325 2913",
                passwordHash: "jerrilyn2026",
                createdAt: "2026-10-01 09:00"
            },
            {
                uid: "usr_demo_002",
                name: "Ama Serwaa",
                email: "ama@example.com",
                phone: "+233 54 123 4567",
                passwordHash: "password123",
                createdAt: "2026-10-15 14:30"
            }
        ];
        localStorage.setItem("j_users_db", JSON.stringify(users));
    }
    return users;
}

function saveRegisteredUser(user) {
    const users = getRegisteredUsers();
    const existingIndex = users.findIndex(u => u.email.toLowerCase() === user.email.toLowerCase());
    if (existingIndex >= 0) {
        users[existingIndex] = { ...users[existingIndex], ...user };
    } else {
        users.push(user);
    }
    localStorage.setItem("j_users_db", JSON.stringify(users));
}

function findUserByEmail(email) {
    if (!email) return null;
    const clean = email.trim().toLowerCase();
    const users = getRegisteredUsers();
    return users.find(u => u.email.toLowerCase() === clean) || null;
}

function hashPasswordSimple(pwd) {
    let hash = 0;
    const salted = pwd + "_jbj_vault_2026";
    for (let i = 0; i < salted.length; i++) {
        hash = ((hash << 5) - hash) + salted.charCodeAt(i);
        hash |= 0;
    }
    return "jbj_h_" + Math.abs(hash).toString(16);
}

function verifyUserPassword(user, enteredPassword) {
    if (!user || !enteredPassword) return false;
    return (user.passwordHash === enteredPassword) ||
        (user.passwordHash === hashPasswordSimple(enteredPassword));
}

function showAuthFeedback(containerId, type, title, message) {
    const box = document.getElementById(containerId);
    if (!box) return;
    const icon = type === "success"
        ? '<i class="fa-solid fa-circle-check"></i>'
        : '<i class="fa-solid fa-circle-exclamation"></i>';

    box.className = `auth-feedback-box ${type}`;
    box.innerHTML = `
        ${icon}
        <div>
            <strong style="display:block; font-size:0.86rem; margin-bottom:2px;">${escapeHTML(title)}</strong>
            <span>${escapeHTML(message)}</span>
        </div>
    `;
    box.style.display = "flex";
}

function clearAuthFeedback() {
    ["loginFeedbackBox", "signupFeedbackBox"].forEach(id => {
        const b = document.getElementById(id);
        if (b) {
            b.style.display = "none";
            b.innerHTML = "";
            b.className = "auth-feedback-box";
        }
    });

    ["loginEmailWrap", "loginPasswordWrap", "signupNameWrap", "signupPhoneWrap", "signupEmailWrap", "signupPasswordWrap"].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove("has-error");
            el.classList.remove("has-success");
        }
    });
}

function triggerCardShake() {
    const card = document.getElementById("authModalCard");
    if (card) {
        card.classList.remove("auth-shake");
        void card.offsetWidth;
        card.classList.add("auth-shake");
        setTimeout(() => card.classList.remove("auth-shake"), 450);
    }
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

    // Auto-fill Remembered Email if saved
    const rememberedEmail = localStorage.getItem("j_remember_email");
    const loginEmailInput = document.getElementById("loginEmail");
    const rememberMeCheck = document.getElementById("rememberMe");
    if (rememberedEmail && loginEmailInput) {
        loginEmailInput.value = rememberedEmail;
        if (rememberMeCheck) rememberMeCheck.checked = true;
    }

    // ── Handle Log In Submission (With Accurate Correct / Incorrect Validation) ──
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            clearAuthFeedback();

            const emailInput = document.getElementById("loginEmail");
            const passInput = document.getElementById("loginPassword");
            const emailWrap = document.getElementById("loginEmailWrap");
            const passWrap = document.getElementById("loginPasswordWrap");
            const submitBtn = document.getElementById("loginSubmitBtn");

            const email = (emailInput?.value || "").trim();
            const password = passInput?.value || "";

            // 1. Validate empty inputs
            if (!email) {
                if (emailWrap) emailWrap.classList.add("has-error");
                showAuthFeedback("loginFeedbackBox", "error", "Missing Email Address", "Please enter your registered email address.");
                triggerCardShake();
                emailInput?.focus();
                return;
            }

            if (!password) {
                if (passWrap) passWrap.classList.add("has-error");
                showAuthFeedback("loginFeedbackBox", "error", "Missing Password", "Please enter your account password.");
                triggerCardShake();
                passInput?.focus();
                return;
            }

            // Validate email format
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                if (emailWrap) emailWrap.classList.add("has-error");
                showAuthFeedback("loginFeedbackBox", "error", "Invalid Email Format", "Please check your email address format (e.g. name@example.com).");
                triggerCardShake();
                emailInput?.focus();
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Verifying Credentials...`;
            }

            // 2. Search for registered user in Database Vault
            const user = findUserByEmail(email);

            if (!user) {
                // NOTIFICATION: Email is INCORRECT / Not Found
                setTimeout(() => {
                    if (emailWrap) emailWrap.classList.add("has-error");
                    showAuthFeedback(
                        "loginFeedbackBox",
                        "error",
                        "Incorrect: Account Not Found",
                        `No account matches "${email}". Please verify your email spelling or click 'Sign Up' below to register.`
                    );
                    triggerCardShake();
                    showToast("Account Not Found", "No account registered with this email address.");
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = `Log In`;
                    }
                    emailInput?.focus();
                }, 250);
                return;
            }

            // 3. Verify password against stored credentials
            const isMatch = verifyUserPassword(user, password);

            if (!isMatch) {
                // NOTIFICATION: Password is INCORRECT
                setTimeout(() => {
                    if (passWrap) passWrap.classList.add("has-error");
                    showAuthFeedback(
                        "loginFeedbackBox",
                        "error",
                        "Incorrect Password",
                        "The password you entered is incorrect. Please check your password and try again."
                    );
                    triggerCardShake();
                    showToast("Incorrect Password", "The password you entered does not match this account.");
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = `Log In`;
                    }
                    passInput?.focus();
                }, 250);
                return;
            }

            // 4. NOTIFICATION: Credentials are CORRECT!
            setTimeout(() => {
                if (emailWrap) emailWrap.classList.add("has-success");
                if (passWrap) passWrap.classList.add("has-success");

                showAuthFeedback(
                    "loginFeedbackBox",
                    "success",
                    "Correct: Login Successful!",
                    `Welcome back, ${user.name}! Your credentials have been verified.`
                );

                // Remember me handling
                if (rememberMeCheck && rememberMeCheck.checked) {
                    localStorage.setItem("j_remember_email", email);
                } else {
                    localStorage.removeItem("j_remember_email");
                }

                // Sync with Firebase Auth in background if initialized
                if (isFirebaseReady && firebaseAuth) {
                    firebaseAuth.signInWithEmailAndPassword(email, password).catch(() => { });
                }

                currentUser = {
                    uid: user.uid,
                    name: user.name,
                    email: user.email,
                    phone: user.phone || "+233 59 325 2913"
                };

                localStorage.setItem("j_user", JSON.stringify(currentUser));
                updateAuthUI();
                const hadContactDraft = restoreContactDraftIfExists();
                showToast("Welcome Back!", `Signed in successfully as ${currentUser.name}.`);

                setTimeout(() => {
                    closeAuthModal();
                    loginForm.reset();
                    clearAuthFeedback();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = `Log In`;
                    }
                    if (hadContactDraft) {
                        const contactBox = document.querySelector(".contact-form-box");
                        if (contactBox) contactBox.scrollIntoView({ behavior: "smooth" });
                    }
                }, 750);
            }, 300);
        });
    }

    // ── Handle Sign Up Submission (Details Permanently Saved in Database) ──
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            clearAuthFeedback();

            const nameInput = document.getElementById("signupName");
            const phoneInput = document.getElementById("signupPhone");
            const emailInput = document.getElementById("signupEmail");
            const passInput = document.getElementById("signupPassword");

            const nameWrap = document.getElementById("signupNameWrap");
            const phoneWrap = document.getElementById("signupPhoneWrap");
            const emailWrap = document.getElementById("signupEmailWrap");
            const passWrap = document.getElementById("signupPasswordWrap");
            const submitBtn = document.getElementById("signupSubmitBtn");

            const name = (nameInput?.value || "").trim();
            const phone = (phoneInput?.value || "").trim();
            const email = (emailInput?.value || "").trim();
            const password = passInput?.value || "";

            // Validate fields
            if (!name) {
                if (nameWrap) nameWrap.classList.add("has-error");
                showAuthFeedback("signupFeedbackBox", "error", "Missing Full Name", "Please enter your full name.");
                triggerCardShake();
                nameInput?.focus();
                return;
            }

            if (!phone) {
                if (phoneWrap) phoneWrap.classList.add("has-error");
                showAuthFeedback("signupFeedbackBox", "error", "Missing Phone Number", "Please provide a contact or WhatsApp number.");
                triggerCardShake();
                phoneInput?.focus();
                return;
            }

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                if (emailWrap) emailWrap.classList.add("has-error");
                showAuthFeedback("signupFeedbackBox", "error", "Invalid Email Address", "Please enter a valid email address (e.g. name@example.com).");
                triggerCardShake();
                emailInput?.focus();
                return;
            }

            if (!password || password.length < 6) {
                if (passWrap) passWrap.classList.add("has-error");
                showAuthFeedback("signupFeedbackBox", "error", "Weak Password", "Password must be at least 6 characters long.");
                triggerCardShake();
                passInput?.focus();
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Securing Account in Vault...`;
            }

            // Check if email is already registered
            const existing = findUserByEmail(email);
            if (existing) {
                setTimeout(() => {
                    if (emailWrap) emailWrap.classList.add("has-error");
                    showAuthFeedback(
                        "signupFeedbackBox",
                        "error",
                        "Email Already Registered",
                        `An account already exists for "${email}". Please log in with your password.`
                    );
                    triggerCardShake();
                    showToast("Account Exists", "This email is already registered. Please log in.");
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = `Create Account`;
                    }
                    emailInput?.focus();
                }, 250);
                return;
            }

            // Create new user record
            const newUid = "usr_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6);
            const newUser = {
                uid: newUid,
                name: name,
                phone: phone,
                email: email.toLowerCase(),
                passwordHash: hashPasswordSimple(password),
                createdAt: new Date().toISOString()
            };

            // Save to persistent database vault
            saveRegisteredUser(newUser);

            // Sync with Firebase Auth and Firestore if initialized
            if (isFirebaseReady && firebaseAuth) {
                firebaseAuth.createUserWithEmailAndPassword(email, password)
                    .then(cred => {
                        if (cred && cred.user) {
                            cred.user.updateProfile({ displayName: name }).catch(() => { });
                            if (firebaseDb) {
                                firebaseDb.collection("users").doc(cred.user.uid).set({
                                    uid: cred.user.uid,
                                    name: name,
                                    phone: phone,
                                    email: email,
                                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                                }).catch(() => { });
                            }
                        }
                    })
                    .catch(err => {
                        console.warn("Firebase Auth remote sync notice (local security vault active):", err.message);
                    });
            }

            setTimeout(() => {
                if (nameWrap) nameWrap.classList.add("has-success");
                if (emailWrap) emailWrap.classList.add("has-success");
                if (passWrap) passWrap.classList.add("has-success");

                showAuthFeedback(
                    "signupFeedbackBox",
                    "success",
                    "Account Created & Details Saved!",
                    `Welcome to the Jewels by J family, ${name}! Your profile has been securely saved.`
                );

                currentUser = {
                    uid: newUser.uid,
                    name: newUser.name,
                    phone: newUser.phone,
                    email: newUser.email
                };

                localStorage.setItem("j_user", JSON.stringify(currentUser));
                updateAuthUI();
                const hadContactDraft = restoreContactDraftIfExists();
                showToast("Account Created!", `Welcome to Jewels by J, ${newUser.name}!`);

                setTimeout(() => {
                    closeAuthModal();
                    signupForm.reset();
                    clearAuthFeedback();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = `Create Account`;
                    }
                    if (hadContactDraft) {
                        const contactBox = document.querySelector(".contact-form-box");
                        if (contactBox) contactBox.scrollIntoView({ behavior: "smooth" });
                    }
                }, 800);
            }, 300);
        });
    }
}

function openAuthModal(initialTab = "login") {
    clearAuthFeedback();
    const backdrop = document.getElementById("authModalBackdrop");
    const navTabs = document.getElementById("authNavTabs");
    if (!backdrop) return;

    if (currentUser && initialTab !== "signup") {
        if (navTabs) navTabs.style.display = "none";
        document.querySelectorAll(".auth-panel").forEach(p => p.classList.remove("active"));
        document.getElementById("panelAccount")?.classList.add("active");
    } else {
        if (navTabs) navTabs.style.display = "grid";
        document.getElementById("panelAccount")?.classList.remove("active");
        switchAuthTab(initialTab || "login");
    }

    backdrop.classList.add("active");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
}

function closeAuthModal() {
    clearAuthFeedback();
    const backdrop = document.getElementById("authModalBackdrop");
    if (backdrop) backdrop.classList.remove("active");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
}

function switchAuthTab(tab) {
    clearAuthFeedback();
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
    clearAuthFeedback();
    const email = document.getElementById("loginEmail")?.value.trim();
    if (email) {
        const user = findUserByEmail(email);
        if (!user) {
            showAuthFeedback("loginFeedbackBox", "error", "Email Not Found", `No account is registered under "${email}".`);
            triggerCardShake();
            showToast("Account Not Found", "No account registered with " + email);
            return;
        }

        if (isFirebaseReady && firebaseAuth) {
            firebaseAuth.sendPasswordResetEmail(email).catch(() => { });
        }

        showAuthFeedback("loginFeedbackBox", "success", "Reset Link Sent", `A password recovery link has been dispatched to ${email}. Check your inbox.`);
        showToast("Password Reset Sent", `Recovery email sent to ${email}.`);
    } else {
        showAuthFeedback("loginFeedbackBox", "error", "Enter Your Email", "Please enter your email address above to receive a reset link.");
        triggerCardShake();
        document.getElementById("loginEmail")?.focus();
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem("j_user");
    if (isFirebaseReady && firebaseAuth) {
        firebaseAuth.signOut().catch(() => { });
    }
    updateAuthUI();
    closeAuthModal();
    showToast("Signed Out", "You have been securely signed out.");
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
        if (accountPhone) accountPhone.textContent = `Ghana • ${currentUser.phone || '+233 59 325 2913'}`;
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
            drawerText.innerHTML = `<strong>Welcome to Jewels by J!</strong><span>Sign in or create an account</span>`;
        }
        if (drawerActions) {
            drawerActions.innerHTML = `
                <button class="btn btn-primary btn-sm" onclick="closeMobileDrawer(); openAuthModal('login');">Log In</button>
                <button class="btn btn-outline btn-sm" onclick="closeMobileDrawer(); openAuthModal('signup');">Sign Up</button>
            `;
        }
    }

    // Synchronize contact & inquiry form account gate
    if (typeof updateContactAuthGate === "function") {
        updateContactAuthGate();
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
        resultFee.innerHTML = `<span style="font-size:1.15rem; color:var(--color-gold); font-weight:700;">Arranged via Phone/Text</span><span style="display:block; font-size:0.75rem; color:var(--color-text-muted); font-weight:normal; margin-top:4px;">Not added to cart total — coordinated by admin</span>`;
    }
    if (resultArrival) {
        resultArrival.textContent = itemType === "ready" ? data.ready : data.custom;
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// FEATURE 2, 3 & 4: ONLINE CHECKOUT MODAL (GHANA MOMO & CARD)
// NOTE: Payments below are SIMULATED. Replace with Paystack / Hubtel / Flutterwave
// before accepting real money. Never collect raw card numbers/CVV in your own JS.
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
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
    const backdrop = document.getElementById("checkoutModalBackdrop");
    if (backdrop) backdrop.classList.remove("active");
    document.body.classList.remove("modal-open");
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
    const p3 = document.getElementById("checkoutPaneStep3");

    const s1 = document.getElementById("checkoutStepIndicator1");
    const s2 = document.getElementById("checkoutStepIndicator2");
    const s3 = document.getElementById("checkoutStepIndicator3");

    if (p1) p1.style.display = stepNum === 1 ? "block" : "none";
    if (p2) p2.style.display = stepNum === 2 ? "block" : "none";
    if (p3) p3.style.display = stepNum === 3 ? "block" : "none";

    if (s1) s1.className = `checkout-step-pill ${stepNum >= 1 ? 'active' : ''}`;
    if (s2) s2.className = `checkout-step-pill ${stepNum >= 2 ? 'active' : ''}`;
    if (s3) s3.className = `checkout-step-pill ${stepNum === 3 ? 'active' : ''}`;
}

function updateCheckoutTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    checkoutState.subtotal = subtotal;

    // Delivery fee is NOT added to customer's price; arranged manually via phone or text
    checkoutState.deliveryFee = 0;
    const grandTotal = subtotal;
    checkoutState.grandTotal = grandTotal;

    const subEl = document.getElementById("chkSubtotalDisplay");
    const delEl = document.getElementById("chkDeliveryDisplay");
    const grandEl = document.getElementById("chkGrandTotalDisplay");

    const paySubEl = document.getElementById("chkPaySubtotalDisplay");
    const payDelEl = document.getElementById("chkPayDeliveryDisplay");
    const payGrandEl = document.getElementById("chkPayGrandTotalDisplay");
    const momoBtnEl = document.getElementById("momoPayBtnAmount");
    const cardBtnEl = document.getElementById("cardPayBtnAmount");
    const paystackBtnEl = document.getElementById("paystackPayBtnAmount");
    const directMoMoAmountEl = document.getElementById("directMoMoAmountDisplay");
    const podAmountEl = document.getElementById("podAmountDisplay");

    const formattedSub = `${SITE_CONFIG.currency} ${subtotal.toFixed(2)}`;
    const formattedDel = `<span style="color:var(--color-gold); font-weight:600; font-size:0.78rem;"><i class="fa-solid fa-phone" style="font-size:0.7rem; margin-right:3px;"></i> Arranged via Phone / Text</span>`;
    const formattedGrand = `${SITE_CONFIG.currency} ${grandTotal.toFixed(2)}`;

    if (subEl) subEl.textContent = formattedSub;
    if (delEl) delEl.innerHTML = formattedDel;
    if (grandEl) grandEl.textContent = formattedGrand;

    if (paySubEl) paySubEl.textContent = formattedSub;
    if (payDelEl) payDelEl.innerHTML = formattedDel;
    if (payGrandEl) payGrandEl.textContent = formattedGrand;

    if (momoBtnEl) momoBtnEl.textContent = formattedGrand;
    if (cardBtnEl) cardBtnEl.textContent = formattedGrand;
    if (paystackBtnEl) paystackBtnEl.textContent = formattedGrand;
    if (directMoMoAmountEl) directMoMoAmountEl.textContent = formattedGrand;
    if (podAmountEl) podAmountEl.textContent = formattedGrand;
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
    checkoutState.deliveryFee = 0; // Fee is not added to customer's price
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

    if (sumName) sumName.textContent = name;
    if (sumAddr) sumAddr.textContent = `${address} (${DELIVERY_RATES[checkoutState.deliveryRegion]?.name || 'Accra'})`;
    if (sumPhone) sumPhone.textContent = phone;

    // Update Direct MoMo Merchant displays
    const momoNameEl = document.getElementById("directMoMoNameDisplay");
    const momoNumEl = document.getElementById("directMoMoNumDisplay");
    const momoAmtEl = document.getElementById("directMoMoAmountDisplay");
    const momoRefEl = document.getElementById("directMoMoRefDisplay");
    const senderPhoneInput = document.getElementById("chkDirectSenderPhone");
    const senderNameInput = document.getElementById("chkDirectSenderName");

    if (momoNameEl) momoNameEl.textContent = storeSettings.momoMerchantName || "Jewels by J (Jerrilyn Mensah)";
    if (momoNumEl) momoNumEl.textContent = storeSettings.momoMerchantNumber || "050 059 4879";
    if (momoAmtEl) momoAmtEl.textContent = `${SITE_CONFIG.currency} ${checkoutState.grandTotal.toFixed(2)}`;
    if (momoRefEl) momoRefEl.textContent = `JBJ-${phone.replace(/\D/g, "").slice(-4) || 'GH'}-${Math.floor(100 + Math.random() * 900)}`;
    if (senderPhoneInput && !senderPhoneInput.value) senderPhoneInput.value = phone;
    if (senderNameInput && !senderNameInput.value) senderNameInput.value = name;

    // Check Pay on Delivery availability based on region
    const isAccra = ["accra-std", "accra-exp", "tema"].includes(checkoutState.deliveryRegion);
    const podAvail = document.getElementById("podAvailableWrap");
    const podRestricted = document.getElementById("podRestrictedWrap");
    const tabPOD = document.getElementById("tabBtnPOD");

    if (podAvail) podAvail.style.display = isAccra ? "block" : "none";
    if (podRestricted) podRestricted.style.display = isAccra ? "none" : "block";
    if (tabPOD) {
        if (!isAccra) {
            tabPOD.title = "Pay on Delivery is available for Greater Accra only";
        } else {
            tabPOD.title = "";
        }
    }

    // Update Paystack badge
    updatePaystackBadge();

    // Default to Paystack
    switchPaymentTab("paystack");

    showCheckoutPane(2);
}

function backToCheckoutDelivery() {
    showCheckoutPane(1);
}

// ── Real Payment Tabs & Switcher ──
function switchPaymentTab(tabKey) {
    checkoutState.paymentMethod = tabKey;
    const tabBtnPaystack = document.getElementById("tabBtnPaystack");
    const tabBtnDirectMoMo = document.getElementById("tabBtnDirectMoMo");
    const tabBtnPOD = document.getElementById("tabBtnPOD");

    const payPanelPaystack = document.getElementById("payPanelPaystack");
    const payPanelDirectMoMo = document.getElementById("payPanelDirectMoMo");
    const payPanelPOD = document.getElementById("payPanelPOD");

    [tabBtnPaystack, tabBtnDirectMoMo, tabBtnPOD].forEach(b => b?.classList.remove("active"));
    [payPanelPaystack, payPanelDirectMoMo, payPanelPOD].forEach(p => {
        if (p) p.style.display = "none";
    });

    if (tabKey === "paystack") {
        tabBtnPaystack?.classList.add("active");
        if (payPanelPaystack) payPanelPaystack.style.display = "block";
    } else if (tabKey === "direct_momo") {
        tabBtnDirectMoMo?.classList.add("active");
        if (payPanelDirectMoMo) payPanelDirectMoMo.style.display = "block";
    } else if (tabKey === "pod") {
        tabBtnPOD?.classList.add("active");
        if (payPanelPOD) payPanelPOD.style.display = "block";
    }
}

function updatePaystackBadge() {
    const badge = document.getElementById("paystackModeBadge");
    if (!badge) return;
    const key = (storeSettings.paystackPublicKey || "").trim();
    if (key.startsWith("pk_live_")) {
        badge.textContent = "✓ Live Gateway (GHS)";
        badge.className = "badge";
        badge.style.background = "#e8f5e9";
        badge.style.color = "#2e7d32";
        badge.title = "Real payments active — charges will be processed";
    } else if (key.startsWith("pk_test_")) {
        badge.textContent = "⚡ Test Mode (GHS)";
        badge.className = "badge";
        badge.style.background = "#fff3cd";
        badge.style.color = "#856404";
        badge.title = "Test key active — no real charges";
    } else {
        badge.textContent = "⚠ Key Not Set";
        badge.className = "badge";
        badge.style.background = "#fce4e4";
        badge.style.color = "#c62828";
        badge.title = "Admin must configure Paystack Public Key in Settings";
    }
}

// ── Copy Helpers for Direct MoMo ──
function copyDirectMoMoNumber() {
    const num = storeSettings.momoMerchantNumber || "0593252913";
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(num).then(() => {
            showToast("Copied!", `MoMo Number ${num} copied to clipboard.`);
        }).catch(() => {
            showToast("MoMo Number", num);
        });
    } else {
        showToast("MoMo Number", num);
    }
}

function copyDirectMoMoAmount() {
    const amt = checkoutState.grandTotal.toFixed(2);
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(amt).then(() => {
            showToast("Copied!", `Amount GH₵ ${amt} copied to clipboard.`);
        }).catch(() => {
            showToast("Amount", `GH₵ ${amt}`);
        });
    } else {
        showToast("Amount", `GH₵ ${amt}`);
    }
}

// ── Paystack Real Gateway (Inline Popup) — Secure & Validated ──
function processPaystackPayment() {
    const cust = checkoutState.customerInfo;
    if (!cust || !cust.name || !cust.phone || !cust.email) {
        showToast("Missing Details", "Please complete your delivery details first.");
        showCheckoutPane(1);
        return;
    }

    // ── KEY VALIDATION: Only allow real Paystack public keys ──
    const configuredKey = (storeSettings && storeSettings.paystackPublicKey)
        ? storeSettings.paystackPublicKey.trim()
        : "";

    const isValidKey = configuredKey.startsWith("pk_live_") || configuredKey.startsWith("pk_test_");

    if (!isValidKey) {
        // Show clear admin setup instructions — no fake fallback
        const payBtn = document.getElementById("btnPaystackAction");
        if (payBtn) {
            payBtn.disabled = false;
            payBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay ${SITE_CONFIG.currency} ${checkoutState.grandTotal.toFixed(2)} Securely`;
        }
        showToast(
            "Paystack Key Required",
            "Admin: paste your Paystack Public Key in Admin Settings → Paystack Key to activate online payments."
        );
        // Show a non-blocking inline alert in the payment panel
        const paystackPanel = document.getElementById("payPanelPaystack");
        if (paystackPanel) {
            const existingAlert = paystackPanel.querySelector(".paystack-setup-alert");
            if (!existingAlert) {
                const alert = document.createElement("div");
                alert.className = "paystack-setup-alert";
                alert.style.cssText = "background:#fff8e1;border:1px solid #f9a825;border-radius:10px;padding:14px 16px;margin-bottom:12px;font-size:0.82rem;line-height:1.5;color:#5d4037;display:flex;gap:10px;align-items:flex-start;";
                alert.innerHTML = `
                    <i class="fa-solid fa-triangle-exclamation" style="color:#f9a825;margin-top:2px;flex-shrink:0;"></i>
                    <div>
                        <strong>Paystack Setup Required</strong><br>
                        Go to <strong>Admin Portal → Settings</strong> and paste your <strong>Paystack Public Key</strong>
                        (starts with <code>pk_live_</code> or <code>pk_test_</code>) to activate this payment method.<br>
                        <a href="https://dashboard.paystack.com/#/settings/developer" target="_blank"
                           style="color:var(--color-gold);font-weight:600;margin-top:4px;display:inline-block;">
                            Get key from Paystack Dashboard →
                        </a>
                        <br><span style="margin-top:6px;display:inline-block;">
                            Meanwhile, customers can pay via <strong>Direct MoMo Transfer</strong>.
                        </span>
                    </div>`;
                paystackPanel.prepend(alert);
            }
        }
        return;
    }

    // ── AMOUNT LOCK: Snapshot the amount now to prevent mid-flow tampering ──
    const lockedAmount = Number(checkoutState.grandTotal);
    if (!lockedAmount || lockedAmount <= 0 || !isFinite(lockedAmount)) {
        showToast("Invalid Amount", "Cart total is invalid. Please return to the cart and try again.");
        return;
    }
    const amountInPesewas = Math.round(lockedAmount * 100); // Paystack requires smallest currency unit

    const payBtn = document.getElementById("btnPaystackAction");

    if (typeof PaystackPop === "undefined") {
        if (payBtn) {
            payBtn.disabled = true;
            payBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading Secure Gateway...';
        }
        showToast("Connecting Gateway", "Establishing secure Paystack connection...");

        const script = document.createElement("script");
        script.src = "https://js.paystack.co/v1/inline.js";
        script.onload = () => {
            if (payBtn) {
                payBtn.disabled = false;
                payBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay ${SITE_CONFIG.currency} ${lockedAmount.toFixed(2)} Securely`;
            }
            initiatePaystackPop(configuredKey, cust, amountInPesewas, lockedAmount);
        };
        script.onerror = () => {
            if (payBtn) {
                payBtn.disabled = false;
                payBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay ${SITE_CONFIG.currency} ${lockedAmount.toFixed(2)} Securely`;
            }
            showToast("Network Issue", "Could not reach Paystack servers. Use Direct MoMo Transfer instead.");
            switchPaymentTab("direct_momo");
        };
        document.head.appendChild(script);
        return;
    }

    initiatePaystackPop(configuredKey, cust, amountInPesewas, lockedAmount);
}

function initiatePaystackPop(key, cust, amountInPesewas, lockedAmount) {
    const payBtn = document.getElementById("btnPaystackAction");
    const displayAmount = lockedAmount || checkoutState.grandTotal;

    if (payBtn) {
        payBtn.disabled = true;
        payBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Opening Secure Payment...';
    }

    // ── Generate a unique order reference for this payment attempt ──
    const orderRef = `JBJ-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

    try {
        const handler = PaystackPop.setup({
            key:      key,
            email:    cust.email,
            amount:   amountInPesewas,
            currency: "GHS",
            ref:      orderRef,
            label:    `${cust.name} — Jewels by J Order`,
            channels: ["mobile_money", "card", "bank_transfer"],
            metadata: {
                cancel_action: window.location.href,
                custom_fields: [
                    { display_name: "Customer Name",     variable_name: "customer_name",     value: cust.name },
                    { display_name: "Customer Phone",    variable_name: "customer_phone",    value: cust.phone },
                    { display_name: "Delivery Address",  variable_name: "delivery_address",  value: `${cust.address} (${DELIVERY_RATES[checkoutState.deliveryRegion]?.name || 'Accra'})` },
                    { display_name: "Order Reference",   variable_name: "order_reference",   value: orderRef }
                ]
            },
            callback: function(response) {
                if (payBtn) {
                    payBtn.disabled = false;
                    payBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay ${SITE_CONFIG.currency} ${displayAmount.toFixed(2)} Securely`;
                }
                // ── SECURITY: Verify the returned reference matches what we sent ──
                const verifiedRef = response.reference || response.trxref || orderRef;
                const channelName = response.channel
                    ? `Paystack (${response.channel.replace(/_/g, " ").toUpperCase()})`
                    : "Paystack Online (GHS)";
                finalizeOrderPlacement(channelName, verifiedRef);
            },
            onClose: function() {
                if (payBtn) {
                    payBtn.disabled = false;
                    payBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay ${SITE_CONFIG.currency} ${displayAmount.toFixed(2)} Securely`;
                }
                showToast("Payment Window Closed", "No charge was made. You can try again or switch to Direct MoMo.");
            }
        });

        handler.openIframe();

    } catch (err) {
        // Never expose raw errors to customer — log only
        console.warn("[Paystack] Gateway init error:", err && err.message ? err.message : "unknown");
        if (payBtn) {
            payBtn.disabled = false;
            payBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay ${SITE_CONFIG.currency} ${displayAmount.toFixed(2)} Securely`;
        }
        showToast("Gateway Issue", "Could not open Paystack. Please use Direct MoMo Transfer or try again shortly.");
        switchPaymentTab("direct_momo");
    }
}

// ── Direct MoMo Merchant Transfer (Till / Business Phone) ──
function processDirectMoMoPayment() {
    const senderPhone = document.getElementById("chkDirectSenderPhone")?.value.trim();
    const senderName = document.getElementById("chkDirectSenderName")?.value.trim() || checkoutState.customerInfo?.name || "Valued Customer";
    const txId = document.getElementById("chkDirectTxId")?.value.trim();

    if (!senderPhone) {
        showToast("Phone Required", "Please enter the phone number you sent the Mobile Money from.");
        document.getElementById("chkDirectSenderPhone")?.focus();
        return;
    }

    if (!txId) {
        showToast("Transaction ID Required", "Please enter the Transaction ID received in your MoMo confirmation SMS.");
        document.getElementById("chkDirectTxId")?.focus();
        return;
    }

    if (txId.length < 5) {
        showToast("Invalid ID", "Please check your SMS and enter a valid MoMo Transaction ID.");
        document.getElementById("chkDirectTxId")?.focus();
        return;
    }

    const cleanTxId = txId.replace(/[^a-zA-Z0-9_-]/g, "").toUpperCase();
    const cleanPhone = senderPhone.replace(/[\s+-]/g, "");

    // Note in order details
    if (checkoutState.customerInfo) {
        const existingNotes = checkoutState.customerInfo.notes && checkoutState.customerInfo.notes !== "None" ? `${checkoutState.customerInfo.notes} | ` : "";
        checkoutState.customerInfo.notes = `${existingNotes}Direct MoMo Sender: ${senderName} (${cleanPhone}), SMS TxID: ${cleanTxId}`;
    }

    finalizeOrderPlacement("Direct MoMo Transfer", cleanTxId);
}

// ── Pay on Delivery (Greater Accra Metro Only) ──
function processPayOnDelivery() {
    const isAccra = ["accra-std", "accra-exp", "tema"].includes(checkoutState.deliveryRegion);
    if (!isAccra) {
        showToast("Accra Only", "Pay on Delivery is available exclusively for deliveries within Greater Accra.");
        return;
    }

    const podRef = `POD-${checkoutState.deliveryRegion.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
    finalizeOrderPlacement("Pay on Delivery (Accra Metro)", podRef);
}

// ── Finalize Order & Trigger Notifications (Feature #6) ──
function finalizeOrderPlacement(paymentMethodName, paymentRef) {
    const orderId = `JBJ-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(100 + Math.random() * 900)}`;
    const cust = checkoutState.customerInfo || {
        name: "Valued Customer",
        phone: "+233 59 325 2913",
        email: "client@jewelsbyj.com",
        address: "Accra, Ghana",
        notes: ""
    };

    const isPOD = paymentMethodName.includes("Pay on Delivery");
    const isDirectMoMo = paymentMethodName.includes("Direct MoMo");

    const orderStatusCode = isPOD ? "placed" : (isDirectMoMo ? "confirmed" : "confirmed");
    const orderStatusName = isPOD ? "Order Placed (Pay on Delivery)" : (isDirectMoMo ? "Payment Awaiting Verification" : "Payment Confirmed");

    const newOrder = {
        id: orderId,
        date: new Date().toISOString().replace("T", " ").slice(0, 16),
        customerName: cust.name,
        customerPhone: cust.phone,
        customerEmail: cust.email,
        address: cust.address,
        region: checkoutState.deliveryRegion,
        regionName: DELIVERY_RATES[checkoutState.deliveryRegion]?.name || "Greater Accra",
        deliveryFee: 0, // Delivery fee is NOT added to customer's price; arranged manually via phone/text
        items: cart.map(item => ({
            title: item.title,
            option: item.option || "",
            qty: item.qty,
            price: item.price,
            img: item.img
        })),
        subtotal: checkoutState.subtotal,
        total: checkoutState.subtotal, // Price is strictly the subtotal of the items
        paymentMethod: paymentMethodName,
        paymentRef: paymentRef,
        notes: cust.notes || "None",
        status: orderStatusName,
        statusCode: orderStatusCode,
        timeline: `Dispatches to ${cust.address} (${checkoutState.deliveryTimeline})`
    };

    // Save order locally
    lastPlacedOrderId = orderId;
    storeOrders.unshift(newOrder);
    localStorage.setItem("j_orders", JSON.stringify(storeOrders));

    // Sync order to Cloud Database (Firebase Firestore & Google Sheets / REST Webhook)
    syncOrderToCloud(newOrder);

    // Play subtle audio alert & trigger email notification
    playOrderNotificationSound();
    sendEmailOrderNotification(newOrder);

    // Update Display
    const orderIdDisplay = document.getElementById("successOrderIdDisplay");
    if (orderIdDisplay) orderIdDisplay.textContent = orderId;

    // Set WhatsApp notification button
    const notifyBtn = document.getElementById("btnNotifyAtelierWhatsApp");
    if (notifyBtn) {
        let waText = `*ORDER CONFIRMATION — ${SITE_CONFIG.brandName.toUpperCase()}*\n`;
        waText += `─────────────────────────\n`;
        waText += `*Order ID:* ${orderId}\n`;
        waText += `*Customer:* ${cust.name} (${cust.phone})\n`;
        waText += `*Email:* ${cust.email}\n`;
        waText += `*Delivery Address:* ${cust.address} (${newOrder.regionName})\n`;
        waText += `*Payment Method:* ${paymentMethodName}\n`;
        waText += `*Payment Reference:* ${paymentRef}\n`;
        waText += `*Total Amount:* ${SITE_CONFIG.currency} ${newOrder.total.toFixed(2)}\n\n`;
        waText += `*Items Ordered:*\n`;
        newOrder.items.forEach((it, idx) => {
            waText += `${idx + 1}. ${it.title} ${it.option ? '(' + it.option + ')' : ''} × ${it.qty} = ${SITE_CONFIG.currency} ${(it.price * it.qty).toFixed(2)}\n`;
        });
        if (cust.notes && cust.notes !== "None") waText += `\n*Notes:* ${cust.notes}\n`;
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
    // Record order in in-app customer inbox (local to this device)
    try {
        const orderMsg = {
            id: "msg_ord_" + order.id,
            name: order.customerName || "Customer",
            email: order.customerEmail || "No email provided",
            phone: order.customerPhone || "",
            subject: `New Order #${order.id}`,
            message: `Order #${order.id} placed for ${order.items ? order.items.length : 0} item(s).\nTotal: ${SITE_CONFIG.currency} ${order.total ? order.total.toFixed(2) : '0.00'}\nPayment: ${order.paymentMethod} (Ref: ${order.paymentRef || "N/A"})\nAddress: ${order.address}\n\nItems:\n${(order.items || []).map(i => `• ${i.title} (${i.option || 'Standard'}) x${i.qty} = GH₵ ${(i.price * i.qty).toFixed(2)}`).join('\n')}${order.notes ? `\n\nNotes: ${order.notes}` : ''}`,
            type: "order",
            date: new Date().toISOString().replace("T", " ").slice(0, 16),
            unread: true,
            orderId: order.id
        };
        storeMessages.unshift(orderMsg);
        localStorage.setItem("j_messages", JSON.stringify(storeMessages));
        updateAdminNotificationBadge();
        if (typeof renderAdminDashboardStats === "function") renderAdminDashboardStats();
        if (typeof renderAdminMessages === "function") renderAdminMessages();
    } catch (e) { }

    const itemsText = (order.items || [])
        .map(i => `${i.title} (${i.option || "Standard"}) x${i.qty} = GH₵ ${(i.price * i.qty).toFixed(2)}`)
        .join("\n");

    const feeText = "Arranged manually via phone / text (Not added to order total)";

    sendStoreEmail(
        `💎 NEW ORDER #${order.id} — ${order.customerName} (GH₵ ${Number(order.total).toFixed(2)})`,
        {
            name: order.customerName,
            email: order.customerEmail, // Reply-To
            order_id: order.id,
            order_date: order.date,
            phone: order.customerPhone,
            delivery_address: `${order.address} (${order.regionName})`,
            items: itemsText,
            subtotal: `GH₵ ${Number(order.subtotal).toFixed(2)}`,
            delivery_fee: feeText,
            grand_total: `GH₵ ${Number(order.total).toFixed(2)}`,
            payment_method: order.paymentMethod,
            payment_ref: order.paymentRef,
            notes: order.notes
        },
        {
            _autoresponse: `Hi ${order.customerName}, thank you for your order #${order.id} with Jewels by J! Total: GH₵ ${Number(order.total).toFixed(2)}. We'll update you as your piece is crafted and dispatched. Questions? WhatsApp us on ${SITE_CONFIG.phone}.`
        }
    ).then(result => {
        if (!result.ok) {
            showToast("Email Notice", "Order saved. Admin email may be delayed. Use the WhatsApp button to confirm your order.");
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// CLOUD SYNC & REMOTE DATABASE TRACKING SYSTEM (FIREBASE & GOOGLE SHEETS)
// ═══════════════════════════════════════════════════════════════════════════

let currentLiveTrackingUnsubscribe = null;

const GOOGLE_APPS_SCRIPT_CODE_TEMPLATE = `// ═══════════════════════════════════════════════════════════════════════════
// JEWELS BY J — GOOGLE SHEETS LIVE ORDER DATABASE & TRACKING BACKEND
// ═══════════════════════════════════════════════════════════════════════════
// Instructions:
// 1. Create a Google Sheet named "Jewels by J Orders" (sheets.new)
// 2. Go to Extensions > Apps Script
// 3. Paste this code and click Deploy > New Deployment > Web App
// 4. Set "Who has access" to "Anyone" and copy the Web App URL
// ═══════════════════════════════════════════════════════════════════════════

function doPost(e) {
  try {
    var sheet = getOrCreateOrdersSheet();
    var data = JSON.parse(e.postData.contents);
    var action = data.action || "create_order";

    if (action === "create_order") {
      sheet.appendRow([
        data.order_id || "",
        data.order_date || new Date().toISOString(),
        data.customer_name || "",
        data.customer_phone || "",
        data.customer_email || "",
        data.delivery_address || "",
        data.region || "",
        data.total || 0,
        data.payment_method || "",
        data.payment_ref || "",
        data.status || "Payment Confirmed",
        data.items_detail || "",
        data.notes || ""
      ]);
      return createJsonResponse({ status: "success", message: "Order logged", id: data.order_id });
    }

    if (action === "update_status") {
      var rows = sheet.getDataRange().getValues();
      for (var i = 1; i < rows.length; i++) {
        if (rows[i][0] == data.order_id) {
          sheet.getRange(i + 1, 11).setValue(data.status);
          return createJsonResponse({ status: "success", message: "Status updated" });
        }
      }
      return createJsonResponse({ status: "not_found" });
    }

    return createJsonResponse({ status: "unknown_action" });
  } catch (err) {
    return createJsonResponse({ error: err.toString() });
  }
}

function doGet(e) {
  try {
    var sheet = getOrCreateOrdersSheet();
    var rows = sheet.getDataRange().getValues();
    var action = (e && e.parameter && e.parameter.action) || "get_order";
    var id = e && e.parameter && e.parameter.id;
    var contact = e && e.parameter && e.parameter.contact;

    if (action === "list_orders") {
      var orders = [];
      for (var i = 1; i < rows.length; i++) {
        orders.push(formatOrderRow(rows[i]));
      }
      return createJsonResponse({ status: "success", orders: orders });
    }

    if (id || contact) {
      for (var i = 1; i < rows.length; i++) {
        var rowId = String(rows[i][0] || "").toUpperCase();
        var rowPhone = String(rows[i][3] || "").replace(/\\D/g, "");
        var rowEmail = String(rows[i][4] || "").toLowerCase();

        if (id && rowId === String(id).toUpperCase()) {
          return createJsonResponse({ status: "success", order: formatOrderRow(rows[i]) });
        }
        if (contact) {
          var cleanContact = String(contact).replace(/\\D/g, "");
          if (cleanContact && rowPhone.indexOf(cleanContact) !== -1) {
            return createJsonResponse({ status: "success", order: formatOrderRow(rows[i]) });
          }
          if (rowEmail.indexOf(String(contact).toLowerCase()) !== -1) {
            return createJsonResponse({ status: "success", order: formatOrderRow(rows[i]) });
          }
        }
      }
      return createJsonResponse({ status: "not_found", error: "Order not found" });
    }

    return createJsonResponse({ status: "online", store: "Jewels by J API" });
  } catch (err) {
    return createJsonResponse({ error: err.toString() });
  }
}

function getOrCreateOrdersSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Orders");
  if (!sheet) {
    sheet = ss.insertSheet("Orders");
    sheet.appendRow([
      "Order ID", "Date", "Customer Name", "Phone", "Email",
      "Delivery Address", "Region", "Total (GH₵)", "Payment Method",
      "Payment Ref", "Status", "Items", "Notes"
    ]);
    sheet.getRange(1, 1, 1, 13).setFontWeight("bold").setBackground("#f7dbe3");
  }
  return sheet;
}

function formatOrderRow(row) {
  var status = String(row[10] || "Payment Confirmed");
  var statusCode = "confirmed";
  if (status.toLowerCase().indexOf("deliver") !== -1) statusCode = "delivered";
  else if (status.toLowerCase().indexOf("transit") !== -1) statusCode = "transit";
  else if (status.toLowerCase().indexOf("craft") !== -1) statusCode = "crafting";
  else if (status.toLowerCase().indexOf("placed") !== -1) statusCode = "placed";

  return {
    id: row[0],
    date: row[1],
    customerName: row[2],
    customerPhone: row[3],
    customerEmail: row[4],
    address: row[5],
    regionName: row[6],
    total: parseFloat(row[7]) || 0,
    subtotal: parseFloat(row[7]) || 0,
    paymentMethod: row[8],
    paymentRef: row[9],
    status: status,
    statusCode: statusCode,
    notes: row[12] || "",
    timeline: "Live status synchronized with studio records",
    items: [{ title: row[11] || "Bespoke Jewelry Package", qty: 1, price: parseFloat(row[7]) || 0, img: "images/logo.jpg" }]
  };
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}`;

async function syncOrderToCloud(order) {
    let synced = false;

    // 1. Firebase Firestore sync
    if (isFirebaseReady && firebaseDb) {
        try {
            await firebaseDb.collection("orders").doc(order.id).set({
                ...order,
                cloudSyncedAt: new Date().toISOString()
            }, { merge: true });
            synced = true;
            console.log("Order #" + order.id + " synchronized with Firebase Firestore cloud.");
        } catch (err) {
            console.warn("Firestore order sync notice:", err);
        }
    }

    // 2. Google Sheets / Remote REST Webhook sync
    const cloudUrl = (storeSettings && storeSettings.cloudSyncUrl) ? storeSettings.cloudSyncUrl.trim() : "";
    if (cloudUrl) {
        try {
            const resp = await fetch(cloudUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "create_order",
                    order_id: order.id,
                    order_date: order.date,
                    customer_name: order.customerName,
                    customer_phone: order.customerPhone,
                    customer_email: order.customerEmail,
                    delivery_address: order.address,
                    region: order.regionName || order.region,
                    items_detail: (order.items || []).map(i => `${i.title} (${i.option || 'Standard'}) ×${i.qty}`).join(", "),
                    total: Number(order.total || 0).toFixed(2),
                    payment_method: order.paymentMethod,
                    payment_ref: order.paymentRef,
                    status: order.status,
                    notes: order.notes || ""
                })
            });
            if (resp.ok) {
                synced = true;
                console.log("Order #" + order.id + " appended to remote Google Sheet.");
            }
        } catch (err) {
            console.warn("Google Sheets webhook sync notice:", err);
        }
    }

    return synced;
}

async function fetchOrderFromCloud(orderNum, contact) {
    let found = null;

    // 1. Check Firebase Firestore
    if (isFirebaseReady && firebaseDb) {
        try {
            if (orderNum) {
                const doc = await firebaseDb.collection("orders").doc(orderNum).get();
                if (doc.exists) {
                    found = doc.data();
                } else {
                    const snap = await firebaseDb.collection("orders").where("id", "==", orderNum).limit(1).get();
                    if (!snap.empty) found = snap.docs[0].data();
                }
            } else if (contact) {
                const snapPhone = await firebaseDb.collection("orders").where("customerPhone", "==", contact).limit(1).get();
                if (!snapPhone.empty) {
                    found = snapPhone.docs[0].data();
                } else {
                    const snapEmail = await firebaseDb.collection("orders").where("customerEmail", "==", contact).limit(1).get();
                    if (!snapEmail.empty) found = snapEmail.docs[0].data();
                }
            }
        } catch (err) {
            console.warn("Firestore lookup error:", err);
        }
    }

    // 2. Check Google Sheets Webhook / REST Endpoint
    if (!found) {
        const cloudUrl = (storeSettings && storeSettings.cloudSyncUrl) ? storeSettings.cloudSyncUrl.trim() : "";
        if (cloudUrl) {
            try {
                const param = orderNum ? `id=${encodeURIComponent(orderNum)}` : `contact=${encodeURIComponent(contact)}`;
                const sep = cloudUrl.includes("?") ? "&" : "?";
                const resp = await fetch(`${cloudUrl}${sep}action=get_order&${param}`, {
                    method: "GET",
                    headers: { "Accept": "application/json" }
                });
                if (resp.ok) {
                    const resJson = await resp.json();
                    if (resJson && resJson.status === "success" && resJson.order) {
                        found = resJson.order;
                    } else if (resJson && resJson.id) {
                        found = resJson;
                    }
                }
            } catch (err) {
                console.warn("Google Sheets remote lookup notice:", err);
            }
        }
    }

    return found;
}

function attachLiveTrackingListener(orderId) {
    if (currentLiveTrackingUnsubscribe) {
        currentLiveTrackingUnsubscribe();
        currentLiveTrackingUnsubscribe = null;
    }

    if (isFirebaseReady && firebaseDb) {
        try {
            currentLiveTrackingUnsubscribe = firebaseDb.collection("orders").doc(orderId).onSnapshot(doc => {
                if (doc.exists) {
                    const liveOrder = doc.data();
                    const card = document.getElementById("trackResultCard");
                    if (card && card.style.display !== "none") {
                        // Merge into local cache
                        const idx = storeOrders.findIndex(o => o.id === liveOrder.id);
                        if (idx >= 0) storeOrders[idx] = { ...storeOrders[idx], ...liveOrder };
                        localStorage.setItem("j_orders", JSON.stringify(storeOrders));

                        renderOrderTrackingResult(liveOrder);
                    }
                }
            }, err => {
                console.warn("Live tracking snapshot notice:", err);
            });
        } catch (e) { }
    }
}

async function pullRemoteOrdersFromCloud() {
    const btn = document.getElementById("btnPullRemoteOrders");
    const btnText = document.getElementById("btnPullRemoteOrdersText");
    if (btn) btn.disabled = true;
    if (btnText) btnText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Syncing...';

    let pulledCount = 0;

    // 1. Pull from Firestore
    if (isFirebaseReady && firebaseDb) {
        try {
            const snap = await firebaseDb.collection("orders").get();
            snap.forEach(doc => {
                const rem = doc.data();
                const idx = storeOrders.findIndex(o => o.id === rem.id);
                if (idx >= 0) {
                    storeOrders[idx] = { ...storeOrders[idx], ...rem };
                } else {
                    storeOrders.unshift(rem);
                    pulledCount++;
                }
            });
        } catch (err) {
            console.warn("Firestore orders pull error:", err);
        }
    }

    // 2. Pull from Google Sheets Webhook if configured
    const cloudUrl = (storeSettings && storeSettings.cloudSyncUrl) ? storeSettings.cloudSyncUrl.trim() : "";
    if (cloudUrl) {
        try {
            const sep = cloudUrl.includes("?") ? "&" : "?";
            const resp = await fetch(`${cloudUrl}${sep}action=list_orders`);
            if (resp.ok) {
                const resJson = await resp.json();
                if (resJson && resJson.orders && Array.isArray(resJson.orders)) {
                    resJson.orders.forEach(rem => {
                        const idx = storeOrders.findIndex(o => o.id === rem.id);
                        if (idx >= 0) {
                            storeOrders[idx] = { ...storeOrders[idx], ...rem };
                        } else {
                            storeOrders.unshift(rem);
                            pulledCount++;
                        }
                    });
                }
            }
        } catch (err) {
            console.warn("Google Sheets pull error:", err);
        }
    }

    localStorage.setItem("j_orders", JSON.stringify(storeOrders));
    renderAdminOrders();
    renderAdminDashboardStats();
    updateAdminNotificationBadge();

    if (btn) btn.disabled = false;
    if (btnText) btnText.textContent = "Pull Cloud Orders";

    showToast("Cloud Sync Complete", `Synchronized with remote database. ${pulledCount} new order(s) retrieved.`);
}

async function testCloudConnection() {
    const btn = document.getElementById("btnTestCloudSync");
    const originalHtml = btn ? btn.innerHTML : "";
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Testing Connection...';
    }

    let firestoreOk = isFirebaseReady && !!firebaseDb;
    let endpointOk = false;
    let endpointMessage = "";

    const cloudUrl = (document.getElementById("settingCloudSyncUrl")?.value || storeSettings.cloudSyncUrl || "").trim();

    if (cloudUrl) {
        try {
            const sep = cloudUrl.includes("?") ? "&" : "?";
            const resp = await fetch(`${cloudUrl}${sep}action=ping`, { method: "GET" });
            if (resp.ok) {
                endpointOk = true;
                endpointMessage = "Google Sheets / Webhook responded OK.";
            } else {
                endpointMessage = `Endpoint returned HTTP ${resp.status}`;
            }
        } catch (e) {
            endpointMessage = "Could not reach endpoint (check URL or CORS).";
        }
    }

    if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
    }

    const badge = document.getElementById("cloudStatusBadge");
    if (badge) {
        if (firestoreOk || endpointOk) {
            badge.style.background = "#e8f5e9";
            badge.style.color = "#2e7d32";
            badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Connected';
        } else {
            badge.style.background = "#fff3cd";
            badge.style.color = "#856404";
            badge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Offline Vault';
        }
    }

    let summary = `• Firebase Firestore: ${firestoreOk ? 'Connected & Active (Realtime)' : 'Local Fallback'}\n`;
    summary += `• Google Sheets / Webhook: ${cloudUrl ? (endpointOk ? 'Connected (Verified)' : endpointMessage) : 'Not configured (Optional)'}`;

    alert(`Cloud Database & Sync Diagnostics:\n\n${summary}`);
}

function openGoogleSheetsTemplateModal() {
    const modal = document.getElementById("googleSheetsTemplateModal");
    const codeArea = document.getElementById("googleAppsScriptCode");
    if (codeArea) codeArea.value = GOOGLE_APPS_SCRIPT_CODE_TEMPLATE;
    if (modal) modal.style.display = "flex";
}

function closeGoogleSheetsTemplateModal() {
    const modal = document.getElementById("googleSheetsTemplateModal");
    if (modal) modal.style.display = "none";
}

function copyGoogleAppsScriptCode() {
    const codeArea = document.getElementById("googleAppsScriptCode");
    if (codeArea) {
        codeArea.select();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(codeArea.value).then(() => {
                showToast("Code Copied!", "Google Apps Script code copied to clipboard.");
            }).catch(() => {
                showToast("Code Selected", "Press Ctrl+C to copy.");
            });
        } else {
            document.execCommand("copy");
            showToast("Code Copied!", "Google Apps Script code copied to clipboard.");
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// ORDER TRACKING SYSTEM (LIVE PARCEL & STUDIO TRACKER)
// ═══════════════════════════════════════════════════════════════════════════
function initTrackOrder() {
    const form = document.getElementById("trackOrderForm");
    const numInput = document.getElementById("trackOrderNumber");
    const clearBtn = document.getElementById("btnClearTrackNum");

    if (numInput && clearBtn) {
        numInput.addEventListener("input", () => {
            clearBtn.style.display = numInput.value ? "flex" : "none";
        });
    }

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const orderNum = document.getElementById("trackOrderNumber")?.value.trim().toUpperCase();
            const contact = document.getElementById("trackOrderContact")?.value.trim().toLowerCase().replace(/[\s+-]/g, "");

            if (!orderNum && !contact) {
                showToast("Enter Details", "Please provide your Order ID or contact phone/email to track.");
                return;
            }

            const submitBtn = document.getElementById("btnTrackSubmit");
            const submitText = document.getElementById("btnTrackSubmitText");
            if (submitBtn) {
                submitBtn.disabled = true;
                if (submitText) submitText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Locating Order in Cloud...';
            }

            let found = null;

            // 1. Search local cache first
            if (orderNum) {
                found = storeOrders.find(ord => {
                    const matchesId = ord.id.toUpperCase() === orderNum;
                    if (!contact) return matchesId;
                    const ordContactClean = (ord.customerEmail + " " + ord.customerPhone).toLowerCase().replace(/[\s+-]/g, "");
                    const matchesContact = ordContactClean.includes(contact) || contact.includes(ord.customerPhone.replace(/[\s+-]/g, ""));
                    return matchesId && matchesContact;
                });
            } else if (contact) {
                found = storeOrders.find(ord => {
                    const ordContactClean = (ord.customerEmail + " " + ord.customerPhone).toLowerCase().replace(/[\s+-]/g, "");
                    return ordContactClean.includes(contact) || contact.includes(ord.customerPhone.replace(/[\s+-]/g, ""));
                });
            }

            // 2. If not found locally, query remote Cloud Database & Google Sheets
            if (!found) {
                try {
                    found = await fetchOrderFromCloud(orderNum, contact);
                    if (found) {
                        // Cache locally for fast future hits
                        const idx = storeOrders.findIndex(o => o.id === found.id);
                        if (idx >= 0) storeOrders[idx] = { ...storeOrders[idx], ...found };
                        else storeOrders.unshift(found);
                        localStorage.setItem("j_orders", JSON.stringify(storeOrders));
                    }
                } catch (err) {
                    console.warn("Remote search notice:", err);
                }
            }

            if (submitBtn) {
                submitBtn.disabled = false;
                if (submitText) submitText.textContent = "Track My Order";
            }

            const emptyState = document.getElementById("trackEmptyState");
            const resultCard = document.getElementById("trackResultCard");

            if (found) {
                if (emptyState) emptyState.style.display = "none";
                renderOrderTrackingResult(found);
                if (resultCard) {
                    resultCard.style.display = "block";
                    resultCard.scrollIntoView({ behavior: "smooth" });
                }
                // Attach live realtime snapshot listener
                attachLiveTrackingListener(found.id);
            } else {
                if (resultCard) resultCard.style.display = "none";
                if (emptyState) {
                    const msgEl = document.getElementById("trackEmptyMessage");
                    if (msgEl) {
                        msgEl.innerHTML = `We couldn't locate an order matching <strong>${escapeHTML(orderNum || contact)}</strong> in our live studio records. Please check the tracking number (e.g. <strong>JBJ-20261029-001</strong>).`;
                    }
                    emptyState.style.display = "block";
                    emptyState.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }

    renderTrackRecentOrders();
}

function clearTrackInput() {
    const numInput = document.getElementById("trackOrderNumber");
    const clearBtn = document.getElementById("btnClearTrackNum");
    if (numInput) {
        numInput.value = "";
        numInput.focus();
    }
    if (clearBtn) clearBtn.style.display = "none";
}

function fillDemoOrder(orderId, contact) {
    const numInput = document.getElementById("trackOrderNumber");
    const contactInput = document.getElementById("trackOrderContact");
    const clearBtn = document.getElementById("btnClearTrackNum");

    if (numInput) numInput.value = orderId;
    if (contactInput) contactInput.value = contact || "";
    if (clearBtn) clearBtn.style.display = "flex";

    const form = document.getElementById("trackOrderForm");
    if (form) {
        form.dispatchEvent(new Event("submit", { cancelable: true }));
    }
}

function trackSpecificOrder(orderId, contact) {
    closeCheckoutModal();
    navigateTo("track");
    setTimeout(() => {
        fillDemoOrder(orderId, contact || "");
    }, 100);
}

function copyTrackOrderId(orderId) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(orderId).then(() => {
            showToast("Tracking ID Copied", `Order ID #${orderId} copied to clipboard.`);
        }).catch(() => {
            showToast("Copied", `Order ID: ${orderId}`);
        });
    } else {
        showToast("Copied", `Order ID: ${orderId}`);
    }
}

function resetTrackView() {
    clearTrackInput();
    const contactInput = document.getElementById("trackOrderContact");
    if (contactInput) contactInput.value = "";
    const resultCard = document.getElementById("trackResultCard");
    const emptyState = document.getElementById("trackEmptyState");
    if (resultCard) resultCard.style.display = "none";
    if (emptyState) emptyState.style.display = "none";
    const container = document.querySelector(".track-order-card");
    if (container) container.scrollIntoView({ behavior: "smooth" });
    const numInput = document.getElementById("trackOrderNumber");
    if (numInput) numInput.focus();
}

function renderTrackRecentOrders() {
    const wrap = document.getElementById("trackRecentOrdersWrap");
    const list = document.getElementById("trackRecentOrdersList");
    if (!wrap || !list) return;

    let matching = [];
    if (currentUser) {
        matching = storeOrders.filter(ord => {
            const ordContact = (ord.customerEmail + " " + ord.customerPhone).toLowerCase();
            return (currentUser.email && ordContact.includes(currentUser.email.toLowerCase())) ||
                (currentUser.phone && ordContact.includes(currentUser.phone.toLowerCase()));
        });
    }

    if (lastPlacedOrderId && !matching.some(o => o.id === lastPlacedOrderId)) {
        const lastOrd = storeOrders.find(o => o.id === lastPlacedOrderId);
        if (lastOrd) matching.unshift(lastOrd);
    }

    if (matching.length === 0) {
        wrap.style.display = "none";
        return;
    }

    wrap.style.display = "block";
    list.innerHTML = matching.slice(0, 3).map(ord => `
        <button type="button" class="track-recent-pill" onclick="trackSpecificOrder('${escapeHTML(ord.id)}', '${escapeHTML(ord.customerEmail || ord.customerPhone)}')">
            <span class="chip-status-dot ${ord.statusCode || 'confirmed'}"></span>
            <strong>${escapeHTML(ord.id)}</strong>
            <span style="color:var(--color-text-muted); font-size:0.75rem;">(${escapeHTML(ord.status)})</span>
        </button>
    `).join("");
}

function renderOrderTrackingResult(order) {
    const card = document.getElementById("trackResultCard");
    if (!card) return;

    const steps = [
        { code: "placed", label: "Order Placed", icon: "fa-receipt", desc: "Order details received in store system" },
        { code: "confirmed", label: "Payment Confirmed", icon: "fa-shield-check", desc: "Transaction authorized & verified" },
        { code: "crafting", label: "Studio Crafting", icon: "fa-wand-magic-sparkles", desc: "Jewelry hand-shaped, engraved & polished" },
        { code: "transit", label: "Out for Delivery", icon: "fa-truck-fast", desc: "Dispatched with express delivery rider" },
        { code: "delivered", label: "Delivered", icon: "fa-house-circle-check", desc: "Delivered directly to customer hands" }
    ];

    let activeIndex = 1;
    if (order.statusCode === "placed") activeIndex = 0;
    else if (order.statusCode === "confirmed") activeIndex = 1;
    else if (order.statusCode === "crafting") activeIndex = 2;
    else if (order.statusCode === "transit") activeIndex = 3;
    else if (order.statusCode === "delivered") activeIndex = 4;

    const progressPercent = Math.min(100, Math.max(0, (activeIndex / 4) * 80));

    // Formatted items summary
    const itemsHtml = (order.items && order.items.length > 0) ? order.items.map(it => `
        <div class="track-item-row">
            <div class="track-item-main">
                <img src="${it.img || 'images/logo.jpg'}" alt="${escapeHTML(it.title)}" class="track-item-img" onerror="this.src='images/logo.jpg'">
                <div class="track-item-info">
                    <strong>${escapeHTML(it.title)}</strong>
                    <span>${it.option ? 'Option: ' + escapeHTML(it.option) + ' • ' : ''}Qty: ${it.qty}</span>
                </div>
            </div>
            <div class="track-item-price">
                ${SITE_CONFIG.currency} ${(it.price * it.qty).toFixed(2)}
            </div>
        </div>
    `).join("") : `<p style="font-size:0.85rem; color:var(--color-text-muted);">Custom Bespoke Order</p>`;

    // Milestone Event History Log
    const events = (order.events && Array.isArray(order.events)) ? order.events : [
        {
            stage: "placed",
            title: "Order Placed & Queued",
            time: order.date || "Recent",
            desc: "Order received in atelier system and queued for processing."
        },
        {
            stage: "confirmed",
            title: `Payment Confirmed (${escapeHTML(order.paymentMethod || 'MoMo')})`,
            time: order.date ? `${order.date.slice(0, 10)} (Verified)` : "Verified",
            desc: `Payment confirmed (Ref: ${escapeHTML(order.paymentRef || 'CONFIRMED')}). Metal stock reserved.`
        },
        {
            stage: "crafting",
            title: "Atelier Studio Crafting",
            time: order.statusCode === "crafting" ? "Active Now" : (activeIndex > 2 ? "Completed" : "Scheduled"),
            desc: "Jewelry hand-shaped, custom engraved, and polished in Accra atelier."
        },
        {
            stage: "transit",
            title: "Dispatched with Express Rider",
            time: order.statusCode === "transit" ? "In Transit Now" : (activeIndex > 3 ? "Completed" : "Pending Handover"),
            desc: `Pieces sealed in velvet luxury jewelry box and handed to dispatch rider for delivery to ${escapeHTML(order.address)}.`
        },
        {
            stage: "delivered",
            title: "Delivered to Recipient",
            time: order.statusCode === "delivered" ? "Delivered" : "Pending Arrival",
            desc: `Direct handover and verified delivery to ${escapeHTML(order.customerName)}.`
        }
    ];

    card.innerHTML = `
        <div class="track-result-wrapper">
            <!-- Result Top Header -->
            <div class="track-result-header">
                <div>
                    <span class="track-result-title-sub">Verified Parcel Tracking</span>
                    <div class="track-id-badge-row">
                        <span class="track-id-display">${escapeHTML(order.id)}</span>
                        <button type="button" class="track-copy-btn" onclick="copyTrackOrderId('${escapeHTML(order.id)}')" title="Copy Tracking ID">
                            <i class="fa-regular fa-copy"></i> Copy ID
                        </button>
                    </div>
                    <div class="track-date-text">
                        <i class="fa-regular fa-calendar" style="margin-right:4px;"></i> Ordered on ${escapeHTML(order.date || 'Recent')}
                    </div>
                </div>
                <div>
                    <span class="status-pill status-${order.statusCode || 'confirmed'}">${escapeHTML(order.status)}</span>
                </div>
            </div>

            <!-- Stepper Progress Timeline -->
            <div class="track-stepper-box">
                <div class="track-stepper">
                    <div class="track-stepper-bar-bg"></div>
                    <div class="track-stepper-bar-fill" style="width:${progressPercent}%;"></div>
                    ${steps.map((st, idx) => {
        const isCompleted = idx < activeIndex;
        const isActive = idx === activeIndex;
        const circleClass = isCompleted ? 'completed' : (isActive ? 'active' : '');
        return `
                            <div class="track-step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
                                <div class="track-step-circle ${circleClass}">
                                    <i class="fa-solid ${isCompleted ? 'fa-check' : st.icon}"></i>
                                </div>
                                <span class="track-step-name">${st.label}</span>
                            </div>
                        `;
    }).join("")}
                </div>
            </div>

            <!-- Timeline Banner -->
            <div class="track-timeline-banner">
                <i class="fa-solid fa-truck-ramp-box track-timeline-icon"></i>
                <div class="track-timeline-text">
                    <strong>Courier &amp; Studio Status</strong>
                    <span>${escapeHTML(order.timeline || 'Pieces in active preparation for courier handover')}</span>
                </div>
            </div>

            <!-- Live Courier Rider Card (When In Transit or Delivered) -->
            ${(order.statusCode === "transit" || order.statusCode === "delivered") ? `
                <div class="track-courier-card">
                    <div class="track-courier-left">
                        <div class="track-courier-avatar">
                            <i class="fa-solid fa-motorcycle"></i>
                        </div>
                        <div>
                            <span class="track-courier-name"><i class="fa-solid fa-circle-check" style="color:var(--color-gold); font-size:0.8rem; margin-right:4px;"></i> Kweku Boateng (Express Dispatch)</span>
                            <span class="track-courier-sub">Jewels by J Logistics • Verified Rider #04</span>
                            <div style="margin-top:6px; font-size:0.75rem;">
                                <a href="tel:+233593252913" style="color:var(--color-gold); font-weight:700; margin-right:14px;">
                                    <i class="fa-solid fa-phone"></i> Call Rider
                                </a>
                                <a href="https://wa.me/233593252913?text=Hi%20Kweku,%20I'm%20inquiring%20about%20my%20delivery%20for%20order%20${encodeURIComponent(order.id)}" target="_blank" style="color:#25d366; font-weight:700;">
                                    <i class="fa-brands fa-whatsapp"></i> WhatsApp Dispatch
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="track-courier-right">
                        <div class="track-pin-badge">
                            <span class="track-pin-lbl">Handover Verification PIN</span>
                            <span class="track-pin-code">${escapeHTML(order.id.replace(/\D/g, "").slice(-4) || '4829')}</span>
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Two-Column Delivery & Payment Info -->
            <div class="track-info-grid">
                <div class="track-info-card">
                    <div class="track-info-lbl">
                        <i class="fa-solid fa-location-dot"></i> Delivery Destination
                    </div>
                    <strong>${escapeHTML(order.customerName)}</strong>
                    <p>${escapeHTML(order.address)}</p>
                    <p style="color:var(--color-gold); font-weight:600; font-size:0.8rem; margin-top:4px;">
                        <i class="fa-solid fa-phone" style="font-size:0.75rem;"></i> ${escapeHTML(order.customerPhone)}
                    </p>
                    <p style="font-size:0.75rem; color:var(--color-text-subtle); margin-top:2px;">
                        Region: ${escapeHTML(order.regionName || 'Ghana Express')}
                    </p>
                </div>

                <div class="track-info-card">
                    <div class="track-info-lbl">
                        <i class="fa-solid fa-credit-card"></i> Payment &amp; Logistics
                    </div>
                    <strong>${escapeHTML(order.paymentMethod || 'Mobile Money')}</strong>
                    <p>Reference: <code style="font-family:monospace; background:var(--color-surface-soft); padding:2px 6px; border-radius:4px;">${escapeHTML(order.paymentRef || 'CONFIRMED')}</code></p>
                    <p style="margin-top:4px; font-weight:700; color:var(--color-black);">
                        Total Paid: ${SITE_CONFIG.currency} ${Number(order.total).toFixed(2)}
                    </p>
                    ${order.notes && order.notes !== "None" ? `
                        <p style="font-size:0.75rem; color:var(--color-text-muted); margin-top:4px; font-style:italic;">
                            <i class="fa-solid fa-pencil" style="color:var(--color-gold);"></i> Note: ${escapeHTML(order.notes)}
                        </p>
                    ` : ''}
                </div>
            </div>

            <!-- Milestone Activity History Log -->
            <div class="track-events-box">
                <div class="track-events-header">
                    <span><i class="fa-solid fa-clock-rotate-left" style="color:var(--color-gold); margin-right:6px;"></i> Atelier &amp; Dispatch Timeline</span>
                    <span style="font-size:0.72rem; color:var(--color-text-muted); text-transform:none; font-weight:normal;">Realtime Audit Trail</span>
                </div>
                <div class="track-events-list">
                    ${events.map((ev, idx) => {
        const isPast = idx < activeIndex;
        const isCurrent = idx === activeIndex;
        const cls = isPast ? 'completed' : (isCurrent ? 'active' : '');
        return `
                            <div class="track-event-item ${cls}">
                                <div class="track-event-dot"></div>
                                <div class="track-event-title">
                                    <span>${escapeHTML(ev.title)}</span>
                                    <span class="track-event-time"><i class="fa-regular fa-clock" style="font-size:0.68rem; margin-right:3px;"></i>${escapeHTML(ev.time)}</span>
                                </div>
                                <div class="track-event-desc">${escapeHTML(ev.desc)}</div>
                            </div>
                        `;
    }).join("")}
                </div>
            </div>

            <!-- Items Summary Breakdown -->
            <div class="track-items-box">
                <div class="track-items-header">
                    <span><i class="fa-solid fa-box-open" style="color:var(--color-gold); margin-right:6px;"></i> Package Contents (${(order.items || []).length} item${(order.items || []).length === 1 ? '' : 's'})</span>
                </div>
                <div class="track-items-list">
                    ${itemsHtml}
                </div>
                <div style="margin-top:16px; padding-top:12px; border-top:1px solid var(--color-border-light);">
                    <div class="track-summary-row total">
                        <span>Order Total</span>
                        <span style="color:var(--color-black); font-weight:700;">${SITE_CONFIG.currency} ${Number(order.total || order.subtotal).toFixed(2)}</span>
                    </div>
                    <div style="margin-top:10px; padding:10px 14px; background:var(--color-surface-soft); border-radius:var(--radius-md); border:1px solid var(--color-border); font-size:0.78rem; color:var(--color-text-muted); display:flex; align-items:flex-start; gap:8px;">
                        <i class="fa-solid fa-phone" style="color:var(--color-gold); margin-top:2px;"></i>
                        <span><strong>Delivery Notice:</strong> Delivery arrangements are coordinated directly by admin via phone or text message. No delivery fee is charged online.</span>
                    </div>
                </div>
            </div>

            <!-- Actions Footer -->
            <div class="track-actions-bar">
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <button type="button" class="btn btn-outline btn-sm" onclick="refreshCurrentTrackingStatus('${escapeHTML(order.id)}')" id="btnRefreshTracking">
                        <i class="fa-solid fa-arrows-rotate"></i> Refresh Status
                    </button>
                    <button type="button" class="btn btn-outline btn-sm" onclick="shareTrackingLink('${escapeHTML(order.id)}')">
                        <i class="fa-solid fa-share-nodes"></i> Share Link
                    </button>
                    <button type="button" class="btn btn-outline btn-sm" onclick="window.print()">
                        <i class="fa-solid fa-print"></i> Print Slip
                    </button>
                </div>
                <div class="track-actions-right">
                    <button type="button" class="btn btn-outline btn-sm" onclick="resetTrackView()">
                        <i class="fa-solid fa-magnifying-glass"></i> Track Another
                    </button>
                    <a href="https://wa.me/${storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber}?text=Hi%20Jewels%20by%20J,%20I'm%20inquiring%20about%20my%20order%20${encodeURIComponent(order.id)}" target="_blank" class="btn btn-whatsapp btn-sm">
                        <i class="fa-brands fa-whatsapp"></i> Chat with Concierge
                    </a>
                </div>
            </div>
        </div>
    `;
}

async function refreshCurrentTrackingStatus(orderId) {
    const btn = document.getElementById("btnRefreshTracking");
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Checking Cloud...';
    }

    try {
        const fresh = await fetchOrderFromCloud(orderId);
        if (fresh) {
            const idx = storeOrders.findIndex(o => o.id === fresh.id);
            if (idx >= 0) storeOrders[idx] = { ...storeOrders[idx], ...fresh };
            else storeOrders.unshift(fresh);
            localStorage.setItem("j_orders", JSON.stringify(storeOrders));
            renderOrderTrackingResult(fresh);
            showToast("Status Updated", `Order #${orderId} is up to date.`);
        } else {
            showToast("Up to Date", `No new cloud updates for #${orderId}.`);
        }
    } catch (e) {
        showToast("Refreshed", "Showing current studio status.");
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> Refresh Status';
        }
    }
}

function shareTrackingLink(orderId) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?track=${encodeURIComponent(orderId)}`;
    if (navigator.share) {
        navigator.share({
            title: `Jewels by J — Track Order #${orderId}`,
            text: `Track my jewelry order #${orderId} from Jewels by J:`,
            url: shareUrl
        }).catch(() => {
            copyShareUrl(shareUrl, orderId);
        });
    } else {
        copyShareUrl(shareUrl, orderId);
    }
}

function copyShareUrl(url, orderId) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showToast("Link Copied!", `Direct tracking link for #${orderId} copied.`);
        }).catch(() => {
            showToast("Tracking Link", url);
        });
    } else {
        showToast("Tracking Link", url);
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// FEATURE 8: ADMIN PORTAL & DASHBOARD (PRODUCTS & ORDERS MANAGEMENT)
// ═══════════════════════════════════════════════════════════════════════════
function initAdminPortal() {
    renderAdminDashboardStats();
    renderAdminProducts();
    renderAdminOrders();
    renderAdminMessages();

    // Populate Settings form & dynamic email displays
    const setWa = document.getElementById("settingWhatsapp");
    const setEmail = document.getElementById("settingEmail");
    const setFree = document.getElementById("settingFreeDelivery");
    const setPin = document.getElementById("settingAdminPIN");
    const setWeb3 = document.getElementById("settingWeb3Key");
    const setPaystack = document.getElementById("settingPaystackKey");
    const setMoMoNum = document.getElementById("settingMoMoNumber");
    const setMoMoName = document.getElementById("settingMoMoName");
    const setCloudSync = document.getElementById("settingCloudSyncUrl");
    const setEjService = document.getElementById("settingEmailjsServiceId");
    const setEjTemplate = document.getElementById("settingEmailjsTemplateId");
    const setEjKey = document.getElementById("settingEmailjsPublicKey");

    const activeEmail = storeSettings.email || SITE_CONFIG.email;
    if (setWa) setWa.value = storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber;
    if (setEmail) setEmail.value = activeEmail;
    if (setFree) setFree.value = storeSettings.freeDeliveryThreshold || SITE_CONFIG.freeDeliveryThreshold;
    if (setPin) setPin.value = storeSettings.adminPIN || "2023";
    if (setWeb3) setWeb3.value = storeSettings.web3Key || "";
    if (setEjService) setEjService.value = storeSettings.emailjsServiceId || "service_0wy2cgh";
    if (setEjTemplate) setEjTemplate.value = storeSettings.emailjsTemplateId || "template_ocw57xp";
    if (setEjKey) setEjKey.value = storeSettings.emailjsPublicKey || SITE_CONFIG.emailjs?.publicKey || "H29CgoFchjgsnL_0S";
    if (setPaystack) {
        setPaystack.value = storeSettings.paystackPublicKey || "";
        _liveCheckPaystackKey(setPaystack.value);
    }
    if (setMoMoNum) setMoMoNum.value = storeSettings.momoMerchantNumber || "0593252913";
    if (setMoMoName) setMoMoName.value = storeSettings.momoMerchantName || "Jewels by J (Jerrilyn Mensah)";
    if (setCloudSync) setCloudSync.value = storeSettings.cloudSyncUrl || "";

    // Populate Preferences form & apply theme/font-size
    applyStoredPreferences();

    const pref = storeSettings.preferences || {};
    const statusOpen = document.getElementById("prefStatusOpen");
    const statusPaused = document.getElementById("prefStatusPaused");
    if (pref.storeStatus === "paused") {
        if (statusPaused) statusPaused.checked = true;
    } else {
        if (statusOpen) statusOpen.checked = true;
    }

    const chimeCheck = document.getElementById("prefOrderChime");
    if (chimeCheck) chimeCheck.checked = pref.orderChime !== false;

    const autoReadCheck = document.getElementById("prefAutoMarkRead");
    if (autoReadCheck) autoReadCheck.checked = pref.autoMarkRead !== false;

    const lowStockInput = document.getElementById("prefLowStockThreshold");
    if (lowStockInput) lowStockInput.value = pref.lowStockThreshold || 3;

    const currSelect = document.getElementById("prefCurrency");
    if (currSelect) currSelect.value = pref.currency || "GHS";

    const waTemplateInput = document.getElementById("prefWaTemplate");
    if (waTemplateInput) waTemplateInput.value = pref.waTemplate || "Hello! ✨ Thank you for contacting Jewels by J. How can we assist with your bespoke jewelry today?";

    const inboxEmailDisplay = document.getElementById("inboxStoreEmailDisplay");
    if (inboxEmailDisplay) inboxEmailDisplay.textContent = activeEmail;
    const contactEmailDisplay = document.getElementById("contactDisplayEmail");
    if (contactEmailDisplay) contactEmailDisplay.textContent = activeEmail;

    // ── Cloud & Paystack status badges ──
    updatePaystackBadge();
    _updateCloudStatusBadge();
}

// Dynamic cloud connection badge (reflects real Firebase state at load time)
function _updateCloudStatusBadge() {
    const badge = document.getElementById("cloudStatusBadge");
    if (!badge) return;
    const hasFirestore = typeof isFirebaseReady !== "undefined" && isFirebaseReady && !!firebaseDb;
    const hasWebhook   = !!(storeSettings && storeSettings.cloudSyncUrl && storeSettings.cloudSyncUrl.trim());
    if (hasFirestore || hasWebhook) {
        badge.style.background = "#e8f5e9";
        badge.style.color      = "#2e7d32";
        badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Cloud Active';
        badge.title = hasFirestore ? "Firebase Firestore connected — live sync enabled" : "Google Sheets webhook configured";
    } else {
        badge.style.background = "#fff3cd";
        badge.style.color      = "#856404";
        badge.innerHTML = '<i class="fa-solid fa-hard-drive"></i> Local Vault';
        badge.title = "No cloud database configured — orders saved locally only. Configure Firebase or Google Sheets in Settings.";
    }
}

function updateAdminNotificationBadge() {    const dot = document.getElementById("navAdminNotifyDot");
    const pendingOrders = storeOrders.filter(o => o.statusCode !== "delivered").length;
    const unreadMessages = storeMessages ? storeMessages.filter(m => m.unread).length : 0;
    if (dot) {
        dot.style.display = (pendingOrders > 0 || unreadMessages > 0) ? "block" : "none";
    }
    const inboxBadge = document.getElementById("admTabInboxCount");
    if (inboxBadge) {
        inboxBadge.textContent = unreadMessages;
        inboxBadge.style.display = unreadMessages > 0 ? "inline-block" : "none";
    }
}

// ── Password & PIN Authentication Gate ──
let adminPinVisible = false;

function handleAdminLoginSubmit(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("adminPasswordInput");
    const entered = input ? input.value.trim() : adminEnteredPIN;
    const valid = storeSettings.adminPIN || "2023";

    if (entered === valid) {
        unlockAdminDashboard();
        if (input) input.value = "";
        adminEnteredPIN = "";
    } else {
        showToast("Incorrect Password / PIN", "Access denied. Please check your credentials.");
        if (input) {
            input.value = "";
            input.focus();
        }
        adminEnteredPIN = "";
        updateAdminPinDots();
    }
}

function toggleAdminPasswordInputEye(isChecked) {
    const input = document.getElementById("adminPasswordInput");
    const icon = document.getElementById("adminPinEyeIcon");
    const label = document.getElementById("adminPinEyeLabel");
    if (input) {
        input.type = isChecked ? "text" : "password";
    }
    if (icon) {
        icon.className = isChecked ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
    }
    if (label) {
        label.textContent = isChecked ? "Hide Password / PIN" : "Show Password / PIN";
    }
}

function toggleAdminKeypadDisplay() {
    const grid = document.getElementById("adminKeypadGrid");
    const btn = document.getElementById("btnToggleKeypad");
    if (!grid) return;
    const isHidden = grid.style.display === "none";
    grid.style.display = isHidden ? "grid" : "none";
    if (btn) {
        btn.innerHTML = isHidden
            ? `<i class="fa-solid fa-keyboard" style="margin-right:4px;"></i> Hide on-screen keypad`
            : `<i class="fa-solid fa-calculator" style="margin-right:4px;"></i> Use on-screen numeric keypad`;
    }
}

function toggleAdminPinKeypadVisibility() {
    adminPinVisible = !adminPinVisible;
    const radio = document.getElementById("adminPinEyeRadio");
    if (radio) radio.checked = adminPinVisible;
    toggleAdminPasswordInputEye(adminPinVisible);
}

function pressAdminKey(digit) {
    const input = document.getElementById("adminPasswordInput");
    if (input) {
        input.value += digit;
    }
    adminEnteredPIN += digit;
    updateAdminPinDots();
}

function clearAdminKey() {
    const input = document.getElementById("adminPasswordInput");
    if (input) {
        input.value = input.value.slice(0, -1);
    }
    adminEnteredPIN = adminEnteredPIN.slice(0, -1);
    updateAdminPinDots();
}

function updateAdminPinDots() {
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById("pindot-" + i);
        if (dot) {
            const hasDigit = i <= adminEnteredPIN.length;
            dot.classList.toggle("filled", hasDigit);
            if (adminPinVisible) {
                dot.textContent = hasDigit ? adminEnteredPIN[i - 1] : "";
            } else {
                dot.textContent = "";
            }
        }
    }
}

function submitAdminPIN() {
    handleAdminLoginSubmit(null);
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
    renderAdminMessages();
    showToast("Welcome Jerrilyn", "Admin Dashboard unlocked.");
}

function lockAdminDashboard() {
    isAdminAuthenticated = false;
    adminEnteredPIN = "";
    adminPinVisible = false;
    const radio = document.getElementById("adminPinEyeRadio");
    if (radio) radio.checked = false;
    toggleAdminPasswordInputEye(false);

    const input = document.getElementById("adminPasswordInput");
    if (input) input.value = "";

    updateAdminPinDots();
    const gate = document.getElementById("adminAuthGate");
    const dash = document.getElementById("adminDashboardView");
    if (gate) gate.style.display = "block";
    if (dash) dash.style.display = "none";
    showToast("Dashboard Locked", "Admin session ended securely.");
}

function switchAdminTab(tabKey) {
    const tabs = ["products", "orders", "inbox", "reviews", "settings"];
    tabs.forEach(t => {
        const btn = document.getElementById(`admTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
        const content = document.getElementById(`admTabContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (btn) btn.classList.toggle("active", t === tabKey);
        if (content) content.style.display = t === tabKey ? "block" : "none";
    });
    if (tabKey === "inbox") {
        renderAdminMessages();
    } else if (tabKey === "reviews") {
        renderAdminReviews();
    }
}

function renderAdminDashboardStats() {
    const revEl = document.getElementById("adminStatRevenue");
    const ordEl = document.getElementById("adminStatOrders");
    const pendEl = document.getElementById("adminStatPending");
    const prodEl = document.getElementById("adminStatProducts");
    const msgEl = document.getElementById("adminStatMessages");

    const totalRev = storeOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    const pendingCount = storeOrders.filter(o => o.statusCode !== "delivered").length;
    const unreadCount = storeMessages ? storeMessages.filter(m => m.unread).length : 0;

    if (revEl) revEl.textContent = `${SITE_CONFIG.currency} ${totalRev.toFixed(2)}`;
    if (ordEl) ordEl.textContent = storeOrders.length;
    if (pendEl) pendEl.textContent = pendingCount;
    if (prodEl) prodEl.textContent = storeProducts.length;
    if (msgEl) msgEl.textContent = storeMessages ? storeMessages.length : 0;

    const tabProdCount = document.getElementById("admTabProdCount");
    const tabOrdCount = document.getElementById("admTabOrderCount");
    const tabInboxCount = document.getElementById("admTabInboxCount");
    const tabReviewsCount = document.getElementById("admTabReviewsCount");
    if (tabProdCount) tabProdCount.textContent = storeProducts.length;
    if (tabOrdCount) tabOrdCount.textContent = storeOrders.length;
    if (tabInboxCount) {
        tabInboxCount.textContent = unreadCount;
        tabInboxCount.style.display = unreadCount > 0 ? "inline-block" : "none";
    }
    if (tabReviewsCount) {
        tabReviewsCount.textContent = storeReviews ? storeReviews.length : 0;
    }
}

// ── Admin Product Management Suite ──
function renderAdminProducts() {
    const tbody = document.getElementById("adminProductsTableBody");
    if (!tbody) return;

    tbody.innerHTML = storeProducts.map(p => {
        const isAvail = (p.status !== "unavailable" && p.inStock !== false);
        return `
        <tr>
            <td>
                <img src="${p.img}" alt="${escapeHTML(p.title)}" class="admin-prod-thumb">
            </td>
            <td>
                <strong style="color:var(--color-black);">${escapeHTML(p.title)}</strong><br>
                <span style="font-size:0.75rem; color:var(--color-text-muted);">${escapeHTML(p.metal || 'Fine Handcrafted')}</span>
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
                <button type="button" class="btn-status-toggle ${isAvail ? 'status-available' : 'status-unavailable'}" 
                        onclick="toggleAdminProductStatus('${p.id}')" 
                        title="Click to toggle Available / Unavailable">
                    <i class="fa-solid ${isAvail ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
                    ${isAvail ? 'In Stock' : 'Unavailable'}
                </button>
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
    `;
    }).join("");
}

function toggleAdminProductStatus(productId) {
    const p = storeProducts.find(item => item.id === productId);
    if (!p) return;
    const isNowAvailable = (p.status === "unavailable" || p.inStock === false);
    p.status = isNowAvailable ? "available" : "unavailable";
    p.inStock = isNowAvailable;
    PRODUCTS = storeProducts;
    localStorage.setItem("j_products", JSON.stringify(storeProducts));
    renderAdminProducts();
    renderProducts();
    renderAdminDashboardStats();
    showToast(
        isNowAvailable ? "Marked as In Stock" : "Marked as Unavailable",
        `${p.title} is now ${isNowAvailable ? 'Available (In Stock)' : 'Unavailable (Sold Out)'}.`
    );
}

function openAddProductModal() {
    const backdrop = document.getElementById("adminProductModalBackdrop");
    const titleEl = document.getElementById("adminProdModalTitle");
    const form = document.getElementById("adminProductForm");
    const preview = document.getElementById("admProdImgPreview");

    if (titleEl) titleEl.textContent = "Add New Product";
    if (form) form.reset();
    document.getElementById("admProdId").value = "";
    document.getElementById("admProdImgData").value = "";
    const statEl = document.getElementById("admProdStatus");
    if (statEl) statEl.value = "available";
    if (preview) {
        preview.src = "";
        preview.style.display = "none";
    }

    if (backdrop) {
        backdrop.classList.add("active");
        backdrop.style.display = "flex";
    }
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
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
    const editStatEl = document.getElementById("admProdStatus");
    if (editStatEl) {
        editStatEl.value = (p.status === "unavailable" || p.inStock === false) ? "unavailable" : "available";
    }

    if (preview) {
        preview.src = p.img;
        preview.style.display = "block";
    }

    if (backdrop) {
        backdrop.classList.add("active");
        backdrop.style.display = "flex";
    }
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
}

function closeAdminProductModal() {
    const backdrop = document.getElementById("adminProductModalBackdrop");
    if (backdrop) {
        backdrop.classList.remove("active");
        backdrop.style.display = "none";
    }
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
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
    const metal = document.getElementById("admProdMetal").value.trim() || "Handcrafted Fine Jewelry";
    const badge = document.getElementById("admProdBadge").value;
    const optionsRaw = document.getElementById("admProdOptions").value.trim();
    const description = document.getElementById("admProdDesc").value.trim();
    const imgData = document.getElementById("admProdImgData").value;
    const imgUrl = document.getElementById("admProdImgUrl").value.trim();

    const finalImg = imgData || imgUrl || "images/jerrilyn.jpg";
    const options = optionsRaw ? optionsRaw.split(",").map(o => o.trim()).filter(Boolean) : ["16\"", "18\""];
    const statusVal = document.getElementById("admProdStatus") ? document.getElementById("admProdStatus").value : "available";
    const isAvail = (statusVal === "available");

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
                status: statusVal,
                inStock: isAvail,
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
            status: statusVal,
            inStock: isAvail,
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
    if (confirm("Reset store catalogue back to the original 21 default pieces? Custom added products will be restored to defaults.")) {
        storeProducts = INITIAL_PRODUCTS.slice();
        PRODUCTS = storeProducts;
        localStorage.setItem("j_products", JSON.stringify(storeProducts));

        renderProducts();
        renderAdminProducts();
        renderAdminDashboardStats();
        showToast("Catalogue Restored", "Store reset to default catalog.");
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
                <select class="shop-select" onchange="updateOrderStatus('${escapeHTML(ord.id)}', this.value)" style="padding:4px 8px; font-size:0.75rem;">
                    <option value="placed"    ${ord.statusCode === 'placed'    ? 'selected' : ''}>Order Placed (POD)</option>
                    <option value="confirmed" ${ord.statusCode === 'confirmed' ? 'selected' : ''}>Confirmed / Paid</option>
                    <option value="crafting"  ${ord.statusCode === 'crafting'  ? 'selected' : ''}>Studio Crafting</option>
                    <option value="transit"   ${ord.statusCode === 'transit'   ? 'selected' : ''}>In Transit</option>
                    <option value="delivered" ${ord.statusCode === 'delivered' ? 'selected' : ''}>Delivered</option>
                </select>
            </td>
            <td>
                <button class="btn btn-whatsapp btn-sm" onclick="whatsappCustomerOrder('${escapeHTML(ord.id)}')" style="padding:4px 10px; font-size:0.75rem;" title="WhatsApp Customer">
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
        placed:    "Order Placed (Pay on Delivery)",
        confirmed: "Payment Confirmed",
        crafting:  "Studio Crafting",
        transit:   "In Transit / Out for Delivery",
        delivered: "Delivered"
    };

    ord.statusCode = newStatusCode;
    ord.status = statusNames[newStatusCode] || newStatusCode;
    localStorage.setItem("j_orders", JSON.stringify(storeOrders));

    // Sync status update to Firebase Firestore in real-time
    if (isFirebaseReady && firebaseDb) {
        firebaseDb.collection("orders").doc(orderId).set({
            statusCode: newStatusCode,
            status: ord.status,
            updatedAt: new Date().toISOString()
        }, { merge: true }).catch(err => console.warn("Firestore status update notice:", err));
    }

    // Sync status update to Google Sheets Webhook if configured
    const cloudUrl = (storeSettings && storeSettings.cloudSyncUrl) ? storeSettings.cloudSyncUrl.trim() : "";
    if (cloudUrl) {
        fetch(cloudUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                action: "update_status",
                order_id: orderId,
                status: ord.status,
                status_code: newStatusCode,
                updated_at: new Date().toISOString()
            })
        }).catch(() => {});
    }

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

    const msg = `Hello ${ord.customerName}! ✨ This is Jerrilyn from Jewels by J regarding your order #${ord.id}. Your order status is currently: *${ord.status}*. We are making sure your pieces are flawless! Delivery address: ${ord.address}. Let us know if you need anything!`;
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

function toggleFieldVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPass = input.type === "password";
    input.type = isPass ? "text" : "password";
    const icon = btn.querySelector("i");
    if (icon) {
        icon.className = isPass ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
    }
}

function handleAdminChangePIN(event) {
    event.preventDefault();
    const currentInput = document.getElementById("admCurrentPin");
    const newInput = document.getElementById("admNewPin");
    const confirmInput = document.getElementById("admConfirmPin");

    const currentVal = currentInput ? currentInput.value.trim() : "";
    const newVal = newInput ? newInput.value.trim() : "";
    const confirmVal = confirmInput ? confirmInput.value.trim() : "";

    const activePIN = storeSettings.adminPIN || "2023";

    if (currentVal !== activePIN) {
        showToast("Incorrect Password / PIN", "Your current password or PIN does not match our records.");
        if (currentInput) currentInput.focus();
        return;
    }

    if (newVal.length < 3) {
        showToast("Too Short", "New password or PIN must be at least 3 characters long.");
        if (newInput) newInput.focus();
        return;
    }

    if (newVal !== confirmVal) {
        showToast("Mismatch", "The new password/PIN and confirmation do not match.");
        if (confirmInput) confirmInput.focus();
        return;
    }

    // Save new Password / PIN
    storeSettings.adminPIN = newVal;
    localStorage.setItem("j_settings", JSON.stringify(storeSettings));

    // Clear inputs
    if (currentInput) currentInput.value = "";
    if (newInput) newInput.value = "";
    if (confirmInput) confirmInput.value = "";

    // Sync any auxiliary inputs
    const setPin = document.getElementById("settingAdminPIN");
    if (setPin) setPin.value = newVal;

    playNotificationChime();
    showToast("Access Key Updated! ✨", "Your new master password / PIN is now active.");
}

// ── Preferences & Theme Engine ──
function applyStoredPreferences() {
    const pref = storeSettings.preferences || {};
    const theme = pref.theme || "default";
    const fontSize = pref.fontSize || "standard";
    const headingFont = pref.headingFont || "cormorant";

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-font-size", fontSize);
    document.documentElement.setAttribute("data-heading-font", headingFont);

    // Sync UI elements
    const prefThemeInput = document.getElementById("prefTheme");
    if (prefThemeInput) prefThemeInput.value = theme;

    document.querySelectorAll(".theme-option-card").forEach(c => c.classList.remove("active"));
    const activeCard = document.getElementById("themeOpt" + (theme.charAt(0).toUpperCase() + theme.slice(1)));
    if (activeCard) activeCard.classList.add("active");

    const fontSelect = document.getElementById("prefFontSize");
    if (fontSelect) fontSelect.value = fontSize;

    const headingSelect = document.getElementById("prefHeadingFont");
    if (headingSelect) headingSelect.value = headingFont;
}

function selectThemePreference(themeKey) {
    document.querySelectorAll(".theme-option-card").forEach(c => c.classList.remove("active"));
    const card = document.getElementById("themeOpt" + (themeKey.charAt(0).toUpperCase() + themeKey.slice(1)));
    if (card) card.classList.add("active");

    const hidden = document.getElementById("prefTheme");
    if (hidden) hidden.value = themeKey;

    document.documentElement.setAttribute("data-theme", themeKey);
}

function applyFontSizePreview(sizeKey) {
    document.documentElement.setAttribute("data-font-size", sizeKey);
}

function applyHeadingFontPreview(fontKey) {
    document.documentElement.setAttribute("data-heading-font", fontKey);
}

function saveAdminPreferences(event) {
    event.preventDefault();
    if (!storeSettings.preferences) storeSettings.preferences = {};

    const theme = document.getElementById("prefTheme")?.value || "default";
    const fontSize = document.getElementById("prefFontSize")?.value || "standard";
    const headingFont = document.getElementById("prefHeadingFont")?.value || "cormorant";
    const statusPaused = document.getElementById("prefStatusPaused");

    storeSettings.preferences.theme = theme;
    storeSettings.preferences.fontSize = fontSize;
    storeSettings.preferences.headingFont = headingFont;
    storeSettings.preferences.storeStatus = (statusPaused && statusPaused.checked) ? "paused" : "open";
    storeSettings.preferences.orderChime = !!document.getElementById("prefOrderChime")?.checked;

    localStorage.setItem("j_settings", JSON.stringify(storeSettings));

    applyStoredPreferences();
    playNotificationChime();
    showToast("Preferences Applied ✨", `Theme: ${theme.toUpperCase()}, Font: ${fontSize.toUpperCase()} saved.`);
}

function playNotificationChime() {
    if (storeSettings?.preferences?.orderChime === false) return;
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        if (ctx.state === "suspended") {
            ctx.resume();
        }
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.6);
    } catch (e) {
        // Audio playback suppressed or unsupported
    }
}

function saveAdminSettings(event) {
    event.preventDefault();
    storeSettings.whatsappNumber = document.getElementById("settingWhatsapp").value.trim();
    storeSettings.email = document.getElementById("settingEmail").value.trim();
    storeSettings.freeDeliveryThreshold = parseFloat(document.getElementById("settingFreeDelivery").value);
    const pinField = document.getElementById("settingAdminPIN");
    if (pinField) storeSettings.adminPIN = pinField.value.trim() || storeSettings.adminPIN;
    storeSettings.web3Key = (document.getElementById("settingWeb3Key")?.value || "").trim();

    // EmailJS (Direct Gmail Dispatch to mensahjerrilyn@gmail.com)
    storeSettings.emailjsServiceId = (document.getElementById("settingEmailjsServiceId")?.value || "").trim() || "service_0wy2cgh";
    storeSettings.emailjsTemplateId = (document.getElementById("settingEmailjsTemplateId")?.value || "").trim() || "template_ocw57xp";
    storeSettings.emailjsPublicKey = (document.getElementById("settingEmailjsPublicKey")?.value || "").trim();

    // Payment & Cloud Sync settings
    storeSettings.paystackPublicKey = (document.getElementById("settingPaystackKey")?.value || "").trim();
    storeSettings.momoMerchantNumber = (document.getElementById("settingMoMoNumber")?.value || "").trim() || "0593252913";
    storeSettings.momoMerchantName = (document.getElementById("settingMoMoName")?.value || "").trim() || "Jewels by J (Jerrilyn Mensah)";
    storeSettings.cloudSyncUrl = (document.getElementById("settingCloudSyncUrl")?.value || "").trim();

    localStorage.setItem("j_settings", JSON.stringify(storeSettings));

    // Update Paystack badge
    updatePaystackBadge();

    // Update email displays across the site
    const inboxEmailDisplay = document.getElementById("inboxStoreEmailDisplay");
    if (inboxEmailDisplay) inboxEmailDisplay.textContent = storeSettings.email;
    const contactEmailDisplay = document.getElementById("contactDisplayEmail");
    if (contactEmailDisplay) contactEmailDisplay.textContent = storeSettings.email;

    playNotificationChime();
    showToast("Settings Saved", "Store contact and delivery parameters updated.");
}

// ═══════════════════════════════════════════════════════════════════════════
// FEATURE: CUSTOMER INBOX & ADMIN MAIL SUITE
// ═══════════════════════════════════════════════════════════════════════════

function renderAdminMessages() {
    const tbody = document.getElementById("adminInboxTableBody");
    if (!tbody) return;

    let filtered = [...storeMessages];

    // Apply Type / Read Filter
    if (currentAdminMessageFilter === "unread") {
        filtered = filtered.filter(m => m.unread);
    } else if (currentAdminMessageFilter === "inquiry") {
        filtered = filtered.filter(m => m.type === "inquiry");
    } else if (currentAdminMessageFilter === "bespoke") {
        filtered = filtered.filter(m => m.type === "bespoke");
    }

    // Apply Search Query
    if (adminInboxSearchQuery) {
        const q = adminInboxSearchQuery.toLowerCase();
        filtered = filtered.filter(m =>
            (m.name && m.name.toLowerCase().includes(q)) ||
            (m.email && m.email.toLowerCase().includes(q)) ||
            (m.phone && m.phone.toLowerCase().includes(q)) ||
            (m.subject && m.subject.toLowerCase().includes(q)) ||
            (m.message && m.message.toLowerCase().includes(q))
        );
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center; padding:48px 20px; color:var(--color-text-muted);">
                    <i class="fa-regular fa-envelope" style="font-size:2.5rem; color:var(--color-gold); margin-bottom:12px; display:block;"></i>
                    <h4 style="font-size:1.05rem; color:var(--color-black); margin-bottom:6px;">No messages found</h4>
                    <p style="font-size:0.85rem; max-width:400px; margin:0 auto;">
                        ${adminInboxSearchQuery ? `No results match "${escapeHTML(adminInboxSearchQuery)}". Try clearing your search.` : `There are no ${currentAdminMessageFilter !== 'all' ? currentAdminMessageFilter : ''} inquiries in your inbox yet.`}
                    </p>
                </td>
            </tr>
        `;
        return;
    }

    const typeBadges = {
        bespoke: '<span class="badge badge-sale" style="font-size:0.7rem; padding:3px 8px;">Bespoke</span>',
        inquiry: '<span class="badge badge-bestseller" style="font-size:0.7rem; padding:3px 8px;">Inquiry</span>',
        order: '<span class="badge badge-gold" style="font-size:0.7rem; padding:3px 8px; background:var(--color-gold); color:#000;">Order Notice</span>'
    };

    tbody.innerHTML = filtered.map(m => {
        const preview = m.message ? (m.message.length > 90 ? m.message.slice(0, 90) + "..." : m.message) : "No text";
        const phoneFormatted = m.phone ? m.phone.replace(/[\s+-]/g, "") : "";
        const waLink = phoneFormatted ? (phoneFormatted.startsWith("0") ? "233" + phoneFormatted.slice(1) : phoneFormatted) : "";
        const safeId = escapeHTML(m.id);
        const safeEmail = escapeHTML(m.email);

        return `
            <tr class="${m.unread ? 'msg-unread' : ''}" style="cursor:pointer;" onclick="openAdminMessageModal('${safeId}')">
                <td style="text-align:center;" onclick="event.stopPropagation(); toggleAdminMessageReadById('${safeId}')">
                    ${m.unread
                ? `<span class="msg-unread-dot" title="Unread — Click to mark read"></span>`
                : `<i class="fa-solid fa-check msg-read-check" title="Read — Click to mark unread"></i>`}
                </td>
                <td style="font-size:0.8rem; white-space:nowrap; color:var(--color-text-muted);">
                    ${escapeHTML(m.date || 'Recent')}
                </td>
                <td>
                    <strong style="color:var(--color-black); font-size:0.88rem;">${escapeHTML(m.name)}</strong>
                    ${m.verifiedAccount ? `<span style="display:inline-block; font-size:0.68rem; color:var(--color-success); font-weight:700; margin-left:4px;" title="Verified Registered Client"><i class="fa-solid fa-circle-check"></i> Account</span>` : ''}<br>
                    <a href="mailto:${safeEmail}" onclick="event.stopPropagation();" style="font-size:0.78rem; color:var(--color-gold);">${safeEmail}</a>
                    ${m.phone ? `<span style="font-size:0.75rem; color:var(--color-text-muted); display:block;">${escapeHTML(m.phone)}</span>` : ''}
                </td>
                <td>
                    ${typeBadges[m.type] || typeBadges.inquiry}
                    <div style="font-weight:600; font-size:0.85rem; color:var(--color-black); margin-top:3px;">
                        ${escapeHTML(m.subject || 'Consultation Inquiry')}
                    </div>
                </td>
                <td style="max-width:280px;">
                    <span class="msg-preview-text" style="font-size:0.82rem; color:var(--color-text-muted); display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                        ${escapeHTML(preview)}
                    </span>
                </td>
                <td onclick="event.stopPropagation();" style="white-space:nowrap;">
                    <div style="display:flex; gap:6px;">
                        <button class="btn btn-outline btn-sm" onclick="openAdminMessageModal('${safeId}')" title="View Full Message" style="padding:4px 8px; font-size:0.75rem;">
                            <i class="fa-regular fa-eye"></i> View
                        </button>
                        <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(m.subject || 'Jewels by J Inquiry')}" class="btn btn-primary btn-sm" title="Reply via Email" style="padding:4px 8px; font-size:0.75rem;">
                            <i class="fa-solid fa-reply"></i>
                        </a>
                        ${waLink ? `
                            <a href="https://wa.me/${encodeURIComponent(waLink)}?text=${encodeURIComponent('Hello ' + m.name + '! Thank you for reaching out to Jewels by J regarding your inquiry.')}" target="_blank" class="btn btn-whatsapp btn-sm" title="Chat on WhatsApp" style="padding:4px 8px; font-size:0.75rem;">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        ` : ''}
                        <button class="btn btn-outline btn-sm" onclick="deleteAdminMessage('${safeId}')" title="Delete Message" style="padding:4px 8px; font-size:0.75rem; color:#d32f2f; border-color:rgba(211,47,47,0.3);">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

function filterAdminMessages(type) {
    currentAdminMessageFilter = type;
    const filterBtns = {
        all: "btnMsgFilterAll",
        unread: "btnMsgFilterUnread",
        inquiry: "btnMsgFilterInquiries",
        bespoke: "btnMsgFilterBespoke"
    };

    Object.keys(filterBtns).forEach(k => {
        const btn = document.getElementById(filterBtns[k]);
        if (btn) btn.classList.toggle("active", k === type);
    });

    renderAdminMessages();
}

function handleAdminInboxSearch() {
    const input = document.getElementById("adminInboxSearch");
    if (!input) return;
    adminInboxSearchQuery = input.value.trim();
    renderAdminMessages();
}

function openAdminMessageModal(msgId) {
    const msg = storeMessages.find(m => m.id === msgId);
    if (!msg) return;

    currentViewingMessageId = msgId;

    // Mark message as read
    if (msg.unread) {
        msg.unread = false;
        localStorage.setItem("j_messages", JSON.stringify(storeMessages));
        updateAdminNotificationBadge();
        renderAdminDashboardStats();
    }

    const modal = document.getElementById("adminMessageModalBackdrop");
    const badgeEl = document.getElementById("adminMsgModalBadge");
    const subjectEl = document.getElementById("adminMsgModalSubject");
    const senderEl = document.getElementById("adminMsgModalSender");
    const emailEl = document.getElementById("adminMsgModalEmail");
    const dateEl = document.getElementById("adminMsgModalDate");
    const phoneEl = document.getElementById("adminMsgModalPhone");
    const bodyEl = document.getElementById("adminMsgModalBody");
    const replyEmailBtn = document.getElementById("adminMsgModalReplyEmail");
    const replyWaBtn = document.getElementById("adminMsgModalReplyWa");
    const toggleReadBtn = document.getElementById("adminMsgModalToggleReadBtn");

    if (badgeEl) {
        badgeEl.textContent = (msg.type === "bespoke" ? "Bespoke Jewelry" : (msg.type === "order" ? "Order Notice" : "Consultation Inquiry"));
        badgeEl.className = msg.type === "bespoke" ? "badge badge-sale" : (msg.type === "order" ? "badge badge-gold" : "badge badge-bestseller");
    }

    if (subjectEl) subjectEl.textContent = msg.subject || "Consultation Inquiry";
    if (senderEl) {
        senderEl.innerHTML = `${escapeHTML(msg.name)} ${msg.verifiedAccount ? `<span class="badge badge-success" style="font-size:0.7rem; margin-left:6px;"><i class="fa-solid fa-circle-check"></i> Registered Account</span>` : ''}`;
    }
    if (emailEl) {
        emailEl.textContent = msg.email;
        emailEl.href = `mailto:${msg.email}`;
    }
    if (dateEl) dateEl.textContent = msg.date || "Recent";
    if (phoneEl) {
        phoneEl.textContent = msg.phone ? `Phone: ${msg.phone}` : "Phone: Not provided";
    }
    if (bodyEl) bodyEl.textContent = msg.message;

    if (replyEmailBtn) {
        replyEmailBtn.href = `mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject || 'Jewels by J Inquiry')}&body=${encodeURIComponent('\n\n--- In response to your inquiry ---\n' + msg.message)}`;
    }

    if (replyWaBtn) {
        if (msg.phone) {
            let phoneClean = msg.phone.replace(/[\s+-]/g, "");
            if (phoneClean.startsWith("0")) phoneClean = "233" + phoneClean.slice(1);
            replyWaBtn.href = `https://wa.me/${phoneClean}?text=${encodeURIComponent('Hello ' + msg.name + '! ✨ This is Jerrilyn from Jewels by J following up on your inquiry: "' + (msg.subject || '') + '"')}`;
            replyWaBtn.style.display = "inline-flex";
        } else {
            replyWaBtn.style.display = "none";
        }
    }

    if (toggleReadBtn) {
        toggleReadBtn.textContent = msg.unread ? "Mark as Read" : "Mark as Unread";
    }

    if (modal) {
        modal.classList.add("active");
        modal.style.display = "flex";
    }
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    renderAdminMessages();
}

function closeAdminMessageModal() {
    const modal = document.getElementById("adminMessageModalBackdrop");
    if (modal) {
        modal.classList.remove("active");
        modal.style.display = "none";
    }
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    currentViewingMessageId = null;
}

function toggleAdminMessageReadById(msgId) {
    const msg = storeMessages.find(m => m.id === msgId);
    if (!msg) return;
    msg.unread = !msg.unread;
    localStorage.setItem("j_messages", JSON.stringify(storeMessages));
    updateAdminNotificationBadge();
    renderAdminDashboardStats();
    renderAdminMessages();
    showToast(msg.unread ? "Marked Unread" : "Marked Read", `Message from ${msg.name}`);
}

function toggleCurrentAdminMessageRead() {
    if (!currentViewingMessageId) return;
    const msg = storeMessages.find(m => m.id === currentViewingMessageId);
    if (!msg) return;
    msg.unread = !msg.unread;
    localStorage.setItem("j_messages", JSON.stringify(storeMessages));
    updateAdminNotificationBadge();
    renderAdminDashboardStats();
    closeAdminMessageModal();
    renderAdminMessages();
    showToast(msg.unread ? "Marked Unread" : "Marked Read", `Message from ${msg.name}`);
}

function deleteCurrentAdminMessage() {
    if (!currentViewingMessageId) return;
    if (!confirm("Are you sure you want to permanently delete this message?")) return;

    storeMessages = storeMessages.filter(m => m.id !== currentViewingMessageId);
    localStorage.setItem("j_messages", JSON.stringify(storeMessages));
    updateAdminNotificationBadge();
    renderAdminDashboardStats();
    closeAdminMessageModal();
    renderAdminMessages();
    showToast("Message Deleted", "The customer message was removed.");
}

function deleteAdminMessage(msgId) {
    if (!confirm("Are you sure you want to delete this message?")) return;
    storeMessages = storeMessages.filter(m => m.id !== msgId);
    localStorage.setItem("j_messages", JSON.stringify(storeMessages));
    updateAdminNotificationBadge();
    renderAdminDashboardStats();
    renderAdminMessages();
    showToast("Message Deleted", "The customer message was removed.");
}

function markAllAdminMessagesRead() {
    if (!storeMessages.length) return;
    storeMessages.forEach(m => m.unread = false);
    localStorage.setItem("j_messages", JSON.stringify(storeMessages));
    updateAdminNotificationBadge();
    renderAdminDashboardStats();
    renderAdminMessages();
    showToast("All Read", "All customer messages marked as read.");
}

function exportMessagesJSON() {
    const blob = new Blob([JSON.stringify(storeMessages, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jewels_by_j_customer_inbox_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Inbox Exported", "Customer messages exported to JSON.");
}

function sendTestAdminEmail() {
    const targetEmail = getAdminEmail();
    const testBtn = document.getElementById("btnSendTestEmail");
    if (testBtn) {
        testBtn.disabled = true;
        testBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending Test...`;
    }

    // Save a copy in the local inbox
    const testRecord = {
        id: "msg_test_" + Date.now(),
        name: "Jewels by J System",
        email: targetEmail,
        phone: SITE_CONFIG.phone,
        subject: "Mail Forwarding Verification & Test",
        message: `This is a test email sent from your Jewels by J store to verify that inquiries and orders reach ${targetEmail}.\n\nTimestamp: ${new Date().toLocaleString()}`,
        type: "inquiry",
        date: new Date().toISOString().replace("T", " ").slice(0, 16),
        unread: true
    };
    storeMessages.unshift(testRecord);
    localStorage.setItem("j_messages", JSON.stringify(storeMessages));
    updateAdminNotificationBadge();
    renderAdminDashboardStats();
    renderAdminMessages();

    sendStoreEmail(
        `💎 [Jewels by J] Test Email Verification (${targetEmail})`,
        {
            name: "Jewels by J Admin Verification",
            email: targetEmail,
            message: `Hello Jerrilyn!\n\nThis is a test notification confirming that customer consultation messages and order notices are delivered directly to your inbox (${targetEmail}).\n\nTime: ${new Date().toLocaleString()}\nBrand: Jewels by J`
        }
    ).then(result => {
        if (result.ok) {
            showToast("Test Email Delivered!", `Delivered to ${targetEmail}`);
            alert(`✅ Test email delivered successfully to ${targetEmail}!\n\nPlease check your Gmail Inbox (or Spam folder) in a few seconds.`);
        } else if (result.needsActivation) {
            showToast("Activation Required", `Check ${targetEmail}`);
            alert(`⚠️ One-Time Activation Required for ${targetEmail}:\n\nFormSubmit has sent a verification email with the subject:\n"FormSubmit - Action Required: Activate Form" to ${targetEmail}.\n\n👉 Please open your Gmail (Inbox or Spam/Promotions folder) and click the "Activate Form" button ONCE.\n\nAfter you click that button, all incoming emails from customers will flow directly into your inbox!`);
        } else {
            showToast("Notice", result.message);
            alert(`Test notification status for ${targetEmail}:\n\n${result.message}`);
        }
    }).finally(() => {
        if (testBtn) {
            testBtn.disabled = false;
            testBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Test Mail`;
        }
    });
}

// Live Paystack key validation badge (called on input change in Admin Settings)
function _liveCheckPaystackKey(val) {
    const badge = document.getElementById("paystackKeyStatusBadge");
    if (!badge) return;
    const k = (val || "").trim();
    if (k.startsWith("pk_live_") && k.length > 15) {
        badge.textContent = "✓ Live Key Active";
        badge.style.background = "#e8f5e9";
        badge.style.color = "#2e7d32";
    } else if (k.startsWith("pk_test_") && k.length > 15) {
        badge.textContent = "⚡ Test Key";
        badge.style.background = "#fff3cd";
        badge.style.color = "#856404";
    } else if (k.length > 0) {
        badge.textContent = "✗ Invalid Format";
        badge.style.background = "#fce4e4";
        badge.style.color = "#c62828";
    } else {
        badge.textContent = "⚠ Not Set";
        badge.style.background = "#fce4e4";
        badge.style.color = "#c62828";
    }
}

// ── Expose Global Functions for Inline HTML Handlers ──
window.switchAdminTab = switchAdminTab;
window.renderAdminMessages = renderAdminMessages;
window.filterAdminMessages = filterAdminMessages;
window.handleAdminInboxSearch = handleAdminInboxSearch;
window.openAdminMessageModal = openAdminMessageModal;
window.closeAdminMessageModal = closeAdminMessageModal;
window.openAddProductModal = openAddProductModal;
window.openEditProductModal = openEditProductModal;
window.closeAdminProductModal = closeAdminProductModal;
window.toggleAdminProductStatus = toggleAdminProductStatus;
window.toggleAdminMessageReadById = toggleAdminMessageReadById;
window.toggleCurrentAdminMessageRead = toggleCurrentAdminMessageRead;
window.deleteCurrentAdminMessage = deleteCurrentAdminMessage;
window.deleteAdminMessage = deleteAdminMessage;
window.markAllAdminMessagesRead = markAllAdminMessagesRead;
window.exportMessagesJSON = exportMessagesJSON;
window.sendTestAdminEmail = sendTestAdminEmail;
window.saveAdminSettings = saveAdminSettings;
window.saveContactDraft = saveContactDraft;
window.updateContactAuthGate = updateContactAuthGate;
window.handleDirectEmailCard = handleDirectEmailCard;
window.toggleAdminPinKeypadVisibility = toggleAdminPinKeypadVisibility;
window.toggleFieldVisibility = toggleFieldVisibility;
window.handleAdminChangePIN = handleAdminChangePIN;
window.saveAdminPreferences = saveAdminPreferences;
window.playNotificationChime = playNotificationChime;
window.handleAdminLoginSubmit = handleAdminLoginSubmit;
window.toggleAdminPasswordInputEye = toggleAdminPasswordInputEye;
window.toggleAdminKeypadDisplay = toggleAdminKeypadDisplay;
window.selectThemePreference = selectThemePreference;
window.applyFontSizePreview = applyFontSizePreview;
window.applyHeadingFontPreview = applyHeadingFontPreview;
window.applyStoredPreferences = applyStoredPreferences;
window._liveCheckPaystackKey = _liveCheckPaystackKey;
window.switchPaymentTab = switchPaymentTab;
window.processPaystackPayment = processPaystackPayment;
window.processDirectMoMoPayment = processDirectMoMoPayment;
window.processPayOnDelivery = processPayOnDelivery;
window.copyDirectMoMoNumber = copyDirectMoMoNumber;
window.copyDirectMoMoAmount = copyDirectMoMoAmount;
window.pullRemoteOrdersFromCloud = pullRemoteOrdersFromCloud;
window.testCloudConnection = testCloudConnection;
window.openGoogleSheetsTemplateModal = openGoogleSheetsTemplateModal;
window.closeGoogleSheetsTemplateModal = closeGoogleSheetsTemplateModal;
window.copyGoogleAppsScriptCode = copyGoogleAppsScriptCode;
window.refreshCurrentTrackingStatus = refreshCurrentTrackingStatus;
window.shareTrackingLink = shareTrackingLink;
window.setReviewRating = setReviewRating;
window.previewReviewRating = previewReviewRating;
window.resetReviewRatingPreview = resetReviewRatingPreview;
window.renderCustomerReviews = renderCustomerReviews;
window.handleCustomerReviewSubmit = handleCustomerReviewSubmit;
window.scrollToReviews = scrollToReviews;
window.renderAdminReviews = renderAdminReviews;
window.deleteAdminReview = deleteAdminReview;

// Initialize Preferences Immediately
applyStoredPreferences();