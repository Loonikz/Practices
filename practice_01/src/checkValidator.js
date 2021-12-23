function checkValidator(a){
    let result = ''
    if (typeof a !== 'string'){
        return 'incorrect input data'
    }
    if (a.length < 2 || a.length > 20){
        return 'INVALID'
    } else {
        result = 'VALID'
    }
    if (a.includes(',') || a.includes('!') || a.includes(':') || a.includes('-') || a.includes('?') || a.includes('.')
        ||a.includes(' ') || a[0] === a[0].toUpperCase()) {
        result = 'VALID'
    } else {
        return 'INVALID'
    }
    if (a[0] !== ',' && a[0] !== '!' && a[0] !== ':' && a[0] !== '-' && a[0] !== '?' && a[0] !== '.' && a[0] !== ' ') {
        result = 'VALID'
    } else {
        return 'INVALID'
    }
    return result
}

module.exports = checkValidator;