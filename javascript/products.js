document.addEventListener("DOMContentLoaded", function() {
    // Get the calculate button element by its ID
    const calculateButton = document.getElementById("calculateTotal");
    // Get the total display element by its ID
    const totalDisplay = document.getElementById("totalDisplay");

    // Add a click event listener to the calculate button
    calculateButton.addEventListener("click", function() {
        let total = 0; // Initialize the total variable
        // Get all the item elements by their class name
        const items = document.querySelectorAll(".item");

        // Iterate over each item element
        items.forEach(item => {
            // Get the price of the item and convert it to a float
            const price = parseFloat(item.querySelector(".price").textContent);
            // Get the quantity of the item and convert it to an integer
            const quantity = parseInt(item.querySelector(".quantity").value);
            // Calculate the total price for the item and add it to the total
            total += price * quantity;
        });

        // Update the total display element with the calculated total
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    });
});