const allseat = document.getElementsByClassName('btns');
let allSeatArray = Array.from(allseat);
let count = 0;

allSeatArray.forEach((seat) => {
    seat.addEventListener('click', (e) => {
        count += 1; // Increment count
        let seatLeft = document.getElementById('seat-leaft').innerText - 1;

        // Add green background color
        e.target.classList.add("bg-green-800");
        // Disable the button
        e.target.disabled = true;
         if(count>4){
            
         }
         let seatName = seat.innerText;
        //  console.log(seatName);
        //  make a innet Html
        let selectedSeat = document.getElementById('selected-seat');
        let newDiv = document.createElement('div');
    
        newDiv.innerHTML =  `<ul class = 'flex text-green-600 font-bold justify-evenly pl-11 gap-11'>
                               <li>${seatName}</li>
                               <li>Economy</li>
                               <li class="seat-price">550tK</li>
                              </ul>`;
        selectedSeat.appendChild(newDiv);
       
        //calculate seat price and update the Total Price
        let totalSeatPrice = count * 550;
        
        // Update the seat left and count values
        setInnerText('seat-leaft', seatLeft);
        setInnerText('seat-count', count);
        setInnerText('total-price',totalSeatPrice);
    });
});

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
