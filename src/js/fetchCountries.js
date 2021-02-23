function fetchCountries(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;
  return fetch(url)
    .then(res => {
      console.log(res);
      if (res.ok) return res.json();
    })
    .catch(error => console.log(error));
}

export default fetchCountries;
