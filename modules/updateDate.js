const calendarMonth = document.querySelector('.calendar__month');
const calendarYear = document.querySelector('.calendar__year');
export const updateDate = (date) => {
    calendarMonth.innerHTML = date.getMonth() + 1 + "월";
    calendarYear.innerHTML = date.getFullYear() + "년";
}

