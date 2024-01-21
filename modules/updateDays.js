import { getDayItems } from "./getDayItems.js";
import { appendChildren } from "../uitls/dom.js";
const calendarDays = document.querySelector('.calendar__days')

export const updateDays = (date) => {
    calendarDays.innerHTML = '';
    const dayList = document.createElement('ul');
    dayList.className = 'calendar__dayList';
    appendChildren(dayList, getDayItems(date));
    calendarDays.appendChild(dayList);   
}

