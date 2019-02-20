module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Checkbox",
  isDisabled: false,
  isInverted: false,
  darkBg: false,
  variants: [
		{
      name: "default",
      label: "Checkbox"
    },
    {
      name: "Checkbox on dark background",
      context: {
        isInverted: true,
        darkBg: true
      }
    },
		{
      name: "Checkbox (Disabled)",
      context: {
        isDisabled: true
      }
    }
	],
	"context": {
	}
};