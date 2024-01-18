import { displayDate } from './modules/displayDate.js';
const calendarMonth = document.querySelector('.calendar__month');
const calendarYear = document.querySelector('.calendar__year');
export const calendar = () => {
    displayDate(calendarMonth, calendarYear);
}