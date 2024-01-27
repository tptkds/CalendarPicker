import { nowDate, pickedDate } from "../modules/states.js";
import { updateCalendar } from "../modules/updateCalendar.js";

export const checkHasToday = () => {
  const calendarMonth = document
    .querySelector(".calendar__month")
    .innerHTML.slice(0, -1);
  const calendarYear = document
    .querySelector(".calendar__year")
    .innerHTML.slice(0, -1);
  const date = new Date();
  if (
    calendarMonth == date.getMonth() + 1 &&
    calendarYear == date.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
};

export const loadUpdateCalendar = () => {
  updateCalendar(
    new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()),
  );
};

export const checkHasPickedDate = (date, item) => {
  if (pickedDate != null) {
    const pickedYear = pickedDate.getFullYear();
    const pickedMonth = pickedDate.getMonth();
    const pickedDay = pickedDate.getDate();
    const curYear = date.getFullYear();
    const curMonth = date.getMonth();
    const curDay = date.getDate();

    if (pickedYear == curYear && pickedMonth == curMonth && pickedDay == curDay)
      item.classList.add("calendar__dayItem--picked");
  }
};
