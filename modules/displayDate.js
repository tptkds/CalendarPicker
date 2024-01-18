export const displayDate = (calendarMonth, calendarYear) => {
    const date = new Date();
    calendarMonth.innerHTML = date.getMonth() + 1;
    calendarYear.innerHTML = date.getFullYear();
}