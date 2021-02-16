import './styles.css';
import onSearch from './js/onSearch';
import refs from './js/refs';

const debounce = require('lodash.debounce');

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
