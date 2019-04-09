function addCopyButton(parent) {

  const buttonText = 'Copy code to Clipboard';
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.classList.add('element-preview__button');
  button.setAttribute('aria-label', 'copy-button');

  const copyField = document.createElement('input');
  const textValue = parent.parentNode.querySelector('.element-preview__inner').innerHTML;
  copyField.value = textValue;
  copyField.setAttribute('aria-label', 'copy-field');
  copyField.classList.add('element-preview__input');
  parent.appendChild(copyField);

  button.addEventListener('click', (event) => {
    copyField.select();
    document.execCommand('copy');
  })

  parent.appendChild(button);
}

function codePreview() {
  const preElements = document.querySelectorAll('.Prose code pre');

  // wrap preview code in containers
  preElements.forEach((parentEl) => {
    parentEl.parentNode.outerHTML = `<div class="code-preview">${parentEl.parentNode.outerHTML}</div>`;
  });

  // add Copy button to all containers — notice: using the live preview here
  const codePreviews = document.querySelectorAll('.element-preview');

  codePreviews.forEach(element => {
    addCopyButton(element);
  })
}

export default codePreview;
