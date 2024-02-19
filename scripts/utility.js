function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function changeSeatColor(event) {
    const selectedSeat = event.target;
    if (!selectedSeat.classList.contains('selected')) {
        selectedSeat.classList.add('selected');
        const seatCountElement = document.getElementById('seat-count');
        const currentSeatCount = parseInt(seatCountElement.textContent);
        seatCountElement.textContent = currentSeatCount - 1; 
    } else {
        selectedSeat.classList.remove('selected');
        const seatCountElement = document.getElementById('seat-count');
        const currentSeatCount = parseInt(seatCountElement.textContent);
        seatCountElement.textContent = currentSeatCount + 1;
    }
}


function increaseBookingCount() {
    const bookingCountElement = document.getElementById('booking-count');
    const currentBookingCount = parseInt(bookingCountElement.textContent);
    bookingCountElement.textContent = currentBookingCount + 1;
}


function addToBookingCollection(event) {
    const selectedSeat = event.target.textContent;
    const titleContainer = document.getElementById('title-container');
    const seatElement = document.createElement('p');
    seatElement.textContent = selectedSeat;
    titleContainer.appendChild(seatElement);
}


function updateTotalPrice() {
    const seatBookingCount = parseInt(document.getElementById('booking-count').textContent);
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = seatBookingCount * 550;
    totalPriceElement.textContent = totalPrice;
}


function updateGrandTotal() {
    const totalPrice = parseInt(document.getElementById('total-price').textContent);
    const grandTotalElement = document.getElementById('grand-total');
    grandTotalElement.textContent = totalPrice;
}


function checkPhoneNumberInput(event) {
    const phoneNumberInput = event.target.value.trim();
    const nextButton = document.getElementById('next-button');
    if (phoneNumberInput.length > 0) {
        nextButton.disabled = false; 
    } else {
        nextButton.disabled = true; 
    }
}


document.getElementById('next-button').addEventListener('click', function() {
    
});


document.querySelectorAll('.sit-plan').forEach(seat => {
    seat.addEventListener('click', function(event) {
        changeSeatColor(event);
        increaseBookingCount();
        addToBookingCollection(event);
        updateTotalPrice();
        updateGrandTotal();
    });
});


document.getElementById('phone-number-input').addEventListener('input', checkPhoneNumberInput);
