const isPalindrome = require('../isPalindrome');
describe('isPalindrome', () => {
    test('test palindrome', () => {
        expect(isPalindrome('abcdcba')).toBe(true);
        expect(isPalindrome('ghjkmnj')).toBe(false);
    })
})