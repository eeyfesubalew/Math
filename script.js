"use strict";
const result = document.querySelector(".result");
const choise1 = document.querySelector(".choise-1");
const choise2 = document.querySelector(".choise-2");
const choise3 = document.querySelector(".choise-3");
const choises = document.querySelectorAll(".choise");
let res = 0;
const calcFun = function () {
  let num1 = Math.floor(Math.random() * 10 + 1);
  let num2 = Math.floor(Math.random() * 10 + 1);
  res = num1 + num2;
  let option1 = Math.floor(Math.random() * 20 + 1);
  let option2 = Math.floor(Math.random() * 20 + 1);
  let option3 = res;
  let swithAnswer = [];
  let array = [option1, option2, option3];
  for (let i = array.length; i--; ) {
    swithAnswer.push(array.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  }
  choise1.innerHTML = swithAnswer[0];
  choise2.innerHTML = swithAnswer[1];
  choise3.innerHTML = swithAnswer[2];

  const markup = `
        <span class="first">${num1}</span>
        <span class="plus">+</span>
        <span class="second">${num2}</span>
        <span class="equal">=</span>
        <span class="question">${res}</span>
    `;
  result.innerHTML = "";
  result.insertAdjacentHTML("afterbegin", markup);
};
calcFun();

choise1.addEventListener("click", function () {
  if (+choise1.textContent === res) {
    calcFun();
  }
});
choise2.addEventListener("click", function () {
  if (+choise2.textContent === res) {
    calcFun();
  }
});

choise3.addEventListener("click", function () {
  if (+choise3.textContent === res) {
    calcFun();
  }
});
