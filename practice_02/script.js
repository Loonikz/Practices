// 1) Написать функцию, выводящую в консоль числа от 1 до n (где n —
// это целое число), которая функция принимает в качестве параметра, с
// такими условиями:
// вывод three вместо чисел, кратных 3;
// вывод five вместо чисел, кратных 5;
// вывод threeFive вместо чисел, кратных как 3, так и 5.
function returnNumbers(x) {
    let result = '';

    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = result.concat('threeFive ');
        } else if (i % 3 === 0) {
            result = result.concat('three ');
        } else if (i % 5 === 0) {
            result = result.concat('five ')
        } else {
            result = result.concat(`${i} `);
        }
    }
    return result;
}

// const res = returnNumbers(15);
// console.log(res);

// 2) Нужно выйти из цикла, изменив только две отмеченные строки.
// Результат в консоли сейчас останавливается на 19 19. Должен на 15 14.
function outOfCycle() {
    let result = []
    for (let i = 0; i <= 15; i++) {
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                result = [i, j - 1];
                break;
            }
            // console.log(i, j);
        }
    }
    return result;
}

console.log(outOfCycle())

// 3) Нужно написать функцию, которая проверяет, являются ли
// две строки анаграммами, причем регистр букв не имеет
// значения. Учитываются лишь символы; пробелы или знаки
// препинания в расчет не берутся.
// Анаграмма- слово, которое содержит в
function isAnagram(strOne, strTwo) {
    let strOneUC = strOne.toLowerCase()
    let strTwoUC = strTwo.toLowerCase()
    strOne = strOneUC.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    strTwo = strTwoUC.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")

    let str1 = strOne.split('').sort().join('');
    let str2 = strTwo.split('').sort().join('');
    str1 = str1.trim()
    str2 = str2.trim()

    if (str1 === str2) {
        return 'Строки являются анаграммами'
    } else {
        return 'Строки не являются анаграммами'
    }
}

console.log(isAnagram('Пи ла','Ли па'))
console.log(isAnagram('Пи ла','Кипа'))