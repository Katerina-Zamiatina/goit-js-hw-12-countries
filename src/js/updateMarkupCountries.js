import countriesTemplate from '../templates/countries.hbs';
import countryTemplate from '../templates/country.hbs';
import error from './note';
import refs from './refs';

function updateMarkupCountries(data) {
  const markup = countriesTemplate(data);
  const markupCountry = countryTemplate(data);
  
  if (refs.searchForm.value === '') {
    return;
  }
  if (data.length === 1) {
    refs.countryContainer.insertAdjacentHTML('beforeend', markupCountry);
    return;
  }

  if (data.length > 10) {
    error({
      text: 'Try more specific keywords',
      delay: 2000,
    });
    return;
  }

  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkupCountries;
