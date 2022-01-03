const isEmpty = require('../isEmpty');
describe('indexFilter', () => {
    test('should return true', () =>{
        expect(isEmpty({ a: undefined })).toStrictEqual(true)
    })
    test('should return true', () =>{
        expect(isEmpty({})).toStrictEqual(true)
    })
    test('should return false', () =>{
        expect(isEmpty({ a: 1 })).toStrictEqual(false)
    })
})