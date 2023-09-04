const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const milisecondsEl = document.getElementById('milliseconds');

const timeZone = document.getElementById('time-zone');

setTimeZone();
updateMilliseconds();
updateTime();

function setTimeZone() {
  timeZone.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function updateMilliseconds() {
  const currentTime = new Date();
  const milisecondsStr = currentTime.getMilliseconds().toString();
  milisecondsEl.innerHTML = milisecondsStr.slice(0, 3);
}

function updateTime() {
  const currentTime = new Date();
  secondsEl.innerHTML = currentTime.getSeconds();
  minutesEl.innerHTML = currentTime.getMinutes();

  const hoursNumber = currentTime.getHours();

  if (hoursNumber >= 12) {
    if (hoursEl >= 13) {
      hoursNumber -= 12;
    }
    hoursEl.innerHTML = hoursNumber + ' PM';
  } else {
    hoursEl.innerHTML = hoursNumber + ' AM';
  }
}

setInterval(updateMilliseconds, 1);
setInterval(updateTime, 500);