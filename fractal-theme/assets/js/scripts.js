import colorConverter from './src/colors';

const modules = [
  {selector: '.colors', init: colorConverter},
];

modules.forEach((module) => {
  const components = document.querySelectorAll(module.selector);

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    module.init(component);
  }
});
