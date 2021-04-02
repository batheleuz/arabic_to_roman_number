import {NumeralRomanConverter} from '../domain/NumeralRomanConverter';

export const convertArabicNumber = (request, response) => {
    let number = parseInt(request.params.arabicNumber)

    let numeralRoman = NumeralRomanConverter.romanize(number)

    response.json({
        numeralRoman : numeralRoman
    })
}
