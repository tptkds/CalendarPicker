export const createDayItems = (lastDay, firstWeek, lastWeek, prevLastDay) => {
    let dayItems = [];
    let day = 1
    dayItems = [...get7DaysItems(0, firstWeek, prevLastDay - firstWeek + 1, 0, "calendar__dayItem--prev")];
    dayItems = [...dayItems, ...get7DaysItems(firstWeek, 7, day)];
    day = 7 - firstWeek + 1;
    for (let i = 1; i < 6; i++) {
        if (day > lastDay) {
            day = lastWeek;
            lastDay = + lastWeek + 7;
        }
        dayItems = [...dayItems, ...get7DaysItems(0, 7, day, lastDay)];
        day = day + 7;
    }
    return dayItems;
}

export const get7DaysItems = (startIdx, endIdx, startDay, lastDay = 0, className = null) => {
    let sevenDayItems = [];
    let day = startDay;
    for (let i = startIdx; i < endIdx; i++) {
        if (lastDay !== 0 && day > lastDay) {
            day = 1;
            className = 'calendar__dayItem--next'
        }
        const dayItem = document.createElement('li');
        dayItem.className = `${className != null ? ' ' + className : 'calendar__dayItem'}`;
        dayItem.innerHTML = `${day++}`;
        sevenDayItems.push(dayItem);
    }
    return sevenDayItems;
}