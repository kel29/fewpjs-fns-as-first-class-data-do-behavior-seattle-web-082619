/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const times = time.split(':');
  const hour = parseInt(times[0], 10);
  if (hour < 12) {
    return "Good Morning"
  } else if (hour < 17) {
    return "Good Afternoon"
  } else if (hour < 24) {
    return "Good Evening"
  }
}

function displayMessage(string="Not a valid time") {
  let greeting = document.getElementById('greeting');
  greeting.innerText = string;
} 
