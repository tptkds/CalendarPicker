import { getDayItem } from "./getDayItem.js";

export const getDayItems = (date) => {
  let dayItems = [];
  /*1개월 전 날짜*/
  const prevDays = date.getDay();
  if (prevDays != 0) {
    for (let i = prevDays; i > 0; i--) {
      dayItems = [
        ...dayItems,
        getDayItem("calendar__dayItem calendar__dayItem--prev", date, -i),
      ];
    }
  }

  /*현재 날짜*/
  const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  for (let i = 0; i < endDay; i++) {
    dayItems = [...dayItems, getDayItem("calendar__dayItem", date, i)];
  }

  /*1개월 후 날짜*/
  for (let i = endDay; i + prevDays < 42; i++) {
    dayItems = [
      ...dayItems,
      getDayItem("calendar__dayItem calendar__dayItem--next", date, i),
    ];
  }
  return dayItems;
};
