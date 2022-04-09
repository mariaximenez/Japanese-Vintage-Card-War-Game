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
};
let heart2 = {
    suit: 'heart',
    value: 2,
};
let heart3 = {
    suit: 'heart',
    value: 3,
};
let heart4 = {
    suit: 'heart',
    value: 4,
};

let heart5 = {
    suit: 'heart',
    value: 5,
};

let heart6 = {
    suit: 'heart',
    value: 6,
};

let heart7 = {
    suit: 'heart',
    value: 7,
};

let heart8 = {
    suit: 'heart',
    value: 8,
};

let heart9 = {
    suit: 'heart',
    value: 9,
};

let heart10 = {
    suit: 'heart',
    value: 10,
};

let heart11 = {
    suit: 'heart',
    value: 11,
};
let heart12 = {
    suit: 'heart',
    value: 12,
};

let heart13 = {
    suit: 'heart',
    value: 13,
}

let spade1 = {
    suit: 'spade',
    value: 1,
};
let spade2 = {
    suit: 'spade',
    value: 2,
};
let spade3 = {
    suit: 'spade',
    value: 3,
};
let spade4 = {
    suit: 'spade',
    value: 4,
};

let spade5 = {
    suit: 'spade',
    value: 5,
};

let spade6 = {
    suit: 'spade',
    value: 6,
};

let spade7 = {
    suit: 'spade',
    value: 7,
};

let spade8 = {
    suit: 'spade',
    value: 8,
};

let spade9 = {
    suit: 'spade',
    value: 9,
};

let spade10 = {
    suit: 'spade',
    value: 10,
};

let spade11 = {
    suit: 'spade',
    value: 11,

};
let spade12 = {
    suit: 'spade',
    value: 12,

};

let spade13 = {
    suit: 'spade',
    value: 13,

}



let user = 13;
let opponent = 13;



let myCards = [heart1.value, heart2.value, heart3.value, heart4.value, heart5.value, heart6.value, heart7.value, heart8.value, heart9.value, heart10.value, heart11.value, heart12.value, heart13.value];


let opponentCards = [spade1.value, spade2.value, spade3.value, spade4.value, spade5.value, spade6.value, spade7.value, spade8.value, spade9.value, spade10.value, spade11.value, spade12.value, spade13.value];

let myCardsImg = ['hrt1.jpg', 'hrt2.jpg', 'hrt3.jpg', 'hrt4.jpg', 'hrt5.jpg', 'hrt6.jpg', 'hrt7.jpg', 'hrt8.jpg', 'hrt9.jpg', 'hrt10.jpg', 'hrt11.jpg', 'hrt12.jpg', 'hrt13.jpg']

let opponentCardsImg = ['spd1.jpg', 'spd2.jpg', 'spd3.jpg', 'spd4.jpg', 'spd5.jpg', 'spd6.jpg', 'spd7.jpg', 'spd8.jpg', 'spd9.jpg', 'spd10.jpg', 'spd11.jpg', 'spd12.jpg', 'spd13.jpg'];



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

  function get_random_image () {
    let player1Index = Math.floor(Math.random()*12);
    let player2Index = Math.floor(Math.random()*12);
    let selected_image1 =  myCardsImg[player1Index];
    let selected_image2 = opponentCardsImg[player2Index];

document.getElementById("image_container1").src = "./myCards/${selected_image1}";
document.getElementById("image_container2").src = "./opponenetCards/${selected_image2}";
  }
    
 
