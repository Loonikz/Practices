const sumNum = require('../sumNum');
describe('sumNum', () => {
    test('test sum of numbers', () => {
        expect(sumNum('15', 45)).toBe(-30);
        expect(sumNum('10', 40)).toBe(50);
    })
})