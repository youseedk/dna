module.exports = {
	status: "ready",
  preview: "@element-preview",
	label: "Typography",
  className: "",
	textContent: "",
	tagName: "",
	isList: false,
	variants: [
		{
      name: "default",
      label: "Main Title",
      context: {
				tagName: "h1",
        className: "ys-main-title",
        textContent: "Main Title"
      }
		},
		{
      name: 'Primary Title',
      context: {
				tagName: "h2",
				className: "ys-primary-title",
        textContent: "Primary Title"
			}
		},
		{
			name: 'Secondary Title',
			context: {
				tagName: "h3",
        className: "ys-secondary-title",
        textContent: "Secondary Title"
			}
		},
		{
			name: 'Subtitle',
			context: {
				tagName: "h4",
				className: "ys-subtitle",
        textContent: "Subtitle"
			}
		},
		{
			name: 'Body Text',
			context: {
				tagName: "p",
        className: "ys-body-text",
        textContent: "Body Text"
			}
		},
		{
			name: 'Small Text',
			context: {
				tagName: "p",
        className: "ys-small-text",
        textContent: "Small Text"
			}
		},
		{
			name: 'Unordered list',
			context: {
				isList: true,
				className: "ys-list",
				tagName: "ul"
			}
		},
		{
			name: 'Ordered list',
			context: {
				isList: true,
				className: "ys-list ys-list--ordered",
				tagName: "ol"
			}
		}
	]
};
