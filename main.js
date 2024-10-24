//TASK 1 - Get references to the DOM elements:

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');


//TASK 2 - Add Event Listener for Product Selection:

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('change',updateTotalPrice);

//TASK 3 - Calculate Total Price Dynamically:

function updateTotalPrice () {
    const productPrice = parseFloat(productSelector.value);
    // parseFloat converts the string value to a floating-point number
    const quantity = parseInt(quantityInput.value);
    // parseInt converts the string value to an integer
    const totalPrice = productPrice * quantity;
     // Calculate the total price by multiplying the product price by the quantity

    totalPriceElement.textContent = totalPrice.toFixed(2);
     // Update the total price displayed on the web page
}


//TASK 4 - Handle Order Submission

placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    // Get the text of the currently selected product from the dropdown
    const quantity = quantityInput.value;
    // Get the quantity entered by the user from the quantity input field
    const totalPrice = totalPriceElement.textContent;
    // Get the total price displayed on the webpage as a string
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});    // Update the order summary paragraph with the details of the order
