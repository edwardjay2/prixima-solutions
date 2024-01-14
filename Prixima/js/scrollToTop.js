// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    showToTopButton();
};

function showToTopButton() {
    var toTopButton = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 
    20) {
        toTopButton.style.display = "block";
    }else {
        toTopButton.style.display = "none";
    }
}

// when the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For safari 
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}