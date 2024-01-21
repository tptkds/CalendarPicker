import { updateCalendar } from './modules/updateCalendar.js';

const calendarDiv = document.querySelector('.calendar');
const calendarLeftButton = document.querySelector('.calendar__leftButton');
const calendarRightButton = document.querySelector('.calendar__rightButton');
export const calendar = () => {
    let nowDate = new Date();
    const monthStartDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    updateCalendar(monthStartDate);
    

    calendarLeftButton.addEventListener('click', () => {
        nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, 1);
        updateCalendar(nowDate);
    })
    calendarRightButton.addEventListener('click', () => {
        nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1);
        updateCalendar(nowDate);
    })
    
    const observer = new ResizeObserver(mutations => {
        calendarDiv.style.setProperty('--calendar-width', mutations[0].contentRect.width + "px");
        calendarDiv.style.setProperty('--calendar-height', mutations[0].contentRect.height + "px");
    });
    observer.observe(calendarDiv);
 
    
}

