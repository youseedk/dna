module.exports = {
	status: "ready",
  preview: "@element-preview",
	label: "Card",
	modifierClass: null,
  darkBg: false,
  inlineStyle: null,
	variants: [
		{
      name: "default",
      label: "Light Card"
		},
		{
			name: "Dark Card",
			context: {
        modifierClass: "ys-card--dark",
        darkBg: true
			}
    },
    {
      name: "Card with medium corners",
      label: "Card with medium corners (8px)",
      context: {
        modifierClass: "ys-card--medium-corners"
      }
    },
    {
      name: "Card with small corners",
      label: "Card with small corners (4px)",
      context: {
        modifierClass: "ys-card--small-corners"
      }
    }
	],
	"context": {
    "inlineCss": ".ys-card{padding: 1em;min-width: 320px;min-height: 480px}.ys-card--bg-image{max-width:400px;min-height:600px}"
	}
};