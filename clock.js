function updateClock() {
    const clock = document.querySelector(".display");
    const japanTime = new Date();
    japanTime.setHours(japanTime.getHours() + 8); // Adjust for UTC+9 (Japan Standard Time)
    let sec = japanTime.getSeconds();
    let min = japanTime.getMinutes();
    let hr = japanTime.getHours();
    let day = 'AM';
    if (hr >= 12) {
     day = 'PM';
     hr = hr - 12;
    }
    if (hr === 0) {
     hr = 12;
    }
    if (sec < 10) {
     sec = '0' + sec;
    }
    if (min < 10) {
     min = '0' + min;
    }
    if (hr < 10) {
     hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min + ':' + sec + ' ' + day;
}
 
// Initial call to update the clock
updateClock();
 
// Set up a refresh every second
setInterval(updateClock, 1000);
