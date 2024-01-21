
export const checkHasToday = () => {
    const calendarMonth = document.querySelector('.calendar__month').innerHTML.slice(0,-1);
    const calendarYear = document.querySelector('.calendar__year').innerHTML.slice(0,-1);
    const date = new Date();
    if (calendarMonth == date.getMonth() + 1 && calendarYear == date.getFullYear()) {
        return true;
    } 
    else {
        return false;
    }
    
}

