const date = new Date();

export let nowDate = new Date(date.getFullYear(), date.getMonth(), 1);
export const setNowDate = (date) => {
    nowDate = date;
}

export let pickedDate = null;
export const setPickedDate = (date) => {
    pickedDate = date;
}