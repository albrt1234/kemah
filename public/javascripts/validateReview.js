const form = document.querySelector('.reviewForm');
const feedback = form.querySelector('.rating-feedback');

form.addEventListener('submit', function (e) {
    const selected = form.querySelector('input[name="review[rating]"]:checked');

    let valid = true;

    // rating validation
    if (selected.value === "0") {
        feedback.classList.remove('d-none');
        valid = false;
    } else {
        feedback.classList.add('d-none');
    }

    // other form validation
    if (!form.checkValidity()) valid = false;

    if (!valid) e.preventDefault();

    form.classList.add('was-validated');
});