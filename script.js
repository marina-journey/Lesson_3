/*let num = 18;
console.log(num);
let age = +prompt("What is your age?");

if (isNan = age)
if (num === age) {
  console.log("Allow");
} else if (num < age) {
  console.log("Allow");
} else {
  if (age < 12) {
    console.log("Try another");
  }
   else {
    console.log("Forbidden");
  }
}

console.log("Game over");*/




let age = prompt("Ваш возраст?");
let exp = prompt("Ваш опыт работы?");
let salary = prompt("Желаемый уровень з/пл (грн)?");
let schedule = prompt("Желаемый график работы (кол-во дней в неделю)?");

if (age < 30) {
  alert("Извините, Вы не подходите на должность:(");
} else {
  if (exp < 3) {
    alert("Извините, Вы не подходите на должность:(");
  } else {
    if (salary > 10000) {
      alert("Извините, Вы не подходите на должность:(");
    } else {
      if (schedule < 5) {
        alert("Извините, Вы не подходите на должность:(");
      } else {
      alert("Добро пожаловать в команду:)");
      }
    }
  }
}

