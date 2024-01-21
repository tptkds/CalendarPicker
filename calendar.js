import { nowDate, setNowDate } from './modules/states.js';
import { loadUpdateCalendar } from './uitls/calendar.js';

const calendarLeftButton = document.querySelector('.calendar__leftButton');
const calendarRightButton = document.querySelector('.calendar__rightButton');
export const calendar = () => {
    loadUpdateCalendar();

    calendarLeftButton.addEventListener('click', () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, 1));
        loadUpdateCalendar();
    })
    calendarRightButton.addEventListener('click', () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1));
        loadUpdateCalendar();
    })
}