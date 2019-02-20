module.exports = {
	status: "ready",
  preview: "@element-preview",
	label: "Button",
	modifierClass: null,
	hasIcon: false,
	hasIconOnly: false,
	darkBg: false,
	variants: [
		{
			name: "default"
		},
		{
			name: 'light',
			context: {
				modifierClass: "ys-button--light",
				darkBg: true,
			}
		},
		{
			name: 'call-to-action',
			context: {
				modifierClass: "ys-button--cta"
			}
		},
		{
			name: 'solid-dark',
			context: {
				modifierClass: "ys-button--solid-dark",
			}
		},
		{
			name: 'solid-light',
			context: {
				modifierClass: "ys-button--solid-light",
				darkBg: true,
			}
		},
		{
			name: 'stripped-dark',
			context: {
				modifierClass: "ys-button--stripped-dark"
			}
		},
		{
			name: 'stripped-light',
			context: {
				modifierClass: "ys-button--stripped-light",
				darkBg: true,
			}
		},
		{
			name: 'with-icon',
			context: {
				hasIcon: true
			}
		},
		{
			name: 'icon only',
			context: {
				hasIcon: true,
				hasIconOnly: true
			}
		},
		{
			name: 'block',
			context: {
				modifierClass: "ys-button--block",

			}
		}
	],
	"context": {
		"button-text": "Button Text",
	}
};