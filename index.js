// index.js

// Приклад простого JavaScript коду
for (let i = 1; i <= 200; i++) {
    console.log("Це рядок номер " + i);
}

// Функція для привітання
function greet(name) {
    return "Привіт, " + name + "!";
}

// Виклик функції greet
console.log(greet("Світ"));

// Додаткові функції для демонстрації
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Ділення на нуль!";
    }
    return a / b;
}

// Виклики математичних функцій
console.log("Сума 5 і 3: " + add(5, 3));
console.log("Різниця 5 і 3: " + subtract(5, 3));
console.log("Добуток 5 і 3: " + multiply(5, 3));
console.log("Частка 5 і 3: " + divide(5, 3));

// Генерація додаткових рядків
for (let i = 201; i <= 400; i++) {
    console.log("Це додатковий рядок номер " + i);
}

// Додаткові привітання
const names = ["Аня", "Богдан", "Віра", "Григорій", "Діана"];
names.forEach(name => {
    console.log(greet(name));
});

// Виведення квадратів чисел від 1 до 20
for (let i = 1; i <= 20; i++) {
    console.log("Квадрат числа " + i + " дорівнює " + (i * i));
}

// Виведення факторіалів чисел від 1 до 10
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

for (let i = 1; i <= 10; i++) {
    console.log("Факторіал числа " + i + " дорівнює " + factorial(i));
}

// Завершення програми
console.log("Програма завершена.");