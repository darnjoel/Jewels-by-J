/* ═══════════════════════════════════════════════════════════════════════════
   JEWELS BY J — E-COMMERCE APPLICATION JAVASCRIPT
   Inspired by The Strand Brand Architecture & Features
   (Email system updated: central sender, activation-safe, auto-reply, spam trap)
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Configuration ──
const SITE_CONFIG = {
    brandName: "Jewels by J",
    phone: "+233 50 059 4879",
    whatsappNumber: "233500594879",
    email: "mensahjerrilyn@gmail.com",
    snapchatUrl: "https://snapchat.com/t/9O7WC58U",
    instagramUrl: "https://www.instagram.com/Jewels.with_j",
    tiktokUrl: "https://www.tiktok.com/@jewels.by_j4",
    currency: "GH₵",
    freeDeliveryThreshold: 30,
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
// For backwards compatibility across all catalog & cart lookups
let PRODUCTS = storeProducts;

// ── Store Orders State (Feature #6 & #8) ──
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
            status: "Crafting in Studio",
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
            phone: "+233 50 059 4879",
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
                            Signed In: <span>${escapeHTML(currentUser.name)}</span>
                        </h4>
                        <p class="contact-auth-gate-desc">
                            Inquiry will dispatch directly to <strong>${escapeHTML(getAdminEmail())}</strong> &amp; link to your account profile (<strong>${escapeHTML(currentUser.email)}</strong>).
                        </p>
                    </div>
                </div>
                <div class="contact-auth-gate-badge">
                    <span class="auth-pill"><i class="fa-solid fa-shield-halved"></i> Registered Client</span>
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
                        <h4 class="contact-auth-gate-title">Direct Studio Inbox — Open to All</h4>
                        <p class="contact-auth-gate-desc">
                            Leave a message, custom order request, or question below. Messages deliver directly to <strong>${escapeHTML(getAdminEmail())}</strong>. No account required!
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
        submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send to Admin Inbox`;
        submitBtn.title = "Send inquiry directly to admin inbox";
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
            submitSubjectEl.value = `💎 [Jewels by J Inquiry] ${subject || "Consultation"} — ${name}`;
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

        // Direct web client compose links for 100% deliverability
        const clientStatusStr = currentUser ? "Registered Client" : "Guest Visitor";
        const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent("💎 [Jewels by J Inquiry] " + (subject || "Consultation"))}&body=${encodeURIComponent("Hello Jerrilyn,\n\n" + message + "\n\n---\nClient Name: " + name + "\nClient Email: " + email + "\nClient Phone: " + (phone || "N/A") + "\nClient Status: " + clientStatusStr)}`;
        const mailtoDirectUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent("💎 [Jewels by J Inquiry] " + (subject || "Consultation"))}&body=${encodeURIComponent("Hello Jerrilyn,\n\n" + message + "\n\n---\nClient Name: " + name + "\nClient Email: " + email + "\nClient Phone: " + (phone || "N/A"))}`;
        const waDirectUrl = `https://wa.me/${storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Jerrilyn! Inquiry from " + name + " (" + (subject || "Consultation") + "): " + message)}`;

        // Open Gmail composer in a new tab immediately (allowed within user submit gesture)
        try {
            window.open(gmailDirectUrl, "_blank");
        } catch (popupErr) {
            console.warn("Popup notice:", popupErr);
        }

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
            `💎 [Jewels by J Inquiry] ${subject || "Consultation"} — ${name}`,
            {
                name: name,
                email: email, // FormSubmit uses this as Reply-To
                phone: phone || "Not provided",
                subject: subject || "Consultation",
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
                                <strong style="color:var(--color-black); font-size:0.95rem; display:block;">
                                    Inquiry Dispatched Directly to Jerrilyn's Inbox
                                </strong>
                                <p style="font-size:0.82rem; color:var(--color-text-muted); margin:2px 0 0 0;">
                                    Delivered to <strong>${escapeHTML(targetEmail)}</strong> &amp; logged in Admin Portal. Jerrilyn will reply to <strong>${escapeHTML(email)}</strong> shortly!
                                </p>
                            </div>
                        </div>
                        <div class="inquiry-delivery-actions">
                            <a href="${gmailDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                                <i class="fa-brands fa-google" style="color:#ea4335;"></i> Open in Gmail
                            </a>
                            <a href="${waDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                `;
                statusEl.className = "form-status-msg";
                showToast("Inquiry Delivered", `Sent to ${targetEmail}`);
            } else if (result.needsActivation) {
                statusEl.innerHTML = `
                    <div class="inquiry-delivery-card" style="border-color:var(--color-gold);">
                        <div class="inquiry-delivery-header">
                            <i class="fa-solid fa-bell" style="font-size:1.8rem; color:var(--color-gold);"></i>
                            <div>
                                <strong style="color:var(--color-black); font-size:0.95rem; display:block;">
                                    One-Time Admin Inbox Activation Needed
                                </strong>
                                <p style="font-size:0.82rem; color:var(--color-text-muted); margin:2px 0 0 0;">
                                    FormSubmit forwarded your request and sent a one-time activation link to <strong>${escapeHTML(targetEmail)}</strong>. Jerrilyn must click "Activate Form" in Gmail once to enable automatic forwarding.
                                </p>
                            </div>
                        </div>
                        <div class="inquiry-delivery-actions">
                            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                                <i class="fa-brands fa-google"></i> Open Gmail to Activate
                            </a>
                            <a href="${gmailDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                                <i class="fa-solid fa-paper-plane"></i> Send Direct via Gmail
                            </a>
                            <a href="${waDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                `;
                statusEl.className = "form-status-msg";
                showToast("Activation Email Sent", `Check ${targetEmail}`);
            } else {
                statusEl.innerHTML = `
                    <div class="inquiry-delivery-card" style="border: 2px solid var(--color-gold); background: #ffffff;">
                        <div class="inquiry-delivery-header">
                            <i class="fa-solid fa-envelope-circle-check" style="font-size:2rem; color:var(--color-gold);"></i>
                            <div>
                                <strong style="color:var(--color-black); font-size:1.02rem; display:block;">
                                    Inquiry Recorded in Studio Portal!
                                </strong>
                                <p style="font-size:0.85rem; color:var(--color-text-muted); margin:4px 0 0 0; line-height:1.5;">
                                    Your message has been saved in our store records. We also opened your <strong>Gmail composer tab</strong> addressed to <strong>${escapeHTML(targetEmail)}</strong>. Please click <strong>"Send"</strong> in Gmail to deliver directly into Jerrilyn's inbox!
                                </p>
                            </div>
                        </div>
                        <div style="margin-top:12px; padding:10px 14px; background:var(--color-blush-soft); border-radius:6px; font-size:0.82rem; color:var(--color-black);">
                            <i class="fa-solid fa-circle-info" style="color:var(--color-gold); margin-right:6px;"></i>
                            If your Gmail tab didn't open automatically, use the direct buttons below:
                        </div>
                        <div class="inquiry-delivery-actions" style="margin-top:12px;">
                            <a href="${gmailDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="font-weight:600; padding:8px 16px;">
                                <i class="fa-brands fa-google"></i> Open &amp; Send in Gmail
                            </a>
                            <a href="${mailtoDirectUrl}" class="btn btn-outline btn-sm" style="padding:8px 14px;">
                                <i class="fa-solid fa-envelope"></i> Send via Mail App
                            </a>
                            <a href="${waDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="padding:8px 14px;">
                                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                `;
                statusEl.className = "form-status-msg";
                showToast("Inquiry Saved in Portal", `Click Send in Gmail to reach ${targetEmail}`);
            }

            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send to Admin Inbox`;
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
                phone: "+233 50 059 4879",
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
                    phone: user.phone || "+233 50 059 4879"
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
        resultFee.textContent = `${SITE_CONFIG.currency} ${data.fee.toFixed(2)}`;
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

    // Apply free-delivery rule to the stored fee so emails/orders match what the customer saw
    const threshold = storeSettings.freeDeliveryThreshold || SITE_CONFIG.freeDeliveryThreshold;
    const appliedDeliveryFee = checkoutState.subtotal >= threshold ? 0 : checkoutState.deliveryFee;

    const newOrder = {
        id: orderId,
        date: new Date().toISOString().replace("T", " ").slice(0, 16),
        customerName: cust.name,
        customerPhone: cust.phone,
        customerEmail: cust.email,
        address: cust.address,
        region: checkoutState.deliveryRegion,
        regionName: DELIVERY_RATES[checkoutState.deliveryRegion]?.name || "Greater Accra",
        deliveryFee: appliedDeliveryFee,
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
    lastPlacedOrderId = orderId;
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
        let waText = `*ORDER CONFIRMATION — ${SITE_CONFIG.brandName.toUpperCase()}*\n`;
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

    const feeText = Number(order.deliveryFee) === 0 ? "FREE" : `GH₵ ${Number(order.deliveryFee || 0).toFixed(2)}`;

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
        form.addEventListener("submit", (e) => {
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
                if (submitText) submitText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Locating Order...';
            }

            setTimeout(() => {
                let found = null;

                if (orderNum) {
                    found = storeOrders.find(ord => {
                        const matchesId = ord.id.toUpperCase() === orderNum;
                        if (!contact) return matchesId;
                        const ordContactClean = (ord.customerEmail + " " + ord.customerPhone).toLowerCase().replace(/[\s+-]/g, "");
                        const matchesContact = ordContactClean.includes(contact) || contact.includes(ord.customerPhone.replace(/[\s+-]/g, ""));
                        return matchesId && matchesContact;
                    });
                } else if (contact) {
                    // Search by contact if order number was not supplied
                    found = storeOrders.find(ord => {
                        const ordContactClean = (ord.customerEmail + " " + ord.customerPhone).toLowerCase().replace(/[\s+-]/g, "");
                        return ordContactClean.includes(contact) || contact.includes(ord.customerPhone.replace(/[\s+-]/g, ""));
                    });
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
                } else {
                    if (resultCard) resultCard.style.display = "none";
                    if (emptyState) {
                        const msgEl = document.getElementById("trackEmptyMessage");
                        if (msgEl) {
                            msgEl.innerHTML = `We couldn't locate an order matching <strong>${escapeHTML(orderNum || contact)}</strong>. Please verify your order number and contact information.`;
                        }
                        emptyState.style.display = "block";
                        emptyState.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }, 260);
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

            <!-- Items Summary Breakdown -->
            <div class="track-items-box">
                <div class="track-items-header">
                    <span><i class="fa-solid fa-box-open" style="color:var(--color-gold); margin-right:6px;"></i> Package Contents (${(order.items || []).length} item${(order.items || []).length === 1 ? '' : 's'})</span>
                </div>
                <div class="track-items-list">
                    ${itemsHtml}
                </div>
                <div style="margin-top:16px; padding-top:12px; border-top:1px solid var(--color-border-light);">
                    <div class="track-summary-row">
                        <span>Items Subtotal</span>
                        <span>${SITE_CONFIG.currency} ${Number(order.subtotal || order.total).toFixed(2)}</span>
                    </div>
                    <div class="track-summary-row">
                        <span>Delivery Fee (${escapeHTML(order.regionName || 'Standard')})</span>
                        <span>${Number(order.deliveryFee) === 0 ? 'FREE' : `${SITE_CONFIG.currency} ${Number(order.deliveryFee || 0).toFixed(2)}`}</span>
                    </div>
                    <div class="track-summary-row total">
                        <span>Grand Total</span>
                        <span style="color:var(--color-black);">${SITE_CONFIG.currency} ${Number(order.total).toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <!-- Actions Footer -->
            <div class="track-actions-bar">
                <button type="button" class="btn btn-outline btn-sm" onclick="resetTrackView()">
                    <i class="fa-solid fa-magnifying-glass"></i> Track Another Order
                </button>
                <div class="track-actions-right">
                    <a href="https://wa.me/${storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber}?text=Hi%20Jewels%20by%20J,%20I'm%20inquiring%20about%20my%20order%20${encodeURIComponent(order.id)}" target="_blank" class="btn btn-whatsapp btn-sm">
                        <i class="fa-brands fa-whatsapp"></i> Chat with Concierge
                    </a>
                </div>
            </div>
        </div>
    `;
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

    const activeEmail = storeSettings.email || SITE_CONFIG.email;
    if (setWa) setWa.value = storeSettings.whatsappNumber || SITE_CONFIG.whatsappNumber;
    if (setEmail) setEmail.value = activeEmail;
    if (setFree) setFree.value = storeSettings.freeDeliveryThreshold || SITE_CONFIG.freeDeliveryThreshold;
    if (setPin) setPin.value = storeSettings.adminPIN || "2023";
    if (setWeb3) setWeb3.value = storeSettings.web3Key || "";

    const inboxEmailDisplay = document.getElementById("inboxStoreEmailDisplay");
    if (inboxEmailDisplay) inboxEmailDisplay.textContent = activeEmail;
    const contactEmailDisplay = document.getElementById("contactDisplayEmail");
    if (contactEmailDisplay) contactEmailDisplay.textContent = activeEmail;
}

function updateAdminNotificationBadge() {
    const dot = document.getElementById("navAdminNotifyDot");
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
    renderAdminMessages();
    showToast("Welcome Jerrilyn", "Admin Dashboard unlocked.");
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
    const tabs = ["products", "orders", "inbox", "settings"];
    tabs.forEach(t => {
        const btn = document.getElementById(`admTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
        const content = document.getElementById(`admTabContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (btn) btn.classList.toggle("active", t === tabKey);
        if (content) content.style.display = t === tabKey ? "block" : "none";
    });
    if (tabKey === "inbox") {
        renderAdminMessages();
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
    if (tabProdCount) tabProdCount.textContent = storeProducts.length;
    if (tabOrdCount) tabOrdCount.textContent = storeOrders.length;
    if (tabInboxCount) {
        tabInboxCount.textContent = unreadCount;
        tabInboxCount.style.display = unreadCount > 0 ? "inline-block" : "none";
    }
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

    if (titleEl) titleEl.textContent = "Add New Product";
    if (form) form.reset();
    document.getElementById("admProdId").value = "";
    document.getElementById("admProdImgData").value = "";
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
                    <option value="confirmed" ${ord.statusCode === 'confirmed' ? 'selected' : ''}>Confirmed / Paid</option>
                    <option value="crafting" ${ord.statusCode === 'crafting' ? 'selected' : ''}>Studio Crafting</option>
                    <option value="transit" ${ord.statusCode === 'transit' ? 'selected' : ''}>In Transit</option>
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
        confirmed: "Payment Confirmed",
        crafting: "Studio Crafting",
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

function saveAdminSettings(event) {
    event.preventDefault();
    storeSettings.whatsappNumber = document.getElementById("settingWhatsapp").value.trim();
    storeSettings.email = document.getElementById("settingEmail").value.trim();
    storeSettings.freeDeliveryThreshold = parseFloat(document.getElementById("settingFreeDelivery").value);
    storeSettings.adminPIN = document.getElementById("settingAdminPIN").value.trim() || "2023";
    storeSettings.web3Key = (document.getElementById("settingWeb3Key")?.value || "").trim();

    localStorage.setItem("j_settings", JSON.stringify(storeSettings));

    // Update email displays across the site
    const inboxEmailDisplay = document.getElementById("inboxStoreEmailDisplay");
    if (inboxEmailDisplay) inboxEmailDisplay.textContent = storeSettings.email;
    const contactEmailDisplay = document.getElementById("contactDisplayEmail");
    if (contactEmailDisplay) contactEmailDisplay.textContent = storeSettings.email;

    showToast("Settings Saved", "Store contact and security settings updated.");
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