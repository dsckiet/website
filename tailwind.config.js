module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		screens: {
			mini: { max: "359px" }, // iphone5/se
			xxs: { min: "360px", max: "410px" }, // redmi,samsung galaxy
			xs: { min: "411px", max: "639px" }, // small range (my)
			sm: { min: "640px", max: "767px" }, // mid range tablets
			md: { min: "768px" }, // tablets
			lg: { min: "1024px" }, // laptop
			xl: { min: "1280px" }, // desktops
			"2xl": { min: "1536px" } // monitors
		},
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
		extend: {
			borderWidth: ["hover"]
		}
	},
	plugins: []
};
