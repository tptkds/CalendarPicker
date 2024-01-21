import { closeCalendar } from '../uitls/datePicker.js';
import { pickedDate} from './states.js';

const datePickerText = document.querySelector('.datePicker__text');

export const updatePickedDay = () => {
    datePickerText.value = `${pickedDate.getFullYear()}-${pickedDate.getMonth() < 9 ? "0" + (pickedDate.getMonth() + 1) : pickedDate.getMonth() + 1}-${pickedDate.getDate() < 10 ? "0" + pickedDate.getDate() : pickedDate.getDate()}`
    closeCalendar();
}
