import countriesTemplate from '../templates/countries.hbs';
import countryTemplate from '../templates/country.hbs';
import error from './note';
import refs from './refs';

function updateMarkupCountries(data) {
  if (!data) {
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
    return renderMarkup(countriesTemplate, data);
  } else if (data.length === 1) {
    return  renderMarkup(countryTemplate, data);
  }
}

function renderMarkup(templateFn, data) {
  const markup = templateFn(data);
  return refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkupCountries;
