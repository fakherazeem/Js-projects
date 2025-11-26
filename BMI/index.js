const personHeight = document.getElementById('height');
const personWeight = document.getElementById('weight');
const result = document.getElementById('submit');
const bmiValueElement = document.getElementById("bmi-value");
const bmiCategoryElement = document.getElementById("bmi-category");
const bmiMessageElement = document.getElementById("bmi-message");
const resultsBox = document.getElementById("results");

result.addEventListener("click", function () {
    const heightresult = Number(personHeight.value) / 100;
    const weightresult = Number(personWeight.value);

    const bmiValue = (weightresult / (heightresult * heightresult)).toFixed(1);
    const bmiData = getBMICategory(bmiValue);

    resultsBox.classList.remove("hidden");
    bmiValueElement.textContent = bmiValue;
    bmiCategoryElement.textContent = bmiData.category;
    bmiCategoryElement.className = `text-xl font-bold p-2 rounded-lg mt-4 ${bmiData.color}`;
    bmiMessageElement.textContent = bmiData.message;
});

function getBMICategory(bmiValue) {
    let category, color, message;

    if (bmiValue < 18.5) {
        category = 'Underweight';
        color = 'bg-yellow-100 text-yellow-800';
        message = 'You are in the Underweight range. It may be beneficial to consult a health professional.';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        category = 'Healthy Weight';
        color = 'bg-green-100 text-green-800';
        message = 'You are in the Healthy Weight range. Great job!';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        category = 'Overweight';
        color = 'bg-orange-100 text-orange-800';
        message = 'You are in the Overweight range. Lifestyle changes may be helpful.';
    }

    return { category, color, message };
}
