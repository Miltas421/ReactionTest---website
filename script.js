const box = document.getElementById("box");
const result = document.getElementById("result");
let startTime, endTime;

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBoxColor(color) {
  box.style.backgroundColor = color;
}

function startGame() {
  box.addEventListener("click", handleBoxClick);
  setBoxColor("red");
  result.textContent = "Click the box when it turns green!";
  setTimeout(() => {
    setBoxColor("green");
    startTime = new Date();
  }, getRandomTime(1000, 3000));
}

function handleBoxClick() {
  endTime = new Date();
  const reactionTime = endTime - startTime;
  box.removeEventListener("click", handleBoxClick);

  if (box.style.backgroundColor === "green") {
    result.textContent = `Reaction time: ${reactionTime}ms`;
    result.classList.remove("result-wrong");
    result.classList.add("result-correct");
  } else {
    result.textContent = "Oops! You clicked too early.";
    result.classList.remove("result-correct");
    result.classList.add("result-wrong");
  }

  setTimeout(startGame, getRandomTime(1000, 3000));
}

startGame();
