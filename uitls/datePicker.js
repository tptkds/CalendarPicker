const calendar = document.querySelector('.calendar');

export const closeCalendar = () => {
    calendar.classList.remove('calendar--active');  
}