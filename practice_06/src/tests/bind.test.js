const getBind = require('../bind');
const bind = require('../bind');
describe('getBind', () => {
    test('should return result', () =>{
        expect(getBind({a: 10, b: 20})).toStrictEqual(30)
    })
})
describe('bind', () => {
    test('should return result', () =>{
        expect(bind({a: 10, b: 20})).toStrictEqual(30)
    })
})