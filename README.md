# Project-1-War-Card-Game
War Card Game for General Assembly Project 1 Assignment


### GH repository: https://github.com/mariaximenez/Project-1-War-Card-Game.git

### Your chosen game: War Card Game
> The deck is divided evenly. The user plays a computer-generated opponent and plays a randomly selected card to beat the rank of a computer's randomly selected card. The player who steals all the cards has won.

PseudoCoding
War Card Game

There are two players: User and Opponent (computer).

Each players is dealt 26 cards. There is an array of 52 cards. I have images stored on my computer that I would like to link to each of the 52 cards. Or upload them to imgur.com and link them to that site.

I will store these 52 images in an array and assign each card an ID in order to assign them to a variable in JavaScript that has a numerical value. This numerical value will determine winning outcomes between the two cards. 

I will have two specific divisions in my HTML file that will display two random cards at a time. I will use Java Script QuerySelector to randomly select one of the images in the array to display once the “Play” button is clicked. 

I will then use a function to determine out of the two cards randomly selected which one has a higher numerical value. 
A player loses 1 pt.if they have a lower ranking card than their opponent’s card. 
The player with the higher card value gains 1 pt. This should be subtracted or added to the original value of 26 (original pile of cards.) This mathematical equation will be placed in a function called “round” and will use a for loop to continue playing until the (gameOver) conditions are met. 
A condition in the function (gameOver) will be if the original pile of cards value is = 0, the game is over. Also if the original pile of cards value is equal to 52, then the game is over and the winner is called. 


I will also need to create a function for conditions of a tie which is when “War” is called. In order to make it simpler, I may not have the user see two new cards displayed (one face down, one face up), I will just go to a regular round function, but the point value will double after a tie is called for the next round. So instead of gaining and losing 1 point, you will gain or lose 2pts. 
Not sure how to create a function that changes the conditions for only the immediate round after a tie is called. 


let myCard = “ “  I need to equate this variable to a randomly selected value in the array of 52 cards. 
let opponentCard = “” I need to equate this variable to a randomly selected value in the array of 52 cards. 

let myDeck = “ “ (Each deck starts at 26, loses or accrues points based upon rounds)
let opponentDeck = “ “ (Each deck starts at 26, loses or accrues points based upon rounds)


Function round () {
for(i = 0, I < deck.length/2 , i++)
if (myCard > opponentCard)
Return (myDeck + 1) && (opponentDeck-1)

Else (opponentCard> myCard)
Return (opponentCard + 1) && (myCard-1)





Function gaveOver () {
if (myDeck === 0) {
console.log(You lost the game!) }
if (opponentDeck ===0) {
console.log (You won the game!)}



### Basic User stories

### Wireframes: https://miro.com/app/board/uXjVO-j59FA=/?invite_link_id=79255309464
<img width="258" alt="War Game WireFrame" src="https://user-images.githubusercontent.com/101551729/162010447-9eb40c61-665f-4604-a59c-74b4a7a3de75.PNG">



### Anything else your instructional team should know
I have been struggling with having the functionality work. 