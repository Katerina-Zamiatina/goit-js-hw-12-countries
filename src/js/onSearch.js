import fetchCountries from './fetchCountries';
import updateMarkupCountries from './updateMarkupCountries';
import refs from './refs';


function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.value;
  clearSearchFormContainer();

  fetchCountries(searchQuery).then(updateMarkupCountries);
}

function clearSearchFormContainer() {
  refs.countryContainer.innerHTML = '';
}

export default onSearch;
