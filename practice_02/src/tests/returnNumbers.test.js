const returnNumbers = require('../returnNumbers');
describe('returnNumbers', () => {
    test('test return of numbers', () => {
        expect(returnNumbers(15)).toStrictEqual('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive ');
        expect(returnNumbers(5)).toStrictEqual('1 2 three 4 five ');
    })
})