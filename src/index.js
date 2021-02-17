import './styles.css';
import debounce from 'lodash.debounce';
import onSearch from './js/onSearch';
import refs from './js/refs';

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
