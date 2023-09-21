// utility.js
export function getCurrentDateTime() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    //   hour: "numeric",
    //   minute: "numeric",
    //   second: "numeric",
    };
  
    const currentDateTime = new Date().toLocaleDateString(undefined, options);
  
    return currentDateTime;
  }
  