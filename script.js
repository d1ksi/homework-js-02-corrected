// var a = 5;
// var b, c;
// b = (a * 5);
// b = (c = b / 2);
// //добавляем скобки 
// b = ((a) * (5))
// b = ((c) = (b / 2));
// //убираем скобки полностью 
// b = a * 5;
// b = c = b/2;


// let age = prompt('Сколько вам лет?');
// let born = 2023 - age;
// alert(`Вы родились в ${born} году!`);


// let celsius = prompt('Сколько у вас градусов Цельсия?'); 22
// let number = 9 / 5;
// let fahrenheit = celsius * number + 32;
// alert(`У вас ${fahrenheit} по Фаренгейту`);


// let a = 21;
// let b = 4;
// let calculator = Math.floor(a / b);


// let grn = prompt('Сума для обмена');
// const rate = 38.9; //Курс $ в ПБ
// let count = grn / rate;
// alert(`Вы получите ${count} $`);


// // Введення констант через prompt
// const red = parseInt(prompt("Введіть значення червоного кольору від 16 до 255:"));
// const green = parseInt(prompt("Введіть значення зеленого кольору від 16 до 255:"));
// const blue = parseInt(prompt("Введіть значення синього кольору від 16 до 255:"));

// // Перетворення в шістнадцяткову систему числення
// const hexRed = red.toString(16);
// const hexGreen = green.toString(16);
// const hexBlue = blue.toString(16);

// // Форматування кольору в CSS-форматі
// const color = "#" + hexRed + hexGreen + hexBlue;

// // Виведення результату через alert
// alert("Колір у форматі #RRGGBB: " + color);


let floors = 9; //  кол-во этажей
let porches = 5; // число подъездов
let apartmentsPerFloor = 4; // квартир на этаж
let apartment = prompt("Номер квартиры"); // номер квартиры

let floor = Math.ceil(apartment / apartmentsPerFloor); // этаж относительно дома

let porch = Math.ceil(floor / floors); // подъезд относительно дома.

floor -= (porch - 1) * floors; // этаж относительно подъезда
alert("Квартира с номером " + apartment + " находится в подъезде № " + porch + " на " + floor + " этаже");
