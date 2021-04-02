const ROMAN_MATRIX = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

class NumeralRomanConverter
{
    static romanize (number) {

        let numeralRoman = '';

        for (let i of Object.keys(ROMAN_MATRIX)) {
            let q = Math.floor(number / ROMAN_MATRIX[i]);

            number -= q * ROMAN_MATRIX[i];
            numeralRoman += i.repeat(q);
        }

        return numeralRoman;
    }
}


export {
    NumeralRomanConverter
}
