module.exports = {
	status: "ready",
  preview: "@element-preview",
	label: "Splash",
	modifierClass: null,
  variants: [
		{
      name: "default",
      label: "Yellow Splash"
		},
		{
			name: "Blue Splash",
			context: {
        modifierClass: "ys-splash--blue",
      }
    }
	],
	"context": {
  }
};