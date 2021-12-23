const checkValidator = require('../checkValidator');
describe('checkValidator', () => {
    test('test validator', () => {
        expect((checkValidator( 1 ))).toBe('incorrect input data');
        expect((checkValidator( '!sfsf ' ))).toBe('INVALID');
        expect((checkValidator( 's' ))).toBe('INVALID');
        expect((checkValidator( 'S' ))).toBe('INVALID');
        expect((checkValidator( 'ss' ))).toBe('INVALID');
        expect((checkValidator( 'Sdgsgw! ' ))).toBe('VALID');
    })
})