//Exercise 2: The Data Attribute Reader
const swatches = document.querySelectorAll('.swatch');
// Define a function that reads this.dataset.color
// and applies it as this.style.backgroundColor
// Then attach it to every swatch
function colorchange() {
    const color = this.dataset.color;
    this.style.backgroundColor = color;
}

swatches.forEach(function(swatch) {
    swatch.addEventListener('click', colorchange);
});