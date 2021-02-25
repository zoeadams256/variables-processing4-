var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("What is the bill?"));

var bill = num1 * 0.07;

var taxedbill = num1 + bill;

var tip = taxedbill * 0.05;

var finalbill = tip + taxedbill;

containerEle.innerHTML = finalbill;