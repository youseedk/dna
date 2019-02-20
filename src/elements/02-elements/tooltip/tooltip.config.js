module.exports = {
  status: "wip",
  preview: "@element-preview",
  label: "Tooltip",
  modifierClass: "",
  variants: [
    {
      name: "default",
      label: "Tooltip"
    },
    {
      name: "Tooltip (below)",
      context: {
        modifierClass: "ys-tooltip--below"
      }
    },
    {
      name: "Tooltip (on the left)",
      context: {
        modifierClass: "ys-tooltip--left"
      }
    },
    {
      name: "Tooltip (on the right)",
      context: {
        modifierClass: "ys-tooltip--right"
      }
    },
  ],
  "context": {
  }
};