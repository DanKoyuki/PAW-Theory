document.addEventListener("DOMContentLoaded", function () {
  const priceInput = document.getElementById("price");
  const amountSelect = document.getElementById("amount");
  const discountInput = document.getElementById("discount");
  const totalCostElement = document.getElementById("total-cost");

  // Calculate the total cost when any of the relevant fields change
  const calculateTotalCost = () => {
    const price = parseFloat(priceInput.value) || 0;
    const amount = parseInt(amountSelect.value) || 0;
    const discount = parseFloat(discountInput.value) || 0;
    
    const totalCost = price * amount - (price * amount * (discount / 100));

    // Display the total cost
    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
  };

  // Add event listeners to update the total cost when fields change
  priceInput.addEventListener("input", calculateTotalCost);
  amountSelect.addEventListener("input", calculateTotalCost);
  discountInput.addEventListener("input", calculateTotalCost);

  // Initial calculation
  calculateTotalCost();

  const reservationModal = document.getElementById("reservationModal");
  const closeModal = document.getElementById("closeModal");
  const reservationDetails = document.getElementById("reservationDetails");

  // Show the modal
  const openReservationModal = () => {
    reservationModal.style.display = "block";
  };

  // Close the modal
  const closeReservationModal = () => {
    reservationModal.style.display = "none";
  };

  const reserveButton = document.querySelector("button[type='submit']");
  reserveButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Generate and display reservation details
    const name = document.getElementById("name").value;
    const destination = document.getElementById("destination").value;
    const price = parseFloat(priceInput.value) || 0;
    const amount = parseInt(amountSelect.value) || 0;
    const discount = parseFloat(discountInput.value) || 0;
    const totalCost = price * amount - (price * amount * (discount / 100));

    const reservationText = `
      <p>Name: ${name}</p>
      <p>Destination: ${destination}</p>
      <p>Price per Ticket: $${price.toFixed(2)}</p>
      <p>Amount: ${amount}</p>
      <p>Discount: ${discount}%</p>
      <p>Total Cost: $${totalCost.toFixed(2)}</p>
    `;

    reservationDetails.innerHTML = reservationText;

    // Show the modal
    openReservationModal();
  });

  // Add a click event listener to the "Submit" button inside the modal
  const submitReservationButton = document.getElementById("submitReservation");
  submitReservationButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    // Here, you can add code to handle the submission or any other action you want to perform.

    // Close the modal
    closeReservationModal();
  });

});
