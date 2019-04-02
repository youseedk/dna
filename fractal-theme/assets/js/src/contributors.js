// Create the XHR object.
function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != 'undefined') {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(url) {
  const apiUrl = url;
  const xhr = createCORSRequest('GET', apiUrl);

  if (!xhr) {
    console.log('CORS failed');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    const jsonData = JSON.parse(xhr.responseText);
    createInnerHTML(jsonData);
  };

  xhr.onerror = function() {
    console.log('There was an error making the request.');
  };

  xhr.send();
}

function createInnerHTML(obj) {
  let htmlString = '';
  const innerHTMLTarget = document.querySelector('.contributors');

  obj.forEach((contributor) => {

    htmlString +=
      `<figure class="contributors__image">
         <img width="60" height="60" src="${contributor.avatar_url}" alt="${contributor.login}" />
         <figcaption class="contributors__name">${contributor.login}</figcaption>
       </figure>`;
  });

  innerHTMLTarget.innerHTML = htmlString;
}

function createContributors() {
  makeCorsRequest('https://api.github.com/repos/youseedk/dna/contributors');
}

export default createContributors;
