function lastBuild() {
const lastFractalBuild = document.querySelector('.frctl-last-build-time');
lastFractalBuild.innerHTML = document.lastModified;
}

export default lastBuild;