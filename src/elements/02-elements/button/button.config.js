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
			name: 'secondary-dark',
			context: {
				modifierClass: "ys-button--secondary-dark",
			}
		},
		{
			name: 'secondary-light',
			context: {
				modifierClass: "ys-button--secondary-light",
				darkBg: true,
			}
		},
		{
			name: 'tertiary-dark',
			context: {
				modifierClass: "ys-button--tertiary-dark"
			}
		},
		{
			name: 'tertiary-light',
			context: {
				modifierClass: "ys-button--tertiary-light",
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
