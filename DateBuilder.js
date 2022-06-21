//Function to return current date to display in UI 
export const DateBuilder = (d) => {
  //Month and Day arrays to display them in a particular format in UI
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];
  //Obtaining current date and storing in a variable to return
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  //Time 
  let time = d.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  return `${day} ${date} ${month} ${year} , ${time}`
}