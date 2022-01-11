const Validator = require('../validator')

describe('Tests for class Validator isEmail', () => {
    test('Test for method isEmail true', () => {
        expect(Validator.isEmail('loonik@mail.ru')).toBe(true)
    })
    test('Test for method isEmail false', () => {
        expect(Validator.isEmail('loonik@ru')).toBe(false)
    })
})
describe('Tests for class Validator isDomain', () => {
    test('Test for method isDomain true', () => {
        expect(Validator.isDomain('loonik.net')).toBe(true)
    })
    test('Test for method isDomain false', () => {
        expect(Validator.isDomain('loonik.net@ua')).toBe(false)
    })
})
describe('Tests for class Validator isDate', () => {
    test('Test for method isDate true', () => {
        expect(Validator.isDate('12.05.2020')).toBe(true)
    })
    test('Test for method isDate false', () => {
        expect(Validator.isDate('55.05.2020')).toBe(false)
    })
    test('123',()=>{
        expect(Validator.isDate('123')).toEqual(false);
    })
})
describe('Tests for class Validator isPhone', () => {
    test('Test for method isDate true', () => {
        expect(Validator.isPhone('+38(029)817-68-92')).toBe(true)
    })
    test('Test for method isDate false',() => {
        expect(Validator.isPhone('+380292176892')).toBe(false)
    })
})