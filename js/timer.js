

const DURATION_AS_MINUTES = 60;
        const DURATION_AS_SECONDS = DURATION_AS_MINUTES * 60;
        const DURATION_AS_MILISECONDS = DURATION_AS_SECONDS * 1000;
        
        function runTimerProgram() {
        startDate = new Date();
     //   document.getElementById("info").style.display = "none";
      //  document.getElementById("divTimer").style.display = "block";
     //   playSound('double-little-bird-chirp.wav', false);
     //   playSound('long-rain.wav', true);
        setTimeout(updateTimer, 1000);
        }
        function updateTimer() {
        let dateDiffInMiliseconds = getDateDifferenceInMiliseconds();
        if (isTimeOver(dateDiffInMiliseconds)) {
    //    playSound('double-little-bird-chirp.wav', true);
        divTimer.innerText = "00:00";
        divTimerex.innerText = "00:00";
        return;
        }
        let dateDiffInSeconds = getDateDifferenceInSeconds(dateDiffInMiliseconds);
        let dateDiffInMinutes = getDateDifferenceInMinutes(dateDiffInMiliseconds);
        
        let remainingMinutes = calculateRemainingMinutes(dateDiffInMinutes);
        let remainingSeconds = calculateRemainingSeconds(dateDiffInSeconds);
        let remainingTime = formatRemainingTime(remainingMinutes, remainingSeconds);
        
        divTimer.innerText = remainingTime;
        divTimerex.innerText = remainingTime;
     //   changeBackgroundColor();
        setTimeout(updateTimer, 1000);
        }
        
        function getDateDifferenceInMiliseconds() {
        let currentDate = new Date();
        return currentDate.getTime() - startDate.getTime();
        }
        function getDateDifferenceInMinutes(dateDiffInMiliseconds) {
        return parseInt(dateDiffInMiliseconds / (1000 * 60) % 60);
        }
        function getDateDifferenceInSeconds(dateDiffInMiliseconds) {
        return parseInt(dateDiffInMiliseconds / (1000) % 60);
        }
        
        function calculateRemainingMinutes(dateDiffInMinutes) {
        return DURATION_AS_MINUTES - dateDiffInMinutes - 1;
        }
        function calculateRemainingSeconds(dateDiffInSeconds) {
        return 60 - dateDiffInSeconds;
        }
        
        function formatRemainingTime(remainingMinutes, remainingSeconds) {
        if (remainingSeconds == 60) { remainingSeconds = 0; remainingMinutes = remainingMinutes + 1; }
        if (remainingMinutes < 10) { remainingMinutes = "0" + remainingMinutes; }
        if (remainingSeconds < 10) { remainingSeconds = "0" + remainingSeconds; }
        return remainingMinutes + ":" + remainingSeconds;
        }
        
        function isTimeOver(dateDiffInMiliseconds) {
        return dateDiffInMiliseconds >= DURATION_AS_MILISECONDS;
        }
        
        