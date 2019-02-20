module.exports = {
	status: "wip",
  preview: "@element-preview",
	label: "Notification",
	modifierClass: '',
  darkBg: false,
  variants: [
		{
      name: "default",
      label: "Information"
    },
		{
      name: "Warning",
      context: {
        modifierClass: 'ys-notification--warning'
      }
    },
    {
      name: "Success",
      context: {
        modifierClass: 'ys-notification--success'
      }
    },
    {
      name: "Error",
      context: {
        modifierClass: 'ys-notification--error'
      }
    }
	],
	"context": {
	}
};