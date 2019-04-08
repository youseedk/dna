import colorConverter from './src/colors';
import changeLog from './src/changelog';
import linkPrettifier from './src/navigation';
import createContributors from './src/contributors';
import codePreview from './src/code-preview';

const modules = [
  {selector: '.colors', init: colorConverter},
  {selector: '.changelog', init: changeLog},
  {selector: '.Navigation', init: linkPrettifier},
  {selector: '.contributors', init: createContributors},
  {selector: '.Prose', init: codePreview},
];

modules.forEach((module) => {
  const components = document.querySelectorAll(module.selector);

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    module.init(component);
  }
});
