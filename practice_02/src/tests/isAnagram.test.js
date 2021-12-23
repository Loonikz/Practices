const isAnagram = require('../isAnagram');
describe('isAnagram', () => {
    test('test is anagram', () => {
        expect(isAnagram('Пи ла','Ли па')).toStrictEqual('Строки являются анаграммами');
        expect(isAnagram('Пи ла','Кипа')).toStrictEqual('Строки не являются анаграммами');
    })
})