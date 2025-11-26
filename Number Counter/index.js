let count = 0;
const displayElement = document.getElementsByClassName("value")[0];
document.querySelector(".minus-btn").addEventListener("click", function () {
  count--;
  displayElement.textContent = count;
});

document.querySelector(".reset-btn").addEventListener("click", function () {
  count = 0;
  displayElement.textContent = count;
});
document.querySelector(".plus-btn").addEventListener("click", function () {
  count++;
  displayElement.textContent = count;
});
