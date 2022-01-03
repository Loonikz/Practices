// 1) Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений
function intersection(firstObj, secondObj) {
    const firstObjKeys = Object.keys(firstObj);

    return firstObjKeys.reduce((acc = {}, key) => {

        if (firstObj[key] === secondObj[key]) {
            acc = {
                ...acc,
                [key]: firstObj[key],
            };
        }

        return acc;
    }, {});
}
// console.log(intersection({ a: 1, b: 2 }, { c: 1, b: 2 }))

// 2) Напишите функцию, которая делает глубокое сравнение объектов.
function deepCompObj(obj1, obj2)
{
    const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i++) {
        const prop = props1[i];
        const deep = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';

        if (((deep === false) && (obj1[prop] !== obj2[prop])) || ((deep === true) && (deepCompObj(obj1[prop], obj2[prop])) === false)) {
            return false;
        }
    }

    return true;
}
// console.log(deepCompObj({a:1, b: {d: 1}}, {a: 1, b: {c: 1}}));
// console.log(deepCompObj({a:1, b: {d: 1}}, {a:1, b: {d: 1}}));

// 3) Напишите функцию, которая убирает повторяющиеся значения в массиве
function indexFilter(arr) {
    arr = arr.filter((item, index) =>
        arr.indexOf(item) === index)
    return arr
}
// console.log(indexFilter([1,2,3,1,2,5]))

// 4) Напишите функцию, которая делает поверхностную проверку объекта на пустоту
function isEmpty(object) {
    const objectKeys = Object.keys(object);

    if (objectKeys.length === 0) {
        return true;
    }

    return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
}
// console.log(isEmpty({}))
// console.log(isEmpty({ a: undefined }))
// console.log(isEmpty({ a: 1 }))

// 5) Напишите свою реализацию метода bind\
function getBind(obj)
{
    let sum = bind(obj);
    sum += 300;
    return sum;
}
function bind(obj)
{
    let a2 = obj.a;
    let b2 = obj.b;
    return a2 + b2;
}
// console.log(getBind({a: 10, b: 20}))
// console.log(bind({a: 10, b: 20}))