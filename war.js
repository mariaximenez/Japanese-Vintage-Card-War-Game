

let heart1 = {
  suit: "heart",
  value: 14,
};
let heart2 = {
  suit: "heart",
  value: 2,
};
let heart3 = {
  suit: "heart",
  value: 3,
};
let heart4 = {
  suit: "heart",
  value: 4,
};

let heart5 = {
  suit: "heart",
  value: 5,
};

let heart6 = {
  suit: "heart",
  value: 6,
};

let heart7 = {
  suit: "heart",
  value: 7,
};

let heart8 = {
  suit: "heart",
  value: 8,
};

let heart9 = {
  suit: "heart",
  value: 9,
};

let heart10 = {
  suit: "heart",
  value: 10,
};

let heart11 = {
  suit: "heart",
  value: 11,
};
let heart12 = {
  suit: "heart",
  value: 12,
};

let heart13 = {
  suit: "heart",
  value: 13,
};

let spade1 = {
  suit: "spade",
  value: 14,
};
let spade2 = {
  suit: "spade",
  value: 2,
};
let spade3 = {
  suit: "spade",
  value: 3,
};
let spade4 = {
  suit: "spade",
  value: 4,
};

let spade5 = {
  suit: "spade",
  value: 5,
};

let spade6 = {
  suit: "spade",
  value: 6,
};

let spade7 = {
  suit: "spade",
  value: 7,
};

let spade8 = {
  suit: "spade",
  value: 8,
};

let spade9 = {
  suit: "spade",
  value: 9,
};

let spade10 = {
  suit: "spade",
  value: 10,
};

let spade11 = {
  suit: "spade",
  value: 11,
};
let spade12 = {
  suit: "spade",
  value: 12,
};

let spade13 = {
  suit: "spade",
  value: 13,
};



let myCards = [
  heart1.value,
  heart2.value,
  heart3.value,
  heart4.value,
  heart5.value,
  heart6.value,
  heart7.value,
  heart8.value,
  heart9.value,
  heart10.value,
  heart11.value,
  heart12.value,
  heart13.value,
];

let opponentCards = [
  spade1.value,
  spade2.value,
  spade3.value,
  spade4.value,
  spade5.value,
  spade6.value,
  spade7.value,
  spade8.value,
  spade9.value,
  spade10.value,
  spade11.value,
  spade12.value,
  spade13.value,
];

let myCardsImg = [
  "hrt1.jpg",
  "hrt2.jpg",
  "hrt3.jpg",
  "hrt4.jpg",
  "hrt5.jpg",
  "hrt6.jpg",
  "hrt7.jpg",
  "hrt8.jpg",
  "hrt9.jpg",
  "hrt10.jpg",
  "hrt11.jpg",
  "hrt12.jpg",
  "hrt13.jpg",
];

let opponentCardsImg = [
  "spd1.jpg",
  "spd2.jpg",
  "spd3.jpg",
  "spd4.jpg",
  "spd5.jpg",
  "spd6.jpg",
  "spd7.jpg",
  "spd8.jpg",
  "spd9.jpg",
  "spd10.jpg",
  "spd11.jpg",
  "spd12.jpg",
  "spd13.jpg",
];

const drawButton = document.querySelector(".center");
drawButton.addEventListener("click", get_random_image);

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);

let user = 13;
let opponent = 13;

function playRound(p1, p2) {
    console.log(myCardsImg[p1]);
    console.log(opponentCardsImg[p2]);
    if (myCards[p1] > opponentCards[p2]) {
      user += 1;
      opponent -= 1; {
      let myScore = document.querySelector(".myScore");
      myScore.innerText = `My Score = ${user}`;}
      let opponentScore = document.querySelector(".opponentScore");
      opponentScore.innerText = `Opponent score =  + ${opponent}`;
       console.log("You beat your opponent!"); 
       gameOver();
    } 
    else if (opponentCards[p2] > myCards[p1]) {
      opponent += 1;
      user -= 1;
        let myScore = document.querySelector(".myScore");
        myScore.innerText = `My Score = ${user}`;
        let opponentScore = document.querySelector(".opponentScore");
        opponentScore.innerText = `Opponent score = ${opponent}`;
         console.log("Your opponent beat you!");
         gameOver();
    } else {
      get_war_cards ();
      console.log("It's a tie! WAR!");
      gameOver();
    }
  }



function get_random_image() {
 
  document.getElementById("user_war_card1").remove();
    document.getElementById("user_war_card2").remove();
    document.getElementById("opponent_war_card1").remove();
    document.getElementById("opponent_war_card2").remove();
    let userWarCard1 = document.createElement('img')
    userWarCard1.setAttribute('id',"user_war_card1")
    let userWarCard2 = document.createElement('img')
    userWarCard2.setAttribute('id',"user_war_card2")
    let opponentWarCard1 = document.createElement('img')
    opponentWarCard1.setAttribute('id',"opponent_war_card1")
    let opponentWarCard2 = document.createElement('img')
    opponentWarCard2.setAttribute('id',"opponent_war_card2")
   
document.querySelector(".myCards").append(userWarCard1, userWarCard2)
document.querySelector(".opponentCards").append(opponentWarCard1, opponentWarCard2)


  let player1Index = Math.floor(Math.random() * 12);
  let player2Index = Math.floor(Math.random() * 12);
  selected_image1 = myCardsImg[player1Index];
  selected_image2 = opponentCardsImg[player2Index];
  {
    document.getElementById(
      "image_container1"
    ).src = `./myCards/${selected_image1}`;
    document.getElementById(
      "image_container2"
    ).src = `./opponentCards/${selected_image2}`;
  }
  playRound(player1Index, player2Index);
}



function get_war_cards() {
  let player1Index = Math.floor(Math.random() * 12);
  let player2Index = Math.floor(Math.random() * 12);
  let player3Index = Math.floor(Math.random() * 12);
  let player4Index = Math.floor(Math.random() * 12);
  selected_image1 = myCardsImg[player1Index];
  selected_image2 = opponentCardsImg[player2Index];
  selected_image3 = myCardsImg[player3Index]
  selected_image4 = opponentCardsImg[player4Index];
    document.getElementById("user_war_card1").src = `./myCards/${selected_image1}`;
    document.getElementById("user_war_card2").src = `./myCards/${selected_image3}`;
    document.getElementById("opponent_war_card1").src = `./opponentCards/${selected_image2}`;
    document.getElementById("opponent_war_card2").src = `./opponentCards/${selected_image4}`;
    console.log(myCardsImg[player3Index])
    if (myCardsImg[player3Index] > opponentCardsImg[player4Index]) {
      user += 6;
      opponent -= 6; 
      let myScore = document.querySelector(".myScore");
      myScore.innerText = `My Score = ${user}`;
      let opponentScore = document.querySelector(".opponentScore");
      opponentScore.innerText = `Opponent score =  + ${opponent}`;
      console.log("You beat your opponent!");  
      }
     
     else if (myCardsImg[player3Index] < opponentCardsImg[player4Index]) {
      opponent += 6;
      user -= 6; 
        let myScore = document.querySelector(".myScore");
        myScore.innerText = `My Score = ${user}`;
        let opponentScore = document.querySelector(".opponentScore");
        opponentScore.innerText = `Opponent score =  ${opponent}`;
      console.log("Your opponent beat you!");
       }
       else 
      {
       playRound();
      console.log("It's a tie! WAR!");
    }
  }

function gameOver () {
  if (user <= 0) {
    let myScore = document.querySelector(".myScore");
    myScore.innerText = `You lost`;
    let opponentScore = document.querySelector(".opponentScore");
    opponentScore.innerText = `Opponent Won! Score: ${opponent}`;
    gameOverMessage();
  }
  else if (opponent <=0) {
    let myScore = document.querySelector(".myScore");
    myScore.innerText = `You won! Score: ${user}`;
    let opponentScore = document.querySelector(".opponentScore");
    opponentScore.innerText = `Opponent Lost`;
    gameOverMessage();
  }
}

function gameOverMessage () {
  let gameOverMessage = document.createElement('gameOverMessage');
  gameOverMessage.setAttribute('id',"gameOverMessage");
  document.getElementById("gameOverMessage").innerText="If you embark on an uncharted path, infinite secrets will appear.-Bushido";
  document.getElementById("gameOverMessage").style.display='block';
}

function reset () {
  document.getElementById("gameOverMessage").style.display='none';
  user = 13
  opponent = 13
  let myScore = document.querySelector(".myScore");
  myScore.innerText = `${user}`;
  let opponentScore = document.querySelector(".opponentScore");
  opponentScore.innerText = `${opponent}`;
}