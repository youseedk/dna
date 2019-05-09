module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Notification",
	modifierClass: '',
  darkBg: false,
  variants: [
		{
      name: "default",
      label: "Information",
      context: {
        info: 'true'
      }
    },
		{
      name: "Warning",
      context: {
        modifierClass: 'ys-notification--warning',
        warning: 'true'
      }
    },
    {
      name: "Success",
      context: {
        modifierClass: 'ys-notification--success',
        success: 'true'
      }
    },
    {
      name: "Error",
      context: {
        modifierClass: 'ys-notification--error',
        warning: 'true'
      }
    }
	],
	"context": {
	}
};
