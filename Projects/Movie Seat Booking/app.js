const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const movieList = document.getElementById('movie');
let ticketPrice = parseInt(movieList.value);

const availableSeats = document.getElementById('seat-available');
const totalSelectedSeats = document.getElementById('seat-count');
const totalPrice = document.getElementById('total');

populateItemUI();

function setItemLS(selectedMovieIndex, selectedMoviePrice) {
    localStorage.setItem('selectedMovieIndex', selectedMovieIndex);
    localStorage.setItem('selectedMoviePrice', selectedMoviePrice);
}

function updateCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    const seatIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat);
    })
    localStorage.setItem('selectedSeatsIndex', JSON.stringify(seatIndex));

    totalSelectedSeats.textContent = selectedSeatsCount;
    totalPrice.textContent = ticketPrice * selectedSeatsCount;
    availableSeats.textContent = seats.length - selectedSeatsCount;
}

function populateItemUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeatsIndex'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const movieIndex = localStorage.getItem('selectedMovieIndex');
    if(movieIndex !== null){
        movieList.selectedIndex = movieIndex ;
    }
}

movieList.addEventListener('change', e => {
    ticketPrice = parseInt(e.target.value);

    setItemLS(e.target.selectedIndex, e.target.value);
    updateCount();
})

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateCount();
    }
})

updateCount();