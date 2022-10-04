// Function that return the current year
export const getFullYear = () => new Date().getFullYear();

//Function that return false or true... 
// When true, the function should return Holberton School.
// When false, the function should return Holberton School main dashboard
export const getFooterCopy = (isIndex) => {
  if(isIndex) {
    return "Holberton School";
  }
  return "Holberton School main dashboard";
}

// Function that allow set a msg
export function logClickClose() {
  console.log('Close button has been clicked');
}

// Function that return a string.
export const getLatestNotification = () => {
  return `<strong>Urgent requirement</strong> - complete by EOD`;
}
