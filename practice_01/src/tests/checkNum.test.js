const checkNum = require('../checkNum');
describe('checkNum', () => {
    test('test check of numbers', () => {
        expect(checkNum(10)).toStrictEqual([ false, true, true ]);
        expect(checkNum(-20)).toStrictEqual([ false, true, true ]);
        expect(checkNum(7)).toStrictEqual([ true, false, false ]);
        expect(checkNum(0)).toStrictEqual([ false, false, false ]);
    })
})