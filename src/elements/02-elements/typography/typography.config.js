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
			label: "Main title",
			context: {
				tagName: "h1",
				className: "ys-main-title",
				textContent: "Lorem ipsum"
			}
		},
		{
			name: "Main Title light",
			context: {
				tagName: "h1",
				className: "ys-main-title ys-main-title--light",
				textContent: "Lorem ipsum"
			}
		},
		{
			name: 'Primary Title',
			context: {
				tagName: "h2",
				className: "ys-primary-title",
				textContent: "Lorem ipsum",
			}
		},
		{
			name: 'Primary Title Light',
			context: {
				tagName: "h2",
				className: "ys-primary-title ys-primary-title--light",
				textContent: "Lorem ipsum",
			}
		},
		{
			name: 'Secondary Title',
			context: {
				tagName: "h3",
				className: "ys-secondary-title",
				textContent: "Lorem ipsum"
			}
		},
		{
			name: 'Secondary Title Light',
			context: {
				tagName: "h3",
				className: "ys-secondary-title ys-secondary-title--light",
				textContent: "Lorem ipsum"
			}
		},
		{
			name: 'Subtitle',
			context: {
				tagName: "h4",
				className: "ys-subtitle",
				textContent: "Lorem ipsum"
			}
		},
		{
			name: 'Subtitle Light',
			context: {
				tagName: "h4",
				className: "ys-subtitle ys-subtitle--light",
				textContent: "Lorem ipsum"
			}
		},
		{
			name: 'Body Text',
			context: {
				tagName: "p",
				className: "ys-body-text",
				textContent: "Lorem ipsum (16px)"
			}
		},
		{
			name: 'Body Text Light',
			context: {
				tagName: "p",
				className: "ys-body-text ys-body-text--light",
				textContent: "Lorem ipsum (16px)"
			}
		},
		{
			name: 'Body Text Large',
			context: {
				tagName: "p",
				className: "ys-body-text ys-body-text--large",
				textContent: "Lorem ipsum (20px)"
			}
		},
		{
			name: 'Body Text Large Light',
			context: {
				tagName: "p",
				className: "ys-body-text ys-body-text--large ys-body-text--light",
				textContent: "Lorem ipsum (20px)"
			}
		},
    {
      name: 'Body Text Large Bold',
      context: {
        tagName: "p",
        className: "ys-body-text ys-body-text--large ys-body-text--bold",
        textContent: "Lorem ipsum (20px)",
      },
    },
    {
      name: 'Body Text Large Bold Light',
      context: {
        tagName: "p",
        className: "ys-body-text ys-body-text--large ys-body-text--light ys-body-text--bold",
        textContent: "Lorem ipsum (20px)",
      },
    },
		{
			name: 'Small Text',
			context: {
				tagName: "p",
				className: "ys-small-text",
				textContent: "Lorem ipsum (12px)"
			}
		},
		{
			name: 'Small Text Light',
			context: {
				tagName: "p",
				className: "ys-small-text ys-small-text--light",
				textContent: "Lorem ipsum (12px)"
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
