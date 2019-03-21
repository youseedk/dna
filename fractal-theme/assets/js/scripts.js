import colorHexMatches from './src/colors';

const modules = [
  {selector: '.frctl-example', init: colorHexMatches},
];

modules.forEach((module) => {
  const components = document.querySelectorAll(module.selector);

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    module.init(component);
  }
});
