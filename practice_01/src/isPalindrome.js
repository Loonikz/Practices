function isPalindrome(str){
    let strLen = str.length
    let result = ''
    for (let i = 0; i < strLen; i++){
        if (str[i] === str[strLen - 1 - i]){
            result = true
        }
        else {
            result = false
        }
    }
    return result
}

module.exports = isPalindrome;