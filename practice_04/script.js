// 1) Cоздать функцию, которая возвращает true или false,
// в зависимости от того, может ли сумма любых двух чисел из массива быть равной заданному значению.
function isSum(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === val) {
                return true;
            }
        }
    }
    return false;
}
// console.log(isSum([1,2,4,9], 8))
// console.log(isSum([1,2,4,4], 8))

// 2) Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
function flatten(array) {
    let arr1 = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            arr1 = arr1.concat(flatten(array[i]));
        } else arr1.push(array[i]);
    }
    return arr1;
}

// console.log(flatten([1, 2, [3, 4, [5]]]))

// 3) Напишите функцию, которая разделяет массив на части заданного размера.
function arrSplit(array, size) {
    let arr = [];
    let index = 0;
    while (index < array.length) {
        arr.push(array.slice(index, size + index));
        index = index + size;
    }
    return arr;
}
// console.log(arrSplit([ 1, 2, 3, 4, 5 ], 2))

// 4) Напишите функцию, которая поверхностно сравнивает два объекта.
function isEqual(firstObj, secondObj) {
    let firstObjKeys = Object.keys(firstObj);
    let secondObjKeys = Object.keys(secondObj);

    if (firstObjKeys.length !== secondObjKeys.length) {
        return false;
    }

    return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
}
// console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }))
// console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 }))
