import {convertArabicNumber} from '../controllers/NumeralRomanController';

const routes = (app) => {

    app.route('/numeral-romain/:arabicNumber')
        .get((request, response) => {
            convertArabicNumber(request, response)
        })
}


export default routes;
