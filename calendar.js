import { displayDate } from './modules/displayDate.js';
import { displayDays } from './modules/displayDays.js';
const calendarMonth = document.querySelector('.calendar__month');
const calendarYear = document.querySelector('.calendar__year');
const calendarDays = document.querySelector('.calendar__days');
export const calendar = () => {
    const date = new Date();
    displayDate(calendarMonth, calendarYear, date.getMonth() + 1, date.getFullYear());

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    const lastWeek = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDay();
    displayDays(lastDay, firstWeek, lastWeek, prevLastDay, calendarDays);
}