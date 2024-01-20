import { createDayItems } from "../uitls/calendar.js";
import { appendChildren } from "../uitls/dom.js";

export const displayDays = (lastDay, firstWeek, lastWeek, prevLastDay, calendarDays) => {
    const dayList = document.createElement('ul');
    dayList.className = 'calendar__dayList';
    appendChildren(calendarDays, createDayItems(lastDay, firstWeek, lastWeek, prevLastDay));
    return calendarDays;
}

