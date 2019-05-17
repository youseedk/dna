function lastBuild() {
  const lastFractalBuild = document.querySelector('.prose-build-time');
  const lastModified = new Date(document.lastModified);
  const documentHeader = document.querySelector('.Document-header');

  const dateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit'
  };

  const buildDate = lastModified.toLocaleDateString('da-dk', dateOptions);
  const buildTime = lastModified.toLocaleTimeString('da-dk', timeOptions);
  const buildTimeFormatted = buildTime.replace('.', ':');
  lastFractalBuild.innerHTML = `<span class="prose-build-text">${buildDate}</span> at <span class="prose-build-text">${buildTimeFormatted}</span>`;
  documentHeader.classList.add('prose-build-helper');
}

export default lastBuild;
