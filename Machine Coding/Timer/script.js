const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const continueBtn = document.querySelector("#continue");
const resetBtn = document.querySelector("#reset");
const hrInput = document.getElementById("hr")
const minInput = document.getElementById("min")
const secInput = document.getElementById("sec")
let counterId = null;
let saveTimeLeft = null;

const TransformedInput = (hrs, mins, secs) => {
    if (secs >= 60) {
        //mins = mins + Math.floor(secs / 60);
        mins++;
        secs = secs % 60;
    }
    if (mins >= 60) {
        //hrs = hrs + Math.floor(mins / 60);
        hrs++;
        mins = mins % 60;
    }
    return {
        transformedhrs: hrs,
        transformedmins: mins,
        transformedsecs: secs
    };
};


const validatedInput = (hrs, mins, secs) => {
    if (hrs === 0 && mins === 0 && secs === 0) {
        alert("Please enter the valid Time")
        return false;
    }

    if (hrs > 24 || hrs < 0 || mins < 0 || secs < 0) {
        alert("negative and hrs > 24 are not allowed");
        return false;
    }

    const { transformedhrs,
        transformedmins,
        transformedsecs } = TransformedInput(hrs, mins, secs);

    const totalTimeInSecs = transformedhrs * 60 * 60 + transformedmins * 60 + transformedsecs;
    if (totalTimeInSecs > 86400) {
        alert("Total Time should not be more than 24 Hours")
        return false;
    }
    return true;

}

const updateUI = (countDownTimer) => {
    if(countDownTimer === 0){
        clearInterval(counterId);
        hrInput.value = "00";
        minInput.value = "00";
        secInput.value = "00";
        // once the timer reach zero, the pause will shiift to start and reset button
        continueBtn.style.display = "none";
        pauseBtn.style.display = "none";
        startBtn.style.display = "block";
        resetBtn.style.display = "block";
        return;
    }
    // if timer is not0 we will update as
    let hrs = Math.floor(countDownTimer / 3600);
    let mins = Math.floor((countDownTimer % 3600) / 60);
    let secs = countDownTimer % 60;
    if(secs > 0){
        secs--;
        secInput.value = secs < 10 ? `0${secs}` : secs;
        minInput.value = mins < 10 || mins === 0 ? `${mins}` : mins;
        hrInput.value = hrs < 10 || hrs === 0 ? `${hrs}` : hrs;
        return;
    }
    if(mins > 0){
        mins--;
        minInput.value = mins < 10 ? `0${mins}` : mins;
        secInput.value = 59;
        hrInput.value = hrs;
        return;

    }if(hrs > 0){
        hrs--;
        minInput.value = 59;
        minInput.value = 59;
        hrInput.value = hrs < 10 ? `0${hrs}` : hrs;
        return;
    }
};

const timer = (countDownTime) => {
  counterId = setInterval(() => {
    updateUI(countDownTime);
    countDownTime--;
    saveTimeLeft = countDownTime;
  }, 1000);
};

// User might have entered it in frontend nad validate that the valueis correct
startBtn.addEventListener("click", () => {
    const hrs = parseInt(hrInput.value) || 0;
    const mins = parseInt(minInput.value) || 0;
    const secs = parseInt(secInput.value) || 0;

    if (!validatedInput(hrs, mins, secs)) {
        return;
    }
    const { transformedhrs, transformedmins, transformedsecs } = TransformedInput(
    hrs,
    mins,
    secs
  );
  console.log(transformedhrs, transformedmins, transformedsecs)
  const totalTimeInSeconds =
    transformedhrs * 60 * 60 + transformedmins * 60 + transformedsecs;
  timer(totalTimeInSeconds);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

continueBtn.addEventListener("click", () => {
  timer(saveTimeLeft);
  continueBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
  clearInterval(counterId);
  pauseBtn.style.display = "none";
  continueBtn.style.display = "block";
});

resetBtn.addEventListener("click", () => {
  saveTimeLeft = 0;
  clearInterval(counterId);
  minInput.value = "00";
  hrInput.value = "00";
  secInput.value = "00";
  continueBtn.style.display = "none";
  pauseBtn.style.display = "none";
  startBtn.style.display = "block";
  resetBtn.style.display = "block";
});