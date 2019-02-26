module.exports = {
  status: "wip",
  preview: "@element-preview",
  label: "Grid",
  modifierClass: null,
  darkBg: false,
  inlineStyle: null,
  variants: [
    {
      name: "default"
    },
    {
      name: 'with vertical margin (sm)',
      context: {
        modifierClass: "row--vertical-spacing-sm",
      }
    },
    {
      name: 'with vertical margin (md)',
      context: {
        modifierClass: "row--vertical-spacing-md",
      }
    },
    {
      name: 'with vertical margin (lg)',
      context: {
        modifierClass: "row--vertical-spacing-lg",
      }
    },
    {
      name: 'with vertical margin (xl)',
      context: {
        modifierClass: "row--vertical-spacing-xl",
      }
    }
  ],
  "context": {
    "inlineCss": "body{padding:0;margin:0}.row div{font-family:sans-serif;height:60px;line-height:60px;text-align:center;outline:1px solid #ccc;background-color:rgba(255,255,255,.5);}"
  }
};