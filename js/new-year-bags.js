const bagsItems = document.querySelectorAll('.bags-lottery__item');
const bagItem1 = document.getElementById("bags-lottery__item1");
const bagItem2 = document.getElementById("bags-lottery__item2");
const bagItem3 = document.getElementById("bags-lottery__item3");
const spinResultWrapper = document.querySelector(".spin-result-wrapper");
const orderBlock = document.querySelector("#order");
const orderBlockForm = document.querySelector(".order_block_form");
const bagsWrapper = document.querySelector('.bags-lottery__wrapper');
const bagsSales = document.querySelectorAll('.bags-lottery__sale');
const bagSale1 = document.getElementById("bags-lottery__sale-text1");
const bagSale2 = document.getElementById("bags-lottery__sale-text2");
const bagSale3 = document.getElementById("bags-lottery__sale-text3");
const discount = "50%";
let time = 600;
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
const openBags = (evt) => {
  evt.currentTarget.classList.add("openPrize");
  setTimeout(function () {
    spinResultWrapper.style.display = "block";
    setTimeout(function () {
      orderBlock.style.display = "block";
      bagsWrapper.style.display = "none";
      startTimer();
    }, 3500);
  }, 2500);
  bagsItems.forEach(() => {
    if (bagItem1.classList.contains("openPrize")) {
      bagSale1.innerHTML = discount;
      bagSale2.innerHTML = discount === "25%" ? "10%" : "25%";
      bagSale3.innerHTML = discount === "25%" ? "10%" : "10%";
    } else if (bagItem2.classList.contains("openPrize")) {
      bagSale2.innerHTML = discount;
      bagSale1.innerHTML = discount === "25%" ? "10%" : "10%";
      bagSale3.innerHTML = discount === "25%" ? "10%" : "25%";
    } else if (bagItem3.classList.contains("openPrize")) {
      bagSale1.innerHTML = discount === "25%" ? "10%" : "25%";
      bagSale3.innerHTML = discount;
      bagSale2.innerHTML = discount === "25%" ? "10%" : "10%";
    }
  });
  for (let i = 0; i < bagsItems.length; i++) {
    if (!bagsItems[i].classList.contains("openPrize")) {
      setTimeout(function () {
        bagsItems[i].classList.add("open");
      }, 2500);
    }
  }
  for (let j = 0; j < bagsItems.length; j++) {
    bagsItems[j].removeEventListener("click", openBags);
  }
}
bagsItems.forEach((bag) => {
  bag.addEventListener('click', openBags);
})
let closePopup = document.querySelector(".close-popup");
jQuery(".pop-up-button").click(function (a) {
  jQuery('.spin-result-wrapper').fadeOut();
  a.preventDefault()
  jQuery('.spin-result-wrapper').fadeOut();
});
jQuery(".close-popup, .pop-up-button").click(function (a) {
  jQuery('.spin-result-wrapper').fadeOut();
  a.preventDefault()
  jQuery('.spin-result-wrapper').fadeOut();
});


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


