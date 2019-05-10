function lastBuild() {
  const lastFractalBuild = document.querySelector('.prose-build-time');
  const lastModified = new Date(document.lastModified);

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
  lastFractalBuild.innerHTML = `${buildDate} at ${buildTime}`;
}

export default lastBuild;
