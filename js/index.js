var xp = 0;
var lvl = 1;
var xpProgressBar = 0;

const xpProgressEl = document.getElementById("xp-progress");
const lvlEl = document.getElementById("lvl");
const numEl = document.getElementById("num");
const addButton = document.getElementById("addBtn");

addButton.addEventListener("click", () => {
  xp += 10;
  lvl = Math.floor(xp / 100) + 1;

  numEl.innerText = xp % 100;
  xpProgressEl.style.width = `${xp % 100}%`;
  lvlEl.innerText = `- ${lvl}`;
});
