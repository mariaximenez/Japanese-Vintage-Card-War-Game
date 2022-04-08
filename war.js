// //Create just 10 object cards. Then put them in array. Then go through a for loop of the cards. two arrays? My array and opponent array and have those cards battle each other. 
// //two objects- each object will have the suit, value, and image
// //store these objects in an array (current cards)
// //function that takes in two cards- card a and card b and comparaes value
// //if card a beats card b, console.log player 1 wins
// //if card a = card b, 

// // document.querySelector('.center').addEventListener("click",  function () {console.log(Hello);});



// // let opponentCards = document.querySelectorAll(".opponentCards")
// // console.log(opponentCards);
// // let myCards = document.querySelectorAll(".myCards");
// // console.log(myCards);
// // let cards = document.getElementByTagName(div);
// // console.log("cards");

// // function shuffle ()
// // this.opponentCards.sort((a,b) +> Math.random - .5)
// // console.log


// // function shuffle ()
// // this.myCards.sort((a,b) +> Math.random - .5)



// //button that has an array of cards for each player and removes the last card from each array as the current card (later)









let heart1 = {
    suit: 'heart',
    value: 1,
    image: hrt1.jpg
};
let heart2 = {
    suit: 'heart',
    value: 2,
    image: hrt2.jpg
};
let heart3 = {
    suit: 'heart',
    value: 3,
    image: hrt3.jpg
};
let heart4 = {
    suit: 'heart',
    value: 4,
    image: hrt4.jpg
};

let heart5 = {
    suit: 'heart',
    value: 5,
    image: hrt5.jpg
};

let heart6 = {
    suit: 'heart',
    value: 6,
    image: hrt6.jpg
};

let heart7 = {
    suit: 'heart',
    value: 7,
    image: hrt7.jpg
};

let heart8 = {
    suit: 'heart',
    value: 8,
    image: hrt8.jpg
};

let heart9 = {
    suit: 'heart',
    value: 9,
    image: hrt9.jpg
};

let heart10 = {
    suit: 'heart',
    value: 10,
    image: hrt10.jpg

};

let heart11 = {
    suit: 'heart',
    value: 11,
    image: hrt11.jpg

};
let heart12 = {
    suit: 'heart',
    value: 12,
    image: hrt12.jpg

};

let heart13 = {
    suit: 'heart',
    value: 13,
    image: hrt13.jpg

}

let spade1 = {
    suit: 'spade',
    value: 1,
    image: spd1.jpg
};
let spade2 = {
    suit: 'spade',
    value: 2,
    image: spd2.jpg
};
let spade3 = {
    suit: 'spade',
    value: 3,
    image: spd3.jpg
};
let spade4 = {
    suit: 'spade',
    value: 4,
    image: spd4.jpg
};

let spade5 = {
    suit: 'spade',
    value: 5,
    image: spd5.jpg
};

let spade6 = {
    suit: 'spade',
    value: 6,
    image: spd6.jpg
};

let spade7 = {
    suit: 'spade',
    value: 7,
    image: spd7.jpg
};

let spade8 = {
    suit: 'spade',
    value: 8,
    image: spd8.jpg
};

let spade9 = {
    suit: 'spade',
    value: 9,
    image: spd9.jpg
};

let spade10 = {
    suit: 'spade',
    value: 10,
    image: spd10.jpg

};

let spade11 = {
    suit: 'spade',
    value: 11,
    image: spd11.jpg

};
let spade12 = {
    suit: 'spade',
    value: 12,
    image: spd12.jpg

};

let spade13 = {
    suit: 'spade',
    value: 13,
    image: spd13.jpg

}


let user = 13;
let opponent = 13;



let myCards = [heart1.value, heart2.value, heart3.value, heart4.value, heart5.value, heart6.value, heart7.value, heart8.value, heart9.value, heart10.value, heart11.value, heart12.value, heart13.value];


let opponentCards = [spade1.value, spade2.value, spade3.value, spade4.value, spade5.value, spade6.value, spade7.value, spade8.value, spade9.value, spade10.value, spade11.value, spade12.value, spade13.value];

let myCardsImg = [heart1.image, heart2.image, heart3.image, heart4.image, heart5.image, heart6.image, heart7.image, heart8.image, heart9.image, heart10.image, heart11.image, heart12.image, heart13.image];

let opponentCardsImg = [spade1.image, spade2.image, spade3.image, spade4.image, spade5.image, spade6.image, spade7.image, spade8.image, spade9.image, spade10.image, spade11.image, spade12.image, spade13.image];

console.log(myCardsImg);
console.log(opponentCardsImg);



function playRound () { 
    
   for(let i=0; i< 13; i++) {
    let player1Index = Math.floor(Math.random()*12)
    let player2Index = Math.floor(Math.random()*12)
      if (myCards[player1Index] > opponentCards[player2Index]) {
    user + 1;
    opponent -1;
    console.log(myCardsImg[player1Index]);
    console.log(opponentCardsImg[player2Index]);
  console.log("You beat your opponent!");}
  else if ((opponentCards[player2Index]) > (myCards[player1Index])) {
      opponent + 1;
      user -1;
      console.log(myCardsImg[player1Index]);
      console.log(opponentCardsImg[player2Index]);
      console.log("Your opponent beat you!");
  }
  else {
    console.log(myCardsImg[player1Index]);
    console.log(opponentCardsImg[player2Index]);
      console.log("It's a tie! WAR!")
  }
      }
    }
  playRound ();

