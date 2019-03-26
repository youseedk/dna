import colorConverter from './src/colors';
import changeLog from './src/changelog';

const modules = [
  {selector: '.colors', init: colorConverter},
  {selector: '.changelog', init: changeLog},
];

modules.forEach((module) => {
  const components = document.querySelectorAll(module.selector);

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    module.init(component);
  }
});
