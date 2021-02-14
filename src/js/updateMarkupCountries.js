import countriesTemplate from '../templates/countries.hbs';
import refs from './refs';

function updateMarkupCountries(countries) {
  const markup = countriesTemplate(countries);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkupCountries;
