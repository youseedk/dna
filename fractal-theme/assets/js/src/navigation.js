function linkPrettifier() {
  const link = [...document.querySelectorAll('.Tree-entityLink span')];

  link.forEach(function(el) {
   el.textContent = el.textContent.replace('And', '&');
   console.log(el.textContent);
  });
}

export default linkPrettifier;
