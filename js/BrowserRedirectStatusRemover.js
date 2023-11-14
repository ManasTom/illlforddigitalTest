document.addEventListener('DOMContentLoaded', function () {
    // Modify link on hover and click for all links and buttons
    document.querySelectorAll('a, button').forEach(function (element) {
        var originalText = element.innerText || element.textContent;
        var href = element.getAttribute('data-href') || element.getAttribute('href');

        if (href && href.endsWith('.html')) {
            // Remove .html extension on hover and click
            element.addEventListener('mouseover', function () {
                element.setAttribute('data-href', href); // Store original href in data-href
                element.removeAttribute('href'); // Remove href attribute temporarily
                element.style.cursor = 'pointer'; // Change cursor on hover
            });

            element.addEventListener('mouseout', function () {
                element.setAttribute('href', element.getAttribute('data-href'));
                element.style.cursor = ''; // Reset cursor when not hovering
            });

            element.addEventListener('click', function () {
                window.location.href = element.getAttribute('data-href');
            });
        }
    });
});
