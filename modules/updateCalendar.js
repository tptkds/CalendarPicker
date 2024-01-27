import { updateDate } from "./updateDate.js";
import { updateDays } from "./updateDays.js";
import { updateToday } from "./updateToday.js";

export const updateCalendar = (date) => {
  updateDate(date);
  updateDays(date);
  updateToday();
};
