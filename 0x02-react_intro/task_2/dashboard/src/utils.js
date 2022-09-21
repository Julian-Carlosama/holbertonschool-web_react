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

