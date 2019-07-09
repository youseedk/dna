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
			name: "Main Title light",
			context: {
				tagName: "h1",
				className: "ys-main-title ys-main-title--light",
				textContent: "Main Title"
			}
		},
		{
			name: 'Primary Title',
			context: {
				tagName: "h2",
				className: "ys-primary-title",
				textContent: "Primary Title",
			}
		},
		{
			name: 'Primary Title Light',
			context: {
				tagName: "h2",
				className: "ys-primary-title ys-primary-title--light",
				textContent: "Primary Title",
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
			name: 'Secondary Title Light',
			context: {
				tagName: "h3",
				className: "ys-secondary-title ys-secondary-title--light",
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
			name: 'Subtitle Light',
			context: {
				tagName: "h4",
				className: "ys-subtitle ys-subtitle--light",
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
			name: 'Body Text Light',
			context: {
				tagName: "p",
				className: "ys-body-text ys-body-text--light",
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
			name: 'Small Text Light',
			context: {
				tagName: "p",
				className: "ys-small-text ys-small-text--light",
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
			name: 'Unordered list Light',
			context: {
				isList: true,
				className: "ys-list ys-list--light",
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
		},
		{
			name: 'Ordered list Light',
			context: {
				isList: true,
				className: "ys-list ys-list--ordered ys-list--light",
				tagName: "ol"
			}
		}
	]
};
