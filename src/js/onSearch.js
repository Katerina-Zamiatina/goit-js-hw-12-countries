import fetchCountries from './fetchCountries';
import updateMarkupCountries from './updateMarkupCountries';
import refs from './refs';

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.value;
  clearSearchFormContainer();
  if (searchQuery !== '') {
    return fetchCountries(searchQuery).then(updateMarkupCountries);
  }
}

function clearSearchFormContainer() {
  refs.countryContainer.innerHTML = '';
}

export default onSearch;

// if (refs.inputSearch.value !== ‘’) {
//   return countriesAPI
//     .fetchCountries(refs.inputSearch.value)
//     .then(data => renderCountries(data))
//     .catch((err) => {
//       console.warn(err)
//     })
