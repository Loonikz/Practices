import {decodeMorse} from '../decodeMorse'

describe('tests for decodeMorse', () => {
    test('Should return result HEY JUDE', () => {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe("HEY JUDE")
    })
    test('Should return result SOS(special code)', () => {
        expect(decodeMorse('...---...')).toBe("SOS")
    })
})