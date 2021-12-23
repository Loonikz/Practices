// 1) Написать функцию, которая проверяет является ли строка палиндромом
function isPalindrome(str){
    let strLen = str.length
    let result = ''
    for (let i = 0; i < strLen; i++){
        if (str[i] === str[strLen - 1 - i]){
            result = 'true'
        }
        else {
            result = 'false'
            return result
        }
    }
    return result
}
// console.log(isPalindrome('abcdcba'))

// 2) Написать функцию, которая принимает аргумент и валидирует его
// по правилам:
//     - Строка должна содержать буквы и специальные символы
// включая пробел: [ , ! , : , - , ? , . , , ]
// - Длина строки должна быть больше 2 символов и меньше 20
// - Начинаться строка должна с заглавной буквы
// Функция должна вернуть “VALID” или “INVALID”, в случае если в
// аргумент передана не строка вывести ‘Incorrect input data’
// Без использования регулярных выражений
function checkValidator(a){
    let result = ''
    if (typeof a !== 'string'){
        return 'incorrect input data'
    }
    if (a.length < 2 || a.length > 20){
        return 'INVALID'
    } else {
        result = 'VALID'
    }
    if (a.includes(',') || a.includes('!') || a.includes(':') || a.includes('-') || a.includes('?') || a.includes('.')
        ||a.includes(' ') || a[0] === a[0].toUpperCase()) {
        result = 'VALID'
    } else {
        return 'INVALID'
    }
    if (a[0] !== ',' && a[0] !== '!' && a[0] !== ':' && a[0] !== '-' && a[0] !== '?' && a[0] !== '.' && a[0] !== ' ') {
        result = 'VALID'
    } else {
        return 'INVALID'
    }
    return result
}
// console.log(checkValidator( 1 ))
// console.log(checkValidator( '!sfsf ' ))
// console.log(checkValidator( 's' ))
// console.log(checkValidator( 'S' ))
// console.log(checkValidator( ' ss' ))
// console.log(checkValidator( 'Sdgsgw!' ))

// 3) Создайте функцию, которая принимает два аргумента: число,
// представленное в виде строки, и число. Если аргумент типа number
// делится на 3, 5 и 15 без остатка - умножьте его на -1. Функция должна
// возвращать числовую сумму двух аргументов.
function sumNum(a, b){
    let result
    if (b % 3 === 0 && b % 5 === 0 && b % 15 === 0 ){
        b = b * -1
        result = +a + b
    } else {
        result = +a + b
    }
    return result
}
// console.log(sumNum('15',45))
// console.log(sumNum('10',40))

// 4) Создайте функцию, которая проверяет число на соответствие трем
// различным требованиям:
// - число простое
// - число четное
// - число кратно 10
// Каждый должен возвращать истину или ложь, которые должны
// быть представлены в виде массива.
// Число всегда будет целым, положительным или отрицательным.
// Обратите внимание, что отрицательные числа не могут быть простыми
// числами, но могут быть кратными 10.
function checkNum(value) {
    let result = [false, false, false]
    if (value === 0) {
        return result
    }
    if (value > 0) {
        result[0] = true
        for (let i = 2; i < value; i++) {
            if (value % i === 0) {
                result[0] = false
            }
        }
    }
    if (value % 2 === 0) {
        result[1] = true
    }
    if (value % 10 === 0) {
        result[2] = true
    }
    return result
}
// console.log(checkNum(10))
// console.log(checkNum(-20))
// console.log(checkNum(7))