module.exports = {
  status: "wip",
  preview: "@element-preview",
  label: "Link",
  modifierClass: null,
  darkBg: false,
  inlineStyle: null,
  variants: [
    {
      name: "default",
      label: "Link"
    },
    {
      name: "Link on dark background",
      context: {
        modifierClass: "ys-link--dark",
        darkBg: true
      }
    }
  ]
};
