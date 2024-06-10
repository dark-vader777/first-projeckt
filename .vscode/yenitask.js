const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.onclick = function () {
        removeActiveClasses();
        card.classList.add('active');
    };
});
function removeActiveClasses() {
    cards.forEach(function (card) {
        card.classList.remove('active');
    });
}