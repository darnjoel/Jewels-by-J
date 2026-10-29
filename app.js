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

// ── Complete Product Catalog ──
const PRODUCTS = [
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

// ── Application State ──
let currentCategory = "all";
let currentSort = "featured";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("j_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("j_wishlist") || "[]");
let quickViewProduct = null;
let quickViewSelectedOption = null;
let quickViewQuantity = 1;

// ── Initialise Application ──
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initMobileDrawer();
    initShop();
    initClientCam();
    initCartDrawer();
    initQuickViewModal();
    initLightbox();
    initContactForm();
    initNewsletterForm();
    updateCartUI();
    updateWishlistUI();

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

    // Update active nav links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.dataset.section === sectionId);
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

    if (hamburger) hamburger.addEventListener("click", openMobileDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeMobileDrawer);
    if (backdrop) backdrop.addEventListener("click", closeMobileDrawer);
}

function openMobileDrawer() {
    document.getElementById("mobileNavDrawer")?.classList.add("active");
    document.getElementById("drawerBackdrop")?.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileDrawer() {
    document.getElementById("mobileNavDrawer")?.classList.remove("active");
    document.getElementById("drawerBackdrop")?.classList.remove("active");
    document.body.style.overflow = "";
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
        const matchesCategory = (currentCategory === "all") || (p.category === currentCategory);
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
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 2.2rem; color: var(--color-gold); margin-bottom: 12px; display: block;"></i>
                <h3 style="font-size: 1.3rem; margin-bottom: 6px;">No jewelry pieces found</h3>
                <p style="font-size: 0.9rem;">Try adjusting your search terms or selecting another category.</p>
                <button class="btn btn-outline btn-sm" style="margin-top: 18px;" onclick="setCategory('all')">View All Pieces</button>
            </div>
        `;
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
    message += `Name:\n`;
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