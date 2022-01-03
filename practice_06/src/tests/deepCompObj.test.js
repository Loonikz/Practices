const deepCompObj = require('../deepCompObj');
describe('deepCompObj', () => {
    test('should return true', () =>{
        expect(deepCompObj({a:1, b: {d: 1}}, {a:1, b: {d: 1}})).toStrictEqual(true)
    })
    test('should return false', () =>{
        expect(deepCompObj({a:1, b: {d: 1}}, {a: 1, b: {c: 1}})).toStrictEqual(false)
    })
})