let user1Moves = [];
let user2Moves = [];
let currentUser = "user1";

const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function checkWin(playerMoves) {
  for (let combo of winningCombos) {
    let win = true;
    for (let num of combo) {
      if (!playerMoves.includes(num)) {
        win = false;
        break;
      }
    }
    if (win) return true;
  }
  return false;
}


const buttons = document.querySelectorAll(".game-container button");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const move = Number(e.target.id);

    if (e.target.textContent) return;

    if (currentUser === "user1") {
      user1Moves.push(move);
      e.target.textContent = "X";

      if (checkWin(user1Moves)) {
        alert("User 1 Won!");
        // resetGame();
        return;
      }

      currentUser = "user2";

    } 
    
    else {
      user2Moves.push(move);
      e.target.textContent = "O";

      if (checkWin(user2Moves)) {
        alert("User 2 Won!");
        // resetGame();
        return;
      }

      currentUser = "user1";
    }

    if (user1Moves.length + user2Moves.length === 9) {
      alert("It's a Draw!");
      resetGame();
    }
  });
});

function resetGame() {
  user1Moves = [];
  user2Moves = [];
  currentUser = "user1";
  buttons.forEach(btn => btn.textContent = "");
}
