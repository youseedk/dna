module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Input Field",
	modifierClass: null,
	hasIconPre: false,
  hasIconPost: false,
  isPassword: false,
  isValid: false,
  isInvalid: false,
  isDisabled: false,
  isReadonly: false,
  isInverted: false,
  hasGuidance: false,
  darkBg: false,
  placeholder: "Regular input field",
	variants: [
		{
      name: "default",
      label: "Input"
    },
    {
      name: "Input on dark background",
      context: {
        darkBg: true,
        isInverted: true
      }
    },
    {
      name: "Input with guidance text",
      context: {
        hasGuidance: true
      }
    },
		{
      name: "Input with icon",
      context: {
        hasIconPre: true,
        placeHolder: "With icon to show input type"
      }
    },
    {
      name: "Input with valid input",
      context: {
        hasIconPost: true,
        placeHolder: "With valid input",
        isValid: true
      }
    },
    {
      name: "Input with invalid input",
      context: {
        hasIconPost: true,
        placeHolder: "With invalid input",
        isInvalid: true,
        hasGuidance: true
      }
    },
    {
      name: "Disabled input",
      context: {
        isDisabled: true
      }
    },
    {
      name: "Readonly input",
      context: {
        isReadonly: true
      }
    }
	],
	"context": {
	}
};