import Fuse from 'fuse.js'

function fractalSearch() {
  const searchElement = document.querySelector('.search');
  const searchInput = searchElement.querySelector('#searchInput');
  const searchSuggestions = searchElement.querySelector('#searchSuggestions');
  const searchExplanation = document.querySelector('.search-color-meaning');
  const searchExplanationClose = searchExplanation.querySelector('.search-color-meaning__close');
  const searchForm = document.querySelector('#searchForm');
  const SearchApi = '/assets/theme/js/search.json';

  // Search options
  const searchOptions = {
    keys: [{
      name: 'data.title',
      weight: 0.5
    }, {
      name: 'data.primaryKeywords',
      weight: 0.4
    }, {
      name: 'data.secondaryKeywords',
      weight: 0.1
    }]
  };

  // Fetch endpoint
  fetch(SearchApi)
    .then(response => {
      return response.json()
    })
    // Search init
    .then(search => {
      const fuse = new Fuse(search, searchOptions)

      searchInput.addEventListener('input', (e) => {
        const searchValueFuse = fuse.search(e.srcElement.value);
        searchSuggestions.innerHTML = '';
        searchElement.classList.add('search-is-active');
        searchExplanation.classList.add('search-is-active');
        setTimeout(function () {
          searchExplanation.setAttribute('style', 'opacity: 1;');
        }, 1000);

        if (e.srcElement.value) {
          searchValueFuse.slice(0, 5).forEach(element => {
            searchSuggestions.innerHTML += `
            <li class="search__item search__item--${element.data.category}">
              <a href="${element.data.url}" class="search__link" title="${element.data.category}: ${element.data.title}">${element.data.title}</a>
            </li>`;
          });
        } else {
          searchElement.classList.remove('search-is-active');
          searchExplanation.classList.remove('search-is-active');
          searchExplanation.setAttribute('style', 'opacity: 0;');
        }

        if (!searchSuggestions.hasChildNodes()) {
          searchSuggestions.innerHTML = '<li><span class="search__no-results">No results</span></li>';
        }
      });

      // Method for navigating with key up and key down in search suggestions
      document.addEventListener('keydown', (e) => {
        if (document.querySelectorAll('.search :focus').length) {
          switch (e.key) {
            case 'ArrowUp':
              e.preventDefault();
              if (document.activeElement === searchInput) {
                break;
              }
              else if (!document.activeElement.parentNode.previousElementSibling) {
                searchSuggestions.lastElementChild.firstElementChild.focus();
              }
              else {
                document.activeElement.parentNode.previousElementSibling.firstElementChild.focus();
              }
              break;
            case 'ArrowDown':
              e.preventDefault();
              if (document.activeElement === searchInput) {
                searchSuggestions.firstElementChild.firstElementChild.focus();
              }
              else if (!document.activeElement.parentNode.nextElementSibling) {
                searchSuggestions.firstElementChild.firstElementChild.focus();
              }
              else {
                document.activeElement.parentNode.nextElementSibling.firstElementChild.focus();
              }
              break;
          }
        }
      });
    })
    // If an error occurs we will not show the search feature at all
    .catch(err => {
      searchForm.remove();
    })

  // On submit show the search page
  searchForm.onsubmit = (e) => {
    e.preventDefault();
    searchElement.classList.remove('search-is-active');
    location.href = `//${location.host}/docs/search-results?q=${encodeURIComponent(searchInput.value)}`;
  };

  searchExplanationClose.addEventListener('click', () => {
    searchExplanation.classList.add('is-disabled');
  });
}

export default fractalSearch;
