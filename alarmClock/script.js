const currentTimeEl = document.getElementById("currentTime");
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarm");
const clearAlarmBtn = document.getElementById("clearAlarm");
const statusEl = document.getElementById("status");
const alarmSound = document.getElementById("alarmSound");

let alarmTime = null;
let alarmActive = false;

// Update clock every second
setInterval(() => {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;
  currentTimeEl.textContent = currentTime;

  // Check alarm
  if (alarmActive && alarmTime === `${hours}:${minutes}`) {
    alarmSound.play();
    statusEl.textContent = "⏰ Alarm Ringing!";
  }
}, 1000);

// Set alarm
setAlarmBtn.addEventListener("click", () => {
  if (!alarmTimeInput.value) {
    alert("Please select a time");
    return;
  }

  alarmTime = alarmTimeInput.value;
  alarmActive = true;
  statusEl.textContent = `Alarm set for ${alarmTime}`;
});

// Clear alarm
clearAlarmBtn.addEventListener("click", () => {
  alarmActive = false;
  alarmTime = null;
  alarmSound.pause();
  alarmSound.currentTime = 0;
  statusEl.textContent = "Alarm cleared";
});
