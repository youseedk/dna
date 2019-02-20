module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Select",
	isDisabled: false,
  isReadonly: false,
  darkBg: false,
  hasGuidance: false,
  isInverted: false,
  isAlternative: false,
  variants: [
		{
      name: "default",
      label: "Select"
    },
    {
      name: "Select with guidance text",
      context: {
        hasGuidance: true
      }
    },
		{
      name: "Select (Disabled)",
      context: {
        isDisabled: true
      }
    },
    {
      name: "Select on dark background",
      context: {
        darkBg: true,
        isInverted: true
      }
    },
    {
      name: "Alternative",
      context: {
        isAlternative: true,
      }
    },
    {
      name: "Alternative on dark background",
      context: {
        isAlternative: true,
        darkBg: true,
        isInverted: true
      }
    },
    {
      name: "Alternative (Disabled)",
      context: {
        isAlternative: true,
        isDisabled: true
      }
    }
	],
	"context": {
	}
};