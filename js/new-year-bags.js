const bagsItems = document.querySelectorAll('.bags-lottery__item');
const bagItem1 = document.getElementById("bags-lottery__item1");
const bagItem2 = document.getElementById("bags-lottery__item2");
const bagItem3 = document.getElementById("bags-lottery__item3");
const spinResultWrapper = document.querySelector(".spin-result-wrapper");
const orderBlock = document.querySelector("#order");
let time = 1800;
let intr;
let tick = () => {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  mins = mins >= 10 ? mins : "0" + mins;
  jQuery("#min").html(mins);
  jQuery("#sec").html(secs);
}
const startTimer = () => {
  intr = setInterval(tick, 1000);
}
startTimer();

(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const offset = -90,
        element = document.querySelector(this.getAttribute('href')),
        target = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({top: target, behavior: 'smooth'});
    });
  });
})();


