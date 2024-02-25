const clock = document.getElementById("clock");

setInterval(() => {
  let myDate = new Date();
  clock.innerHTML = myDate.toLocaleTimeString();
}, 1000);
