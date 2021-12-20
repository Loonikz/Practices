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
    (function flat(array) {
        array.forEach(function(el) {
            if (Array.isArray(el)) flat(el);
            else arr1.push(el);
        });
    })(array);
    return arr1;
}

// console.log(flatten([1, 2, [3, 4, [5]]]))

// 3) Напишите функцию, которая разделяет массив на части заданного размера.
function chunk(array, size) {
    let chunkedArr = [];
    let index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index = index + size;
    }
    return chunkedArr;
}
// console.log(chunk([ 1, 2, 3, 4, 5 ], 2))

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
