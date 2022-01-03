function indexFilter(arr) {
    arr = arr.filter((item, index) =>
        arr.indexOf(item) === index)
    return arr
}

module.exports = indexFilter;