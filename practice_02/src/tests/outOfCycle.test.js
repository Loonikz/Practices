const outOfCycle = require('../outOfCycle');
describe('outOfCycle', () => {
    test('test out of cycle', () => {
        expect(outOfCycle()).toStrictEqual([15, 14]);
    })
})