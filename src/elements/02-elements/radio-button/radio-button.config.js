module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Radio Button",
	isDisabled: false,
  darkBg: false,
  id: '0',
  variants: [
		{
      name: "default",
      label: "Radio Button",
      context: {
        id: '0'
      }
    },
    {
      name: "Radio Button on dark background",
      context: {
        isInverted: true,
        darkBg: true,
        id: '1'
      }
    },
		{
      name: "Radio Button (Disabled)",
      context: {
        isDisabled: true,
        id: '2'
      }
    },
    {
      name: "Radio Button (Disabled) on dark background",
      context: {
        isDisabled: true,
        isInverted: true,
        darkBg: true,
        id: '3'
      }
    }
	],
	"context": {
	}
};
