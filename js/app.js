/*
 * Create a list that holds all of your cards
 */
 const cardList = document.getElementById('cardList');
 let cards = cardList.getElementsByClassName('fa');
 let frontCards = document.getElementsByClassName('card');
 const star1 = document.getElementById('star1');
 const star2 = document.getElementById('star2');
 const star3 = document.getElementById('star3');
 const restart = document.getElementsByClassName('fa fa-repeat');
 let interval;
 let seconds = 0, minuts = 0;
 let counter = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// converting cards from object to array

	/*frontCards = Array.from(frontCards);*/
frontCards = [...frontCards];

window.onload = newDeck();
// creating new deck with shuffled cards
function newDeck(){
	frontCards = shuffle(frontCards);
	for (let i = 0; i < frontCards.length; i++){
		cardList.innerHTML="";
		Array.prototype.forEach.call(frontCards, function(item){
			cardList.appendChild(item);
		});
		//removing classes from cards
		frontCards[i].classList.remove('open','show','match');	
	}


}

	

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



// variable for open cards
let openCard =[];

function openCards(){
	openCard.push(this);
	let leng = openCard.length;
		if(leng === 2){
			moves();
			
			if(openCard[0].innerHTML === openCard[1].innerHTML){
				match();
				allmatched();
			
			}else{
				notMatch();
			
			}
		}

}



//function for match elements
function match(){

	openCard[0].classList.add('match','open','show');
	openCard[1].classList.add('match','open','show');
	openCard = [];
	/*console.log("works")*/



}

//function for unmatched elements

function notMatch(){
	    openCard[0].classList.add("unmatched");
        openCard[1].classList.add("unmatched");
        disable();
        
setTimeout(function(){
        openCard[0].classList.remove("show", "open","unmatched");
        openCard[1].classList.remove("show", "open","unmatched");
        openCard = [];
        enable();
    },900);



}

let matchedCards = document.getElementsByClassName('match');

function allmatched(){
	if(matchedCards.length === 16){
		
		console.log("allmatched");
		winnerModal();
		clearInterval(interval);
	}

}

const star = document.getElementsByClassName('stars');
//modal function from https://www.w3schools.com/howto/howto_css_modals.asp


function winnerModal(){
// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

modal.classList.add('showModal');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('totalStar').innerHTML = "Stars : " + star[0].innerHTML;
document.getElementById('totalMove').innerHTML = "Moves : " + move.innerHTML;
document.getElementById('totalTime').innerHTML = "Time : " + time.innerHTML;

}

function disable(){
	frontCards.filter.call(frontCards, function(frontCard){
		frontCard.classList.add('disable');
	});
}

function enable(){
	frontCards.filter.call(frontCards, function(frontCard){
		frontCard.classList.remove('disable');
	});
}



//count moves
let move = document.querySelector('.moves');

function moves(){
	counter++;
	move.innerHTML = counter;
	if(counter === 1 ){
		timer();
	};
//star rating 
	if(counter > 12 && counter < 16){
		star1.remove();
	}else if (counter > 17){
		star2.remove();
	};
}

//time counting function


let time = document.querySelector('.time');

function timer(){
	interval = setInterval(function(){
		seconds++;
		if(seconds == 60){
			minuts++;
			seconds = 0; 
		}
		time.innerHTML = seconds+" seconds "+minuts+" minuts ";
		console.log(time);

	},1000);
}

//add css to cards to display
var displayCard = function (){
    this.classList.add("open");
    this.classList.add("show");
    this.classList.add('disable');
};

/*//restart function
function resetGame(){
	newDeck();
	//reset timer

const time = document.getElementsByClassName('time');
time.innerHTML = 0;
clearInterval(interval);

//reset moves

let move = document.getElementsByClassName('moves');
move.innerHTML = "0";


}

restart[0].addEventListener('click', resetGame);
*/



for (let frontCard of frontCards){
    frontCard.addEventListener("click", displayCard);
    frontCard.addEventListener("click", openCards);
/*    frontCard.addEventListener("click",congratulations);*/

};


