// <!-- Javascript Codes here -->
{
  /* <script> */
}
// Create a time data function
function currentTime() {
  // Declare Variables
  var d = new Date(); //Get Current Date
  var hr = d.getHours(); //Get current hours
  var min = d.getMinutes(); //Get current minutes
  var sec = d.getSeconds(); //Get current seconds
  var ampm; // Declare empty variable  to store AM or PM

  // Add 0 to single digit for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }

  // Add 0 to single digit for minutes
  if (min < 10) {
    min = "0" + min;
  }

  // Determine AM or PM
  if (hr == 12) {
    ampm = "PM"; // Set to PM
  } else if (hr > 12) {
    hr -= 12; // Deduct 12 from hours greater than 12
    ampm = "PM"; // Set to PM
  } else {
    ampm = "AM"; // Set to AM
  }

  // Timezone
  var utchr = d.getUTCHours(); // Get current Greenwich Mean Time (GMT)
  var timediff = utchr - hr; // to store time diff between GMT and current
  var adjTimeDiff; // store time diff converted to positive
  var timezone; // to store the 4 timezones (PT, MT, CT, ET)

  // Adjust to 24hr
  if (timediff < 0) {
    adjTimeDiff = timediff + 24;
  } else if (timediff > 11) {
    adjTimeDiff = timediff - 12;
  } else {
    adjTimeDiff = timediff;
  }

  if (adjTimeDiff == 4) {
    timezone = "ET";
  } else if (adjTimeDiff == 5) {
    timezone = "CT";
  } else if (adjTimeDiff == 6) {
    timezone = "MT";
  } else if (adjTimeDiff == 7) {
    timezone = "PT";
  } else {
    // Convert to Local Time String
    var dateString = d.toString();
    timezone = dateString.slice(dateString.indexOf("("));
  }

  // Assemble time format to display
  var time = `${hr}:${min}:${sec} ${ampm} ${timezone}`;

  // Display current local time and timezone on HTML elements
  document.getElementById("clock").innerText = time; // adding time

  // Run time data function every 1 second
  setInterval(currentTime, 1000);
}

// Initial run of time data function
currentTime();
{
  /* </script> */
}
