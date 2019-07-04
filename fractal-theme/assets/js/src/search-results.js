import Fuse from 'fuse.js'

function fractalSearchResults() {
  const searchComponent = document.querySelector('.search');
  const searchInput = document.getElementById('searchPageInput');
  const searchResults = document.getElementById('searchResults');
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
      const getSearchParams = new URLSearchParams(location.search);
      const searchString = getSearchParams.get('q');
      searchInput.value = searchString;
      searchInput.focus();

      // On load
      const searchValueFuseTest = fuse.search(searchString);
      searchValueFuseTest.forEach(element => {
        searchResults.innerHTML += `
        <div class="search-result search-result--${element.data.category}">
          <h3 class="search-result__title">${element.data.title}</h3>
          <p class="search-result__link">http://${location.host}${element.data.url}</p>
          <span class="search__category search__category--${element.data.category}">${element.data.category}</span>
          <a href="//${location.host}${element.data.url}" class="search-result__cover-link">${element.data.title}</a>
        </div>`;
      });

      // On input
      searchInput.addEventListener('input', (e) => {
        searchResults.innerHTML = '';
        const searchValueFuse = fuse.search(e.srcElement.value);
        if (e.srcElement.value) {
          searchValueFuse.forEach(element => {
            searchResults.innerHTML += `
            <div class="search-result search-result--${element.data.category}">
              <h3 class="search-result__title">${element.data.title}</h3>
              <p class="search-result__link">http://${location.host}${element.data.url}</p>
              <span class="search__category search__category--${element.data.category}">${element.data.category}</span>
              <a href="//${location.host}${element.data.url}" class="search-result__cover-link">${element.data.title}</a>
            </div>`;
          });
        }

        if (!searchResults.hasChildNodes()) {
          searchResults.innerHTML = `<p class="search-result__no-results">Sorry! We couldn't find any pages. Please try to change your search terms.</p>`;
        }
      });
    })
    // If an error occurs we will not show the search feature at all
    .catch(err => {
      console.log('error occured with the search feature in results page');
      searchComponent.remove();
    })
}

export default fractalSearchResults;
