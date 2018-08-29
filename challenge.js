var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);
document.getElementById('-').addEventListener('click', clickMinus);
document.getElementById('+').addEventListener('click', clickPlus);
var paused = false;
document.getElementById('pause').addEventListener('click', togglePause);


function setTime() {
  if (!paused) {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function clickPlus() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

function clickMinus() {
  --totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

function clickHeart(){

}

function togglePause(){
  paused = paused ? false : true
  if (paused === true) {
    document.getElementById('pause').innerHTML = 'resume'
  } else {
    document.getElementById('pause').innerHTML = 'pause'
  }
}
