// function ageCalculator(bornYear,currentYear){
// const presentAge=currentYear-bornYear
// console.log(presentAge)
// }
// ageCalculator(2002,2025)
document.getElementById("calculateBtn").addEventListener("click", function () {
    const dobValue = document.getElementById("dob").value;
    const resultElement = document.getElementById("result");

    const birthDate = new Date(dobValue);
    const bornYear = birthDate.getFullYear();
    const today = new Date();
    const currentYear = today.getFullYear();
        const age = currentYear - bornYear;
    resultElement.textContent = `You are : ${age} years Old`;
});