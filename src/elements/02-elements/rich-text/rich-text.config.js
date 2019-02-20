module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Rich Text",
	isInverted: false,
  darkBg: false,
  variants: [
		{
      name: "default",
      label: "Rich Text"
    },
    {
      name: "Rich Text on dark background",
      context: {
        isInverted: true,
        darkBg: true
      }
    }
	],
	"context": {
	}
};