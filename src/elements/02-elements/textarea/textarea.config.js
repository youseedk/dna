module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Textarea",
	isDisabled: false,
  isReadonly: false,
  darkBg: false,
  isInverted: false,
  hasGuidance: false,
  placeholder: "Placeholder Text",
	variants: [
		{
      name: "default",
    },
    {
      name: "Textarea with guidance text",
      context: {
        hasGuidance: true,
      }
    },
    {
      name: "Textarea on dark background",
      context: {
        darkBg: true,
        isInverted: true
      }
    },
		{
      name: "Disabled Textarea",
      context: {
        isDisabled: true
      }
    },
    {
      name: "Readonly Textarea",
      context: {
        isReadonly: true
      }
    }
	],
	"context": {
	}
};