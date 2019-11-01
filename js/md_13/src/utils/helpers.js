
const helpers =  {
  formatDate(date) {
    const dateObj = new Date(date)
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    return `${day}/${month}`
  }
}

export default helpers;
