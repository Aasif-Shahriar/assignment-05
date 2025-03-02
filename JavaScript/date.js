let date = new Date();

let weekday = date.toLocaleString('en-US', {weekday:'short'});
document.getElementById('week-day').innerText = weekday + ',';

let month = date.toLocaleString('en-US', {month: 'short'});
let currentDay = date.getDate();
let year = date.getFullYear();
document.getElementById('present-date').innerText = `${month} ${currentDay} ${year}`;


