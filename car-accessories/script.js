// BURGER MENU
const bars = document.querySelector('i.fa-bars');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside');

bars.addEventListener('click', function () {
  bars.classList.toggle('rotate');
  nav.classList.toggle('hidden');
  aside.classList.toggle('hidden');
});

// Currency
const currency = document.querySelector('.currency');
const dropdownMenu = document.querySelector('.dropdown-menu');

const currencyChange = document.querySelectorAll('.currency-change');
const sign = document.querySelectorAll('.sign');

document.querySelector('.pln').addEventListener('click', function () {
  for (let i = 0; i < currencyChange.length; i++) {
    function pln(num) {
      currencyChange[i].innerHTML = (
        Number(currencyChange[i].innerHTML) * num
      ).toFixed(2);
      sign[i].innerHTML = 'zł';
    }
    if (currency.innerHTML === '$ USD') pln(3.974); //3.9699570815450643776824034334764
    if (currency.innerHTML === '€ EUR') pln(4.6134); //4.609191919191919
  }
  currency.innerHTML = 'PLN';
});

document.querySelector('.usd').addEventListener('click', function () {
  for (let i = 0; i < currencyChange.length; i++) {
    function usd(num) {
      currencyChange[i].innerHTML = (
        Number(currencyChange[i].innerHTML) * num
      ).toFixed(2);
      sign[i].innerHTML = '$';
    }
    if (currency.innerHTML === 'PLN')
      usd(0.2516); //0.25188916876574307304785894206549
    else if (currency.innerHTML === '€ EUR') usd(1.1609); //1.160251256281407
  }
  currency.innerHTML = '$ USD';
});

document.querySelector('.eur').addEventListener('click', function () {
  for (let i = 0; i < currencyChange.length; i++) {
    function euro(num) {
      currencyChange[i].innerHTML = (
        Number(currencyChange[i].innerHTML) * num
      ).toFixed(2);
      sign[i].innerHTML = '€';
    }
    if (currency.innerHTML === 'PLN') euro(0.2168); //0.2169457526600384
    else if (currency.innerHTML === '$ USD') euro(0.8614); //0.8619188577398572
  }
  currency.innerHTML = '€ EUR';
});

currency.addEventListener('click', function () {
  dropdownMenu.classList.toggle('show-dropdown');
});

// Answer section
const answerCircle = document.querySelectorAll('.circle');
const answer = document.querySelectorAll('.answer');

answerCircle.forEach((btn, i) =>
  btn.addEventListener('click', () => {
    answer[i].classList.toggle('show');
    btn.classList.toggle('answersRotate');
  })
);

// Slider - answer section
const img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const imgStart = document.querySelector('.slider img');
let i = 0;
function slider() {
  imgStart.src = `img/${img[i]}`;

  if (i < img.length - 1) i++;
  else i = 0;

  setTimeout(slider, 5000);
}
slider();

// Clock - footer
function clock() {
  let clockDoc = document.querySelector('.clock');
  let date = new Date();

  let hours = date.getHours().toString();
  let min = date.getMinutes().toString();
  let sec = date.getSeconds().toString();

  if (hours.length == 1) hours = `0${hours}`;
  if (min.length == 1) min = `0${min}`;
  if (sec.length == 1) sec = `0${sec}`;

  clockDoc.innerHTML = `${hours}:${min}:${sec}`;

  setTimeout(clock, 1000);
}

clock();
