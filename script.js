let [Seconds, Minutes, Hours] = [0, 0, 0];
let displaytime = document.getElementById("displaytime");
let timer = null;

function stopWatch() {
  Seconds++;
  if (Seconds == 60) {
    Seconds = 0;
    Minutes++;
  }
  if (Minutes == 60) {
    Minutes = 0;
    Hours++;
  }

  let h = Hours < 10 ? "0" + Hours : Hours;
  let m = Minutes < 10 ? "0" + Minutes : Minutes;
  let s = Seconds < 10 ? "0" + Seconds : Seconds;

  displaytime.innerHTML = h + ":" + m + ":" + s;
}

function WatchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function WatchStop() {
  clearInterval(timer);
}

function WatchReset() {
  clearInterval(timer);
  [Seconds, Minutes, Hours] = [0, 0, 0];
  displaytime.innerHTML = "00:00:00";
}
