/*
 * Create a list that holds all of your cards
 */
 const cardList = document.getElementById('cardList');
 let cards = cardList.getElementsByClassName('fa');
 let frontCards = document.getElementsByClassName('card');


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

	frontCards = Array.from(frontCards);

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

newDeck();
	

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


 // adds css class to cards

/* function Cardclicked(){
for (let show of frontCards) {
show.addEventListener('click',function () {
	show.classList.add('open' , 'show');
   });

  };

}

Cardclicked();*/


// variable for open cards
const openCard =[];

function openCards(){
	openCard.push(this);
	const leng = openCard.length;
		if(leng==2){
			moveCount();
			if(openCard[0]===openCard[1]){
				match();
			}else{
				notMatch();
			}
		}

}



function match(){
	openCard[0] = classList.add('match');
	openCard[1] = classList.add('match');
	openCard[0] = classList.remove('open', 'show');
	openCard[1] = classList.remove('open', 'show');

}

function notMatch(){
	openCard[0] = classList.remove['open', 'show'];
	openCard[1] = classList.remove['open', 'show'];

}
