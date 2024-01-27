import { pickedDate, setNowDate } from "./modules/states.js";
import { loadUpdateCalendar } from "./utils/calendar.js";
import { closeCalendar } from "./utils/datePicker.js";

const datePickerText = document.querySelector(".datePicker__text");
const calendar = document.querySelector(".calendar");

export const datePicker = () => {
  datePickerText.addEventListener("click", (e) => {
    e.stopPropagation();
    calendar.classList.add("calendar--active");
    if (pickedDate != null)
      setNowDate(new Date(pickedDate.getFullYear(), pickedDate.getMonth(), 1));
    loadUpdateCalendar();
  });

  datePickerText.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  calendar.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.body.addEventListener("click", () => {
    closeCalendar();
  });
};
