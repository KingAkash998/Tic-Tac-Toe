let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".resetbtn");
let newGame = document.querySelector(".newGame");
let msg = document.querySelector(".para");
let msgcontainer = document.querySelector(".win");

let turnPlayer1 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnPlayer1 === true) {
      box.innerText = "O";
      turnPlayer1 = false;
    } else {
      box.innerText = "X";
      turnPlayer1 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let WinPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinner = () => {
  for (pattern of WinPattern) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 == p2 && p2 == p3) {
        showWinner(p1);
      }
    }
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msgcontainer.classList.remove("hide");
  msg.innerText = `Congrutulations!, the winner is ${winner}`;
  disableBoxes();
};

let resetGame = () => {
  enableBoxes();
  msgcontainer.classList.add("hide");
};

resetbtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
