function linkPrettifier() {
  const domEntityLink = [...document.querySelectorAll('.Tree-entityLink span')];
  const domCollectionLabel = [...document.querySelectorAll('.Tree-collectionLabel span')];
  const domLinks = [...domEntityLink, ...domCollectionLabel];

  domLinks.forEach(function(el) {
   el.textContent = el.textContent.replace('And ', '& ');
  });
}

export default linkPrettifier;
