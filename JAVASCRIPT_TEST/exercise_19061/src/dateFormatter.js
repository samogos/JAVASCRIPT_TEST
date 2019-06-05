export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  let dateToFormat = new Date(dateToFormatTimeMillis);
  let currentDate = new Date(systemDateTimeMillis);
  if(currentDate === dateToFormat){
    return "TODAY"
  } else {
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let DD = new Date().getDate();
    let MM = months[new Date().getMonth()];
    let YYYY = new Date().getFullYear();
    let formattedDate = `${DD}/${MM}/${YYYY}`
    return formattedDate;
  }
  
};
