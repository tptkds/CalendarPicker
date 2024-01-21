import { checkHasToday } from "../uitls/calendar.js";

export const updateToday = () => {
    if (checkHasToday()) {
        const date = new Date();
        const dayItems = document.getElementsByClassName('calendar__dayItem');
        for (let i = 0; i < dayItems.length; i++) {
            if (dayItems[i].innerHTML == date.getDate()) dayItems[i].classList.add('calendar__dayItem--today');
        }
    }
}