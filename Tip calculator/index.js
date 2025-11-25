// // const billAmount=100;
// // const tipPercentage=10;

// // function tipCalculator(billAmount, tipPercentage) {
// //   const tipAmount = billAmount * (tipPercentage / 100);
// //   console.log(tipAmount);

// //   const totalBill = billAmount + tipAmount;
// //   console.log(totalBill);
// // }

// // tipCalculator(3500, 15);


const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calculate");

calcBtn.addEventListener("click", function () {
    const billValue = Number(bill.value);
    const tipValue = Number(tip.value);
    const total = billValue + (billValue * tipValue / 100);
    result.textContent = total;
});
