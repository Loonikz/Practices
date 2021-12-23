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

module.exports = returnNumbers;