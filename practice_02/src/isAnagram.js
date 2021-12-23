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

module.exports = isAnagram;