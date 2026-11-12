with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

assert 'handleCustomerReviewSubmit' in js, "handleCustomerReviewSubmit missing"
assert 'renderCustomerReviews' in js, "renderCustomerReviews missing"
assert 'setReviewRating' in js, "setReviewRating missing"
assert 'INITIAL_REVIEWS' in js, "INITIAL_REVIEWS missing"
assert 'deleteAdminReview' in js, "deleteAdminReview missing"

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

assert 'customerReviewsSection' in html, "customerReviewsSection missing"
assert 'reviewAuthorName' in html, "reviewAuthorName missing"
assert 'reviewStarPicker' in html, "reviewStarPicker missing"
assert 'reviewTitleInput' in html, "reviewTitleInput missing"
assert 'reviewTextInput' in html, "reviewTextInput missing"
assert 'admTabBtnReviews' in html, "admTabBtnReviews missing"
assert 'adminReviewsTableBody' in html, "adminReviewsTableBody missing"

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

assert '.reviews-section' in css, "reviews-section missing"
assert '.review-form-card' in css, "review-form-card missing"
assert '.btn-submit-review' in css, "btn-submit-review missing"

print("All Customer Reviews components (HTML, CSS, JS, Admin) successfully verified!")

