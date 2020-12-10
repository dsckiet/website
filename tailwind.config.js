module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				red: {
					dsc: "#EA4335"
				},
				green: {
					dsc: "#0F9D58"
				},
				blue: {
					dsc: "#4285F4"
				},
				yellow: {
					dsc: "#FBBC04"
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
