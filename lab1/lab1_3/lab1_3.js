"use strict";

const link = document.getElementById("mainPageLink");

function checkNumber() {
  let num;

  while (true) {
    num = prompt("Введите число, больше 100:", "");

    if (num === null) {
      return false;
    }

    if (num > 100) {
      return true;
    }
  }
}

link.addEventListener("click", function (event) {
  const isSuccess = checkNumber();

  if (!isSuccess) {
    let cancelConfirm = confirm("Вы не ввели число больше 100. Точно хотите перейти на главную страницу?"),

      if (!cancelConfirm) {
        event.preventDefault();
      }
  }
});
