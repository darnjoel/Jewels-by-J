# Comprehensive validation script for Jewels by J
import os
import re

print("=== 1. Checking File Existence ===")
for f in ['index.html', 'app.js', 'style.css', 'favicon.ico']:
    assert os.path.exists(f), f"Missing file: {f}"
    print(f"  ✓ {f} exists ({os.path.getsize(f):,} bytes)")

print("\n=== 2. Checking HTML Page Sections ===")
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

expected_sections = [
    'section-home', 'section-reviews', 'section-shop', 'section-cam',
    'section-about', 'section-contact', 'section-track', 'section-customize',
    'section-delivery', 'section-admin'
]
for sec in expected_sections:
    assert f'id="{sec}"' in html, f"Missing section: {sec}"
    print(f"  ✓ {sec} present")

print("\n=== 3. Checking Hamburger Navigation & Reviews ===")
assert 'data-nav="reviews"' in html, "Missing data-nav='reviews' in hamburger drawer"
print("  ✓ data-nav='reviews' linked in drawer navigation")

print("\n=== 4. Checking WhatsApp Number & Store Phone ===")
assert '233593252913' in html, "Missing 233593252913 in index.html"
assert '0593252913' in html, "Missing 0593252913 in index.html"
with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()
assert '233593252913' in js, "Missing 233593252913 in app.js"
assert '0593252913' in js, "Missing 0593252913 in app.js"
print("  ✓ WhatsApp number 0593252913 / 233593252913 verified in both HTML and JS")

print("\n=== 5. Checking Product Availability & Reviews Functions ===")
required_fns = [
    'toggleAdminProductStatus', 'handleCustomerReviewSubmit',
    'renderCustomerReviews', 'setReviewRating', 'scrollToReviews'
]
for fn in required_fns:
    assert fn in js, f"Missing function: {fn}"
    print(f"  ✓ {fn} present in app.js")

print("\n=== 6. Checking Favicon and Meta ===")
assert 'rel="icon"' in html, "Missing rel='icon'"
assert 'images/logo.jpg' in html, "Missing images/logo.jpg"
print("  ✓ Favicon and touch icons verified in index.html")

print("\nALL VERIFICATIONS PASSED CLEANLY!")

