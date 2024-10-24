//Get references to the DOM elements:

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');


//TASK 1 - Add Event Listener for Product Selection:

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('change',updateTotalPrice);
