const EX = `<div>X</div>`;
const OH = `<div>O</div>`;

const clearBoard = () => {
  const board = document.querySelectorAll(".piece");
  for (let i = 0; i < board.length; i++) {
    board.item(i).innerHTML = "";
  }

  board.p1Board = [];
  board.p2Board = [];
  board.currentTurn = "x";
};

// clear the board, populate the game object with players
const startGame = (player1, player2) => {
  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  game = new TicGame();

  clearBoard();
  game.p1 = p1.value || player1 || "Player 1";
  game.p2 = p2.value || player2 || "Player 2";
  console.log(game)
  p2.value = "";
  p1.value = "";
  game.updateMessage(`It's ${game.p1}'s turn`);
};

const snackBar = (message) => {

 var x = document.getElementById("snackbar");
 x.innerText = message;
 x.className = "show";
 setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

}
