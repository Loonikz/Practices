// 1)Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
//     который параметром принимает строку, а возвращает ее в перевернутом виде, метод
// ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее
// первую букву заглавной и метод ucWords, который принимает строку и делает заглавной
// первую букву каждого слова этой строки.

class MyString {

    validate(string) {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        }
        return true;
    }

    reverse(string) {
        if (!this.validate(string)) {
            return false;
        }
        return string.split('').reverse().join('');
    }

    ucFirst(string) {
        if (!this.validate(string)) {
            return false;
        }
        return string[0].toUpperCase() + string.slice(1)
    }

    ucWords(string) {
        if (!this.validate(string)) {
            return false;
        }

        let strArr = string.split(' ');
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = this.ucFirst(strArr[i])
        }
        return strArr.join(' ')
    }
}

str = new MyString()

module.exports = str;