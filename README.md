Japanese Vintage Card War Game

Enjoy the elegance of the feminine form and the vibrant colors and patterns of 18th Century Japanese dress as depicted by Japanese wood print artists- Utamaro, Hokusai, Sharaku, and Eishi- as you play a card game of War. Even if you lose, you'll be transported to a seductive, alluring space.




### Wireframes: https://miro.com/app/board/uXjVO-j59FA=/?invite_link_id=79255309464
<img width="258" alt="War Game WireFrame" src="https://user-images.githubusercontent.com/101551729/162010447-9eb40c61-665f-4604-a59c-74b4a7a3de75.PNG">



<img width="1439" alt="Japanese Vintage Card Game" src="https://user-images.githubusercontent.com/101551729/163075145-f577a98e-682c-40b7-ad48-11b04fdfe925.png">


Instructions: Click the "DRAW" button until you win or lose. Click the "RESET" button to start over. At the game's conclusion, ponder the quote from Bushido, a well-known Japanese writer on the principles of the Samurai, as you play again.

Technologies used JavaScript, HTML, and CSS.


Play Here: https://mariaximenez.github.io/Japanese-Vintage-Card-War-Game/

Future enhancements:
* Rotating Bushido and Japanese philosopher quotes at the conclusion of every game
* Rotating Japanese art print block depicting landscapes in different seasons





PseudoCoding
War Card Game

There are two players: User and Opponent (computer).

Each players is dealt 26 cards. Images of Utamaro Japanese Vintage Cards are stored locally in the project folder. 

Cards are first stored in an object and assigned a numerical value. Object values are then stored in an array.

Comparisons are made between each card by pulling them with a randomCardIndex that is generated by the built-in function Math.Random.

Two "image-Containers" in the HTML file hold two cards and displays them at both ends of the browser. A "get_random_imgage" function randomly grabs one of the images in the array and its related card image to display once the “DRAW" button is clicked. 

Scoring:
1pt is given during each round to the higher ranking card.
1pt is lost during each round to the lower ranking card.

War Conditions Scoring:
6pts are given for the winner of the tie.
6pts are lost for the loser of the tie.

The game is over when one of the score's variables- user or opponenet-is equal to 0.

Pseudocoding Notes:

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



