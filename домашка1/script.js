function program1() {
    let age = prompt("Введите возраст:");
    if (age < 65) {
        console.log("Вам ещё рано на пенсию");
    } else {
        console.log("Поздравляем с пенсионным возрастом!");
    }
}

function program2() {
    let a = prompt("Введите первое число:");
    let b = prompt("Введите второе число:");
    if (a > b) {
        console.log("Первое число больше");
    } else if (a < b) {
        console.log("Второе число больше");
    } else {
        console.log("Числа равны");
    }
}

function program3() {
    let n = prompt("Введите число:");
    if (n % 2 == 0) {
        console.log("Это чётное число");
    } else {
        console.log("Это нечётное число");
    }
}

function program4() {
    let n = prompt("Введите число:");
    if (n > 100) {
        console.log("Большое число");
    } else if (n < 100) {
        console.log("Маленькое число");
    } else {
        console.log("Точно 100!");
    }
}

function program5() {
    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");
    if (login == "admin" && password == "12345") {
        console.log("Добро пожаловать!");
    } else {
        console.log("Неверный логин или пароль");
    }
}

function program6() {
    let year = prompt("Введите год:");
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("Это високосный год");
    } else {
        console.log("Это не високосный год");
    }
}

function program7() {
    let secret = 7;
    let guess = prompt("Угадай число от 1 до 10:");
    if (guess == secret) {
        console.log("Вы угадали!");
    } else {
        console.log("Попробуйте ещё раз!");
    }
}