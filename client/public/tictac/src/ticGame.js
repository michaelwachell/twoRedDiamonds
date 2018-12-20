class TicGame {

  constructor(player1, player2) {

    this.p1 = player1 || 'Player 1'
    this.p2 = player2 || 'Player 2'
    this.currentTurn = 'x';
    this.p1Board = [];
    this.p2Board = [];
    this.message = "Enter Player Names and Click Submit to Start"
    this.winState = {
      1: [0, 1, 2],
      2: [3, 4, 5],
      3: [6, 7, 8],
      4: [0, 3, 6],
      5: [1, 4, 7],
      6: [2, 5, 8],
      7: [0, 4, 8],
      8: [2, 4, 6]
    };
    this.turnCount = 0;
  };


  takeTurn(e) {
    
   
    let space = parseInt(e.id[e.id.length - 1]);
    let filled = this.p1Board.indexOf(space) === -1 && this.p2Board.indexOf(space) === -1;
    let nextPlayer = this.currentTurn === 'x' ? this.p2 : this.p1
    if (this.currentTurn === 'x' && filled) {
      this.fillSquare(e);
      this.p1Board.push(space)
      game.updateMessage(`It's ${nextPlayer}'s turn`);
      this.gameEnd(this.p1Board)
    } else if (filled) {
      this.fillSquare(e);
      this.p2Board.push(space);
      game.updateMessage(`It's ${nextPlayer}'s turn`);
      this.gameEnd(this.p2Board)
    }
    this.currentTurn === 'x' ? this.currentTurn = 'o' : this.currentTurn = 'x';
    this.turnCount += 1;


  }

  fillSquare(e) {
    let mark = this.currentTurn === 'x' ? EX : OH;
    e.classList.add('growUp')
    e.innerHTML = mark
    setTimeout(function(){ e.classList.remove('growUp');
  console.log(e) }, 1000);

  }

  gameEnd(board) {
    let name = this.currentTurn === 'x' ? this.p1 : this.p2;
    let names = [game.p1, game.p2];
    for (let key in this.winState) {
      let win = this.winState[key].every((boardPosition) => {
        return board.indexOf(boardPosition) !== -1;
      });
      if (win === true) {
        snackBar(`${name} wins!  Play again?`);
        startGame(game.p1, game.p2);
      }

      if (game.turnCount === 8) {
        snackBar(`It's a draw!  Play again?`);
        startGame(game.p1, game.p2)
      }



    }



  }

  updateMessage(message) {
    const mes = document.querySelectorAll('#message');
    mes[0].innerHTML = message;
  }

}

// instantiate new game
let game = new TicGame()