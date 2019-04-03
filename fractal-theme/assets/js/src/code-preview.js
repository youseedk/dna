function addCopyButton(parent) {

  const buttonText = 'Copy to Clipboard';
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.classList.add('element-preview__button');

  const copyField = document.createElement('input');
  const textValue = parent.innerHTML;
  copyField.value = textValue;
  copyField.classList.add('element-preview__input');
  parent.appendChild(copyField);

  button.addEventListener('click', (event) => {
    const elToCopy = copyField;
    elToCopy.select();
    document.execCommand('copy');
  })

  parent.appendChild(button);
}

function codePreview() {
  const preEls = document.querySelectorAll('.Prose code pre');

  // wrap preview code in containers
  preEls.forEach((parentEl) => {
    parentEl.parentNode.outerHTML = `<div class="code-preview">${parentEl.parentNode.outerHTML}</div>`;
  });

  // add Copy button to all containers — notice: using the live preview here
  const codePreviews = document.querySelectorAll('.element-preview');

  codePreviews.forEach(element => {
    addCopyButton(element);
  })
}

export default codePreview;
