// const enteredWords=prompt('enter words')
// const totalletters=enteredWords.length
// console.log(`Total Characters: ${totalletters}`)
// const remaining=50-totalletters
// console.log(`Remaining Letters: ${remaining}`)

const enteredWords = document.getElementById("textbox");
const totalLetters = document.getElementById("totalCharacters");
const remainingLetters = document.getElementById("remainingCharacters");

enteredWords.addEventListener("input", updateCount);
updateCount();

function updateCount() {
    const max = enteredWords.getAttribute("maxlength");
    const typed = enteredWords.value.length;

    totalLetters.innerText = typed;
    remainingLetters.innerText = max - typed;
}
