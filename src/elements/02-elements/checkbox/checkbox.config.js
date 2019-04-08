module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Checkbox",
  isDisabled: false,
  isInverted: false,
  darkBg: false,
  id: '0',
  variants: [
		{
      name: "default",
      label: "Checkbox",
      context: {
        id: '0',
      }
    },
    {
      name: "Checkbox on dark background",
      context: {
        isInverted: true,
        darkBg: true,
        id: '1'
      }
    },
		{
      name: "Checkbox (Disabled)",
      context: {
        isDisabled: true,
        id: '2'
      }
    },
    {
      name: "Checkbox (Disabled) on dark background",
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
