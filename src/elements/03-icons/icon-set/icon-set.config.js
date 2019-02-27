const iconset = require('../../../tokens/generated/icon-set.json');

const variants = iconset.reduce((acc, item, index) => {
  item = item.replace(".svg", "");
  itemName = index == 0 ? 'default' : item;
  itemLabel = item;

  acc.push({
    name: itemName,
    label: item,
    context: {
      svgId: 'ys-icon-set-' + item
    },
  });

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