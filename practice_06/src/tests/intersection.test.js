const intersection = require('../intersection');
describe('intersection', () => {
    test('should return result', () =>{
        expect(intersection({ a: 1, b: 2 }, { c: 1, b: 2 })).toStrictEqual({ b: 2 })
    })
    test('should return false', () =>{
        expect(intersection({ a: 1, b: 3 }, { c: 1, b: 2 })).toStrictEqual(false)
    })
})