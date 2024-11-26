const allseat = document.getElementsByClassName("seat-btn");
let allSeatArray = Array.from(allseat);
let count = 0;
let phoneEntered = false; // Global flag for phone number validation
let seatSelected = false; // Global flag for seat selection
const nextButton = document.getElementById("next-btn"); // Reference to Next button

let totalSeatPrice = 0; //global variable make
let discountPrice = 0;//global variable make
let grandTotal = 0;//global variable make
// Event listener for seat buttons
allSeatArray.forEach((seat) => {
  seat.addEventListener("click", (e) => {
    // Check if the user has already selected 4 seats
    if (count >= 4) {
      alert("You cannot select or purchase more than 4 seats.");
      return; // Stop further execution
    }

    count += 1; // Increment count

    if (count === 4) {
      showElement("apply-btn");
    }

    seatSelected = true; // At least one seat selected

    let seatLeft = document.getElementById("seat-leaft").innerText - 1;

    // Add green background color and disable the button
    e.target.classList.add("bg-green-600");
    e.target.disabled = true;

    let seatName = seat.innerText;

    // Create inner HTML for selected seat
    let selectedSeat = document.getElementById("selected-seat");
    let newDiv = document.createElement("div");

    newDiv.innerHTML = `<ul class='flex text-green-600 font-bold justify-evenly pl-11 gap-11'>
                            <li>${seatName}</li>
                            <li>Economy</li>
                            <li class="seat-price">550 tk</li>
                        </ul>`;
    selectedSeat.appendChild(newDiv);

    // Calculate seat price and update the total price
    totalSeatPrice = count * 550; // Update the global variable
    let grandTotal = totalSeatPrice;

    // Update values in the UI
    setInnerText("seat-leaft", seatLeft);
    setInnerText("seat-count", count);
    setInnerText("total-price", totalSeatPrice);
    setInnerText("grand-total", grandTotal);

    // Check if all conditions are met
    checkConditions();
  });
});

// Event listener for phone number input
const phoneInput = document.getElementById("phone-num");
phoneInput.addEventListener("input", () => {
  phoneEntered = phoneInput.value.trim() !== ""; // Check if phone input is not empty
  checkConditions(); // Recheck conditions whenever phone input changes
});

// Function to check conditions
function checkConditions() {
  if (seatSelected && phoneEntered) {
    nextButton.classList.remove("hidden"); // Show the "Next" button
  } else {
    nextButton.classList.add("hidden"); // Keep it hidden otherwise
  }
}

// Function to set inner text for a specific element
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// Function to get value from an input section
function getValue(id) {
  let inputSection = document.getElementById(id);
  let value = inputSection.value;
  return value;
}

// Remove hidden class
function showElement(id) {
  document.getElementById(id).classList.remove("hidden");
}
//add hidden class in id
function hiddenElement(id){
    document.getElementById(id).classList.add("hidden");
}














// Select the input and button elements
const couponCode = document.getElementById("coupon-code");
const applyButton = document.getElementById("apply-btn");
let discountCode = "";

// Add a click event listener to the button
applyButton.addEventListener("click", () => {
  // Get the value of the input box
  const inputValue = couponCode.value;
  if (inputValue === "NEW15") {
    showElement('discount-price-section');
    let discountPrice = totalSeatPrice * (15 / 100); // Now totalSeatPrice is accessible
    setInnerText('discount-price',discountPrice);
    let grandTotal2 = totalSeatPrice - discountPrice;
    console.log(grandTotal2);
    setInnerText('grand-total',grandTotal2);
    hiddenElement('coupon-section');
    console.log(discountPrice);
  }
  else if(inputValue == "Couple20"){
    showElement('discount-price-section');
    let discountPrice = totalSeatPrice * (20/ 100); // Now totalSeatPrice is accessible
    setInnerText('discount-price',discountPrice);
    let grandTotal2 = totalSeatPrice - discountPrice;
    console.log(grandTotal2);
    setInnerText('grand-total',grandTotal2);
    hiddenElement('coupon-section');
    console.log(discountPrice);
  }
  else{
    alert('Please Enter Valid Coupon');
  }
});


