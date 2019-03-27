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
  const innerHTMLTarget = document.querySelector('.changelog');

  obj.forEach((release) => {
    const timestamp = new Date(Date.parse(release.published_at.toLocaleString('da-DK'))).toUTCString();

    htmlString +=
      `<article class="changelog__item">
        <figure class="changelog__avatar">
          <img width="60" height="60" src="${release.author.avatar_url}" alt="Authored by ${release.author.login}" />
        </figure>
        <div class="changelog__details">
          <h2 class="changelog__title"><a href="${release.html_url}">${release.name}</a> (${release.tag_name})</h2>
          <p class="changelog__desc">${release.body}</p>
          <time class="changelog__released" datetime="${timestamp}">${timestamp}</time>
        </div>
      </article>`;
  });

  innerHTMLTarget.innerHTML = htmlString;
}

function changeLog() {
  makeCorsRequest('https://api.github.com/repos/youseedk/dna/releases');
}

export default changeLog;
