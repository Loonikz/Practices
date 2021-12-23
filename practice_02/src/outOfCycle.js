function outOfCycle() {
    let result = []
    for (let i = 0; i <= 15; i++) {
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                result = [i, j - 1];
                break;
            }
        }
    }
    return result
}

module.exports = outOfCycle;
