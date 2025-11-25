// function poundToKg(kg){
// const weghtInPounds= kg*0.453592
// console.log(weghtInPounds)
// }
// poundToKg(1)
const poundsInput = document.getElementById("poundsInput");
const resultKg = document.getElementById("resultKg");

poundsInput.addEventListener("input", () => {
  const pounds = Number(poundsInput.value);
  const kilo = pounds * 0.453592;
  resultKg.textContent = `Your weight is ${kilo.toFixed(1)} KG`;  // show result
});
