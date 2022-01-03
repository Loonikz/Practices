const indexFilter = require('../indexFilter');
describe('indexFilter', () => {
    test('should return result', () =>{
        expect(indexFilter([1,2,3,1,2,5])).toStrictEqual([ 1, 2, 3, 5 ])
    })
})