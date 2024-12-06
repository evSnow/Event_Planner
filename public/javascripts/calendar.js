
const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextBtns = document.querySelectorAll(".calendar-controls button");

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

const renderCalendar = () => {
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        liTag += `<li>${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

prevNextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currMonth = btn.id === "prevMonth" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            currYear += currMonth < 0 ? -1 : 1;
            currMonth = currMonth < 0 ? 11 : 0;
        }
        renderCalendar();
    });
});

renderCalendar();