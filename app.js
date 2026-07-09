// Jewelry by JApp JavaScript

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Replace these three values with your actual EmailJS credentials.
// Sign up free at https://www.emailjs.com
//
//  1. Go to EmailJS dashboard → Account → API Keys → copy "Public Key"
//  2. Create an Email Service (Gmail recommended) → copy the Service ID
//  3. Create an Email Template → copy the Template ID
//
// Your template should use these variables:
//   {{from_name}}    — customer's name
//   {{from_email}}   — customer's email (set as Reply-To in EmailJS template)
//   {{subject}}      — inquiry subject / product name
//   {{message}}      — customer's message
//   {{to_name}}      — shop owner name (e.g. "Aurelia Concierge")

const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // e.g. 'abc123XYZ'
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // e.g. 'service_aurelia'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';     // e.g. 'template_inquiry'

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
const DEFAULT_PHONE = '+233 50 059 4879'; // Replace with real WhatsApp number (digits only)

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Initialise EmailJS SDK (loaded via CDN in HTML — see below)
    emailjs.init(EMAILJS_PUBLIC_KEY);

    setupSideDrawer();
    setupGalleryFilters();
    setupLightbox();
    setupWhatsAppButtons();
    setupEmailForm();
    setupScrollSpy();
});


/* ==========================================================================
   Side Drawer Navigation
   ========================================================================== */

function setupSideDrawer() {
    // Create overlay backdrop
    const backdrop = document.createElement('div');
    backdrop.id = 'drawerBackdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);

    // Create the drawer itself
    const drawer = document.createElement('nav');
    drawer.id = 'sideDrawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Site navigation');
    drawer.innerHTML = `
        <div class="drawer-header">
            <span class="drawer-logo">AURELIA</span>
            <button class="drawer-close-btn" id="drawerCloseBtn" aria-label="Close menu">
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
        <ul class="drawer-links">
            <li><a href="#home"     class="drawer-link">Home</a></li>
            <li><a href="#featured" class="drawer-link">Featured</a></li>
            <li><a href="#gallery"  class="drawer-link">Gallery</a></li>
            <li><a href="#about"    class="drawer-link">About</a></li>
            <li><a href="#contact"  class="drawer-link">Contact</a></li>
        </ul>
        <div class="drawer-footer">
            <button class="btn btn-primary btn-block" onclick="openSellerPortal(); closeDrawer();">
                Seller Portal
            </button>
        </div>
    `;
    document.body.appendChild(drawer);

    // Hamburger button (replace existing nav-menu toggle)
    const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

    // Close triggers
    document.getElementById('drawerCloseBtn').addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    // Close on nav link click
    drawer.querySelectorAll('.drawer-link').forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
            // Smooth scroll handled by CSS scroll-behavior: smooth
        });
    });

    // ESC key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
}

function openDrawer() {
    const drawer = document.getElementById('sideDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    const hamburger = document.getElementById('hamburger');

    drawer.classList.add('open');
    backdrop.classList.add('visible');
    document.body.classList.add('drawer-lock'); // prevent body scroll
    if (hamburger) hamburger.classList.add('active');
    drawer.querySelector('.drawer-close-btn').focus();
}

function closeDrawer() {
    const drawer = document.getElementById('sideDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    const hamburger = document.getElementById('hamburger');

    drawer.classList.remove('open');
    backdrop.classList.remove('visible');
    document.body.classList.remove('drawer-lock');
    if (hamburger) hamburger.classList.remove('active');
}


/* ==========================================================================
   WhatsApp Concierge Integrations
   ========================================================================== */

function setupWhatsAppButtons() {
    document.querySelectorAll('.wa-inquire-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            openWhatsAppForProduct(btn.getAttribute('data-product'));
        });
    });

    document.querySelectorAll('.wa-direct-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            openWhatsAppForProduct(btn.getAttribute('data-product'));
        });
    });
}

function openWhatsAppForProduct(productName) {
    const text = `Hi Aurelia Concierge, I am visiting your website and would like to inquire about the details and availability of the "${productName}".`;
    window.open(`https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
}


/* ==========================================================================
   Gallery Filtering & Lightbox
   ========================================================================== */

function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => { item.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

function setupLightbox() {
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const closeBtn = document.getElementById('lightboxClose');

    document.querySelectorAll('.view-large-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            lightboxImg.src = btn.getAttribute('data-src');
            lightboxTitle.textContent = btn.getAttribute('data-title');
            lightboxDesc.textContent = btn.getAttribute('data-desc');

            lightbox.classList.add('active');
        });
    });

    const closeLightbox = () => lightbox.classList.remove('active');
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
}


/* ==========================================================================
   Contact Form — EmailJS Integration
   ========================================================================== */

function setupEmailForm() {
    const form = document.getElementById('customerContactForm');
    if (!form) return;

    // Pre-fill form when "Email Inquiry" clicked on product cards
    document.querySelectorAll('.email-inquire-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.getAttribute('data-product');
            const select = document.getElementById('custSubject');
            const messageArea = document.getElementById('custMessage');

            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            if (select) select.value = product;
            if (messageArea) {
                messageArea.value = `Hello Aurelia Team,\n\nI am writing to request additional details (sizing, custom settings, showroom viewings) regarding the "${product}".`;
                messageArea.focus();
            }
        });
    });

    // Form submission → EmailJS
    form.addEventListener('submit', async e => {
        e.preventDefault();

        const name = document.getElementById('custName').value.trim();
        const email = document.getElementById('custEmail').value.trim();
        const subject = document.getElementById('custSubject').value;
        const message = document.getElementById('custMessage').value.trim();
        const submitBtn = form.querySelector('button[type="submit"]');

        if (!name || !email || !subject || !message) {
            showToast('Missing Fields', 'Please fill in all fields before sending.');
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Template parameters — must match your EmailJS template variable names
        const templateParams = {
            from_name: name,
            from_email: email,   // set this as Reply-To in your EmailJS template
            subject: subject,
            message: message,
            to_name: 'Aurelia Concierge',
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

            form.reset();
            showToast('Message Sent', 'Your inquiry has been received. We\'ll be in touch soon.');
        } catch (err) {
            console.error('EmailJS error:', err);
            showToast('Send Failed', 'Something went wrong. Please try WhatsApp or try again.');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}


/* ==========================================================================
   Seller Portal — kept for demo inbox viewing
   (Real replies now happen directly from the owner's email inbox via EmailJS)
   ========================================================================== */

const STORAGE_KEY = 'aurelia_emails';
const MOCK_EMAILS = [
    {
        id: 'mock_1',
        senderName: 'Charlotte Vance',
        senderEmail: 'charlotte.vance@example.com',
        subject: 'Custom Design Inquiry',
        message: 'Hello!\n\nI am looking to design a custom wedding band for my fiancé. I absolutely love the Aurelia Solitaire Ring, but would prefer a platinum setting with a slightly thinner band. Do you offer bespoke design consultations?\n\nBest regards,\nCharlotte',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        status: 'unread',
        replies: []
    },
    {
        id: 'mock_2',
        senderName: 'Arthur Pendleton',
        senderEmail: 'arthur.p@domain.com',
        subject: 'Elysian Emerald Pendant',
        message: 'Greetings,\n\nI am interested in purchasing the Elysian Emerald Pendant as a gift for an anniversary. Could you please confirm if it comes with a GIA certificate?\n\nThank you,\nArthur Pendleton',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
        status: 'read',
        replies: [
            {
                sender: 'Aurelia Concierge',
                content: 'Dear Mr. Pendleton,\n\nThank you for your interest. Yes, all our gemstones come with full GIA certification. This Colombian Emerald displays exceptional clarity.\n\nPlease let us know if you\'d like us to reserve it for you.\n\nWarmly,\nAurelia Concierge',
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
            }
        ]
    }
];

function initPortalEmails() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_EMAILS));
    }
    updateBadgeCount();
}

function getEmails() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveEmails(emails) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emails));
    updateBadgeCount();
    renderInboxList();
}

function updateBadgeCount() {
    const unreadCount = getEmails().filter(e => e.status === 'unread').length;
    const badge = document.getElementById('inboxBadge');
    if (!badge) return;
    badge.textContent = unreadCount;
    badge.classList.toggle('active', unreadCount > 0);
}

function resetEmailData() {
    if (confirm('Reset the portal inbox to default demo data?')) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_EMAILS));
        updateBadgeCount();
        renderInboxList();
        document.getElementById('messageViewer').classList.add('hidden');
        document.querySelector('.empty-workspace-state').classList.remove('hidden');
        showToast('Inbox Reset', 'Portal inbox restored to demo data.');
    }
}

function openSellerPortal() {
    initPortalEmails();
    const modal = document.getElementById('sellerPortalModal');
    modal.classList.add('active');
    renderInboxList();
    setupReplies();
}

function closeSellerPortal() {
    document.getElementById('sellerPortalModal').classList.remove('active');
}

document.addEventListener('keydown', e => {
    const modal = document.getElementById('sellerPortalModal');
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeSellerPortal();
});

function renderInboxList() {
    const emails = getEmails();
    const inboxList = document.getElementById('inboxList');
    if (!inboxList) return;

    if (emails.length === 0) {
        inboxList.innerHTML = '<li class="empty-inbox">No inquiries found</li>';
        return;
    }

    inboxList.innerHTML = '';
    emails.forEach(email => {
        const item = document.createElement('li');
        item.className = `inbox-item ${email.status === 'unread' ? 'unread' : ''}`;
        item.setAttribute('data-id', email.id);

        const timeStr = new Date(email.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        item.innerHTML = `
            <div class="inbox-item-header">
                <h5>${escapeHTML(email.senderName)}</h5>
                <span class="time">${timeStr}</span>
            </div>
            <div class="subj">${escapeHTML(email.subject)}</div>
            <div class="snippet">${escapeHTML(email.message)}</div>
        `;

        item.addEventListener('click', () => {
            document.querySelectorAll('.inbox-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            selectEmail(email.id);
        });

        inboxList.appendChild(item);
    });
}

function selectEmail(id) {
    const database = getEmails();
    const emailIndex = database.findIndex(e => e.id === id);
    if (emailIndex === -1) return;

    const email = database[emailIndex];

    if (email.status === 'unread') {
        database[emailIndex].status = 'read';
        saveEmails(database);
        const item = document.querySelector(`.inbox-item[data-id="${id}"]`);
        if (item) item.classList.remove('unread');
    }

    document.querySelector('.empty-workspace-state').classList.add('hidden');
    document.getElementById('messageViewer').classList.remove('hidden');

    document.getElementById('viewSubject').textContent = email.subject;
    document.getElementById('viewSenderName').textContent = email.senderName;
    document.getElementById('viewSenderEmail').textContent = email.senderEmail;
    document.getElementById('viewTimestamp').textContent = new Date(email.timestamp).toLocaleString();
    document.getElementById('viewBody').textContent = email.message;
    document.getElementById('replyTargetId').value = email.id;

    const badge = document.getElementById('viewStatus');
    badge.textContent = email.status === 'replied' ? 'Replied' : 'Pending';
    badge.className = `status-badge ${email.status === 'replied' ? 'bg-green' : 'bg-gold'}`;

    renderReplyThread(email);
}

function renderReplyThread(email) {
    const threadSection = document.getElementById('threadReplies');
    const log = document.getElementById('repliesLog');

    if (email.replies && email.replies.length > 0) {
        threadSection.classList.remove('hidden');
        log.innerHTML = '';
        email.replies.forEach(reply => {
            const div = document.createElement('div');
            div.className = 'reply-item';
            div.innerHTML = `
                <div class="reply-item-header">
                    <span class="sender">${escapeHTML(reply.sender)}</span>
                    <span>${new Date(reply.timestamp).toLocaleString()}</span>
                </div>
                <div class="reply-item-body">${escapeHTML(reply.content)}</div>
            `;
            log.appendChild(div);
        });
    } else {
        threadSection.classList.add('hidden');
        log.innerHTML = '';
    }
}

function setupReplies() {
    const form = document.getElementById('sellerReplyForm');
    if (!form || form.dataset.bound) return;
    form.dataset.bound = 'true'; // prevent duplicate listeners

    form.addEventListener('submit', e => {
        e.preventDefault();

        const id = document.getElementById('replyTargetId').value;
        const content = document.getElementById('replyContent').value.trim();
        if (!content) return;

        const database = getEmails();
        const emailIndex = database.findIndex(e => e.id === id);
        if (emailIndex === -1) return;

        database[emailIndex].replies.push({
            sender: 'Aurelia Concierge',
            content,
            timestamp: new Date().toISOString()
        });
        database[emailIndex].status = 'replied';

        saveEmails(database);
        document.getElementById('replyContent').value = '';
        selectEmail(id);
        showToast('Reply Logged', `Response saved for ${database[emailIndex].senderName}.`);
    });
}


/* ==========================================================================
   Scroll Spy
   ========================================================================== */

function setupScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.pageYOffset + 150;

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.clientHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
}


/* ==========================================================================
   Toast
   ========================================================================== */

function showToast(title, message) {
    const toast = document.getElementById('toastAlert');
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 4000);
}


/* ==========================================================================
   Utilities
   ========================================================================== */

function escapeHTML(str) {
    return String(str).replace(/[&<>'"]/g, tag => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag]));
}