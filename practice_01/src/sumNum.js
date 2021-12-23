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

module.exports = sumNum;