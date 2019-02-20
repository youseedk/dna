module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Radio Button",
	isDisabled: false,
  darkBg: false,
  variants: [
		{
      name: "default",
      label: "Radio Button"
    },
    {
      name: "Radio Button on dark background",
      context: {
        isInverted: true,
        darkBg: true
      }
    },
		{
      name: "Radio Button (Disabled)",
      context: {
        isDisabled: true
      }
    }
	],
	"context": {
	}
};