module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Bow",
	modifierClass: null,
  inlineStyle: null,
	variants: [
		{
      name: "default",
      label: "White"
    },
    {
      name: "Midnight Green",
      context: {
        "modifierClass": "ys-bow--midnight-green"
      }
    }
	],
	"context": {
    "inlineCss": "body{padding:0;}"
	}
};
