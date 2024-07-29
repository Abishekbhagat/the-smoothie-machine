// Smoothie class to manage smoothie details
class Smoothie {
    constructor(size, base, ingredients, extras) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.extras = extras;
    }

    // Method to get a description of the smoothie
    getDescription() {
        let description = `Your ${this.size} smoothie with ${this.base} base includes: ${this.ingredients.join(', ')}.`;
        if (this.extras.length > 0) {
            description += ` Extras: ${this.extras.join(', ')}.`;
        }
        return description;
    }
}

// Function to handle form submission
function handleOrder() {
    // Capture form values
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(input => input.value);
    const extras = [];
    if (document.getElementById('extra-sugar').checked) extras.push('Extra Sugar');
    if (document.getElementById('extra-ice').checked) extras.push('Extra Ice');

    // Create a new Smoothie object
    const smoothie = new Smoothie(size, base, ingredients, extras);

    // Display the smoothie description
    const resultDiv = document.getElementById('smoothie-result');
    resultDiv.textContent = smoothie.getDescription();
}

// Attach event listener to the order button
document.getElementById('order-button').addEventListener('click', handleOrder);
