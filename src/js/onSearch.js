import fetchCountries from './fetchCountries';
import updateMarkupCountry from './updateMarkupCountry';
import updateMarkupCountries from './updateMarkupCountries';
import refs from './refs';
import error from './note';

function onSearch(event) {
  event.preventDefault();
  const queryCountry = event.target.value;
  refs.countryContainer.innerHTML = '';

  fetchCountries(queryCountry)
    .then(data => {
      if (data.length === 1) {
        return updateMarkupCountry(data);
      }
      if (data.length > 2 && data.length < 10) {
        return updateMarkupCountries(data);
      }
      if (data.length >= 1) {
        error({
          text: 'Try more specific keywords',
          delay: 1000,
        });
      }
    })
    .catch(console.error);
}

export default onSearch;
