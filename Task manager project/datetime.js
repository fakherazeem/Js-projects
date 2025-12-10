export function updateCurrentDate(currentDateElement) {
    const date = new Date();
    // localStorage.setItem("Date",date)
    currentDateElement.textContent = date.toDateString();
}