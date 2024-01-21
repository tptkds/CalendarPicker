import { checkHasPickedDate } from "../uitls/calendar.js";
import { updatePickedDay } from "./updatePickedDay.js";
import { setPickedDate, pickedDate } from "./states.js";

export function getDayItem(className, date, x) {
    const thisDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + x);
    const li = document.createElement('li');
    li.className = className;
    li.innerHTML = thisDate.getDate();

    li.addEventListener('click', (e) => {
        e.stopPropagation();
        setPickedDate(thisDate);
        console.log(pickedDate)
        updatePickedDay();
    });

    checkHasPickedDate(thisDate, li);

    return li;
}

