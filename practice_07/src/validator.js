// 2)Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет
// метод isEmail параметром принимает строку и проверяет, является ли она корректным
// емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того,
//     класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate
// для проверки даты и метод isPhone для проверки телефона

class Validator {

    isEmail(email){
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(String(email).toLowerCase());
    }

    isDomain(domain){
        return /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/.test(String(domain));
    }

    isDate(date){
            const arrayDate = String(date).split(".");
            if (arrayDate.length !== 3) {
                return false;
            }

            const stringDate = arrayDate[2] + '-' + arrayDate[1] + '-' + arrayDate[0];

            return String(new Date(stringDate)) !== 'Invalid Date';

    }

    isPhone(phone){
        return /^\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}$/.test(String(phone));
    }
}

validator = new Validator()

module.exports = validator;
