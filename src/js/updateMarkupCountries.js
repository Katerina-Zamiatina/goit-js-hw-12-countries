import countriesTemplate from '../templates/countries.hbs';
import countryTemplate from '../templates/country.hbs';
import error from './note';
import refs from './refs';

function updateMarkupCountries(data) {
  if (!data || !data.length) {
    return error({
      text: 'Something went wrong',
      delay: 2000,
    });
  }

  if (data.length > 10) {
    error({
      text: 'Try more specific keywords',
      delay: 2000,
    });
  } else if (data.length >= 2) {
    const markupAll = countriesTemplate(data);
    refs.countryContainer.insertAdjacentHTML('beforeend', markupAll);
  } else if (data.length === 1) {
    const markup = countryTemplate(data);
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
  }
}

export default updateMarkupCountries;
