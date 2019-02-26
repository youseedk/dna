const uiIcons = require('../../tokens/generated/ui-icons.json');

const variants = uiIcons.reduce((acc, item, index) => {
  item = item.replace(".svg", "");
  itemName = index == 0 ? 'default' : item;
  itemLabel = item;

  if(item != "logo") {
    acc.push({
      name: itemName,
      label: item,
      context: {
        svgId: 'ys-ui-icons-' + item
      },
    });
  }

  return acc;
}, []);

module.exports = {
  status: "wip",
  preview: "@icon-preview",
  context: {
  },
  collated: true,
  variants
};