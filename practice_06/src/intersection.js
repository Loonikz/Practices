function intersection(firstObj, secondObj) {
    const firstObjKeys = Object.keys(firstObj);

    return firstObjKeys.reduce((acc = {}, key) => {

        if (firstObj[key] === secondObj[key]) {
            acc = {
                ...acc,
                [key]: firstObj[key],
            };
        } else {
            return false
        }

        return acc;
    }, {});
}

module.exports = intersection;