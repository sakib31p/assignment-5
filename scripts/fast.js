
function play(){
   
    const homeSection = document.getElementById('home-section');
    homeSection.classList.add('hidden');
    // show the playground 
    const busSection = document.getElementById('bus-section');
    busSection.classList.remove('hidden');
    
}




const seatButton = document.querySelectorAll('.sit-plan');




const seatButtons = document.querySelectorAll('.sit-plan');


seatButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        button.classList.toggle('bg-[#1DD100]'); 
    });
});


const availableSeats = document.querySelectorAll('.sit-plan');


availableSeats.forEach(seat => {
    seat.addEventListener('click', function() {
        
        if (parseInt(document.getElementById('seat-count').textContent) > 0) {
            
            document.getElementById('seat-count').textContent = parseInt(document.getElementById('seat-count').textContent) - 1;
            
            document.getElementById('booking-count').textContent = parseInt(document.getElementById('booking-count').textContent) + 1;
            addToBookingCollection(seat.textContent)  
        }
       
    });
});

function addToBookingCollection(seat) {
    const bookingCollection = document.getElementById('booking-collection');
    const newSeat = document.createElement('li');
    newSeat.textContent = seat;
    bookingCollection.appendChild(newSeat);
}




function checkNextButtonAvailability() {
    const phoneInput = document.getElementById('phone-number').value;
    const bookingCount = parseInt(document.getElementById('booking-count').textContent);

    
    if (phoneInput.length > 0 && bookingCount > 0) {
        document.getElementById('next-button').disabled = false; 
    } else {
        document.getElementById('next-button').disabled = true;  
    }
}


document.getElementById('phone-number').addEventListener('input', checkNextButtonAvailability);


document.getElementById('next-button').addEventListener('click', function() {
    
});

function checkCouponAndEnableNext() {
    const couponInput = document.getElementById('coupon-input').value.trim();
    const totalSeats = parseInt(document.getElementById('seat-count').textContent);
    const seatBookingCount = parseInt(document.getElementById('booking-count').textContent);
    const couponDiscount = 0.15; 

    let totalPrice = 550 * seatBookingCount; 
    let grandTotal = totalPrice; 


    if (couponInput === 'NEW15') {
        totalPrice *= (1 - couponDiscount);
        grandTotal = totalPrice;
    }

    
    if (totalSeats > 0 && seatBookingCount > 0 && couponInput !== '') {
        document.getElementById('next-button').disabled = false; 
    } else {
        document.getElementById('next-button').disabled = true;  
    }

    
    document.getElementById('total-price').textContent = totalPrice;
    document.getElementById('grand-total').textContent = grandTotal;
}


document.getElementById('coupon-input').addEventListener('input', checkCouponAndEnableNext);


document.getElementById('next-button').addEventListener('click', function() {
    
});


function calculateBooking(){
    const seatCount = parseInt(document.getElementById('seat-count').innerHTML);
    const totalPrice = seatCount * 550;
    const grandTotal = seatCount * 550;
    
    document.getElementById('total-price').innerHTML = totalPrice;

    document.getElementById('grand-total').innerHTML = totalPrice;
} 



