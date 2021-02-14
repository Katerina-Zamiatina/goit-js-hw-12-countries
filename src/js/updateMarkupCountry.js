import countryTemplate from '../templates/country.hbs';
import refs from './refs';

function updateMarkupCountry(country) {
  const markup = countryTemplate(country);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkupCountry;