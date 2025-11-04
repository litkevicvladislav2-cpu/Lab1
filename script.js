console.log("Мене звати Владислав");
console.info("Мені 19 років");
console.warn("Мій улюблений колір — синій");
console.log("Мій улюблений предмет — інформатика");
console.log("Привіт усім, хто читає цей код! 😊");

let name = "Владислав";
let age = 19;
let isStudent = true;
const favoriteNumber = 7;
let city = "Харків";
let favoriteColor = "синій";
let studyYears = 3;

// Спробуй змінити const — отримаєш помилку!
// favoriteNumber = 10; // ❌ TypeError

console.log(name, age, isStudent, favoriteNumber, city, favoriteColor, studyYears);

let number = 42;
let text = "Hello World";
let isTrue = true;
let nothing = null;
let notDefined = undefined;

let hobby = "Програмування";
let score = 99.9;
let isCool = false;

console.log(typeof number);
console.log(typeof text);
console.log(typeof isTrue);
console.log(typeof nothing);
console.log(typeof notDefined);
console.log(typeof hobby);
console.log(typeof score);
console.log(typeof isCool);

console.log(Number("123")); // рядок → число
console.log(String(456));   // число → рядок

let userName = prompt("Як вас звати?");
let userAge = prompt("Скільки вам років?");
let userCity = prompt("З якого ви міста?");
let userColor = prompt("Ваш улюблений колір?");

let message = `Привіт, ${userName}! Тобі ${userAge} років, ти з міста ${userCity}, і твій улюблений колір — ${userColor}.`;

alert(message);
console.log(message);

let length = prompt("Введіть довжину прямокутника:");
let width = prompt("Введіть ширину прямокутника:");

length = Number(length);
width = Number(width);

let area = length * width;
let perimeter = 2 * (length + width);

console.log(`Площа прямокутника: ${area}`);
console.log(`Периметр прямокутника: ${perimeter}`);

alert(`Площа: ${area}, Периметр: ${perimeter}`);

// Перетворення см у метри
let cm = prompt("Введіть значення у сантиметрах:");
let meters = cm / 100;
alert(`${cm} см = ${meters} м`);

// Середнє значення двох чисел
let a = Number(prompt("Введіть перше число:"));
let b = Number(prompt("Введіть друге число:"));
let avg = (a + b) / 2;
alert(`Середнє значення: ${avg}`);

let choice = prompt("Що ви хочете конвертувати? (1 - метри в см, 2 - см у метри)");

if (choice == "1") {
  let meters = Number(prompt("Введіть метри:"));
  let cm = meters * 100;
  alert(`${meters} метрів = ${cm} сантиметрів`);
} else if (choice == "2") {
  let cm = Number(prompt("Введіть сантиметри:"));
  let meters = cm / 100;
  alert(`${cm} сантиметрів = ${meters} метрів`);
} else {
  alert("Некоректний вибір!");
}

let birthYear = prompt("Введіть ваш рік народження:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

alert(`Вам ${age} років!`);
console.log(`Рік народження: ${birthYear}, Вік: ${age}`);



