function isEmpty(object) {
    const objectKeys = Object.keys(object);

    if (objectKeys.length === 0) {
        return true;
    }

    return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
}

module.exports = isEmpty;