const da = new Date();
da.getFullYear
export const getDayItems = (date) => {
    let dayItems = [];
    /*1개월 전 날짜*/
    const prevDays = date.getDay();
    if (prevDays != 0) {
        for (let i = prevDays; i > 0; i--) {
            dayItems.push(createDayItem('calendar__dayItem calendar__dayItem--prev', date, -i ));
        }
    } 
    
    /*현재 날짜*/
    const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (let i = 0; i < endDay; i++) {
        dayItems.push(createDayItem('calendar__dayItem', date, i ));
    }

    /*1개월 후 날짜*/
    for (let i = endDay; i + prevDays < 42; i++) {
        dayItems.push(createDayItem('calendar__dayItem calendar__dayItem--next', date, i ));
    }
    return dayItems;
}

function createDayItem(className, date, x) {
    const thisDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + x);
    const li = document.createElement('li');
    li.className = className;
    li.innerHTML = thisDate.getDate();
    li.addEventListener('click', () =>
        console.log(`${thisDate.getFullYear()}-${thisDate.getMonth() < 9 ? "0" + (thisDate.getMonth() + 1) : thisDate.getMonth() + 1}-${thisDate.getDate() < 10 ? "0" + thisDate.getDate() : thisDate.getDate()}`)
    );
    return li;
}


