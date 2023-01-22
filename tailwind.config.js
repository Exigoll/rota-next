const { fontFamily, colors } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				tablet: "767px",
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans],
			},
			colors: {
				black: "#000000",
				white: "#ffffff",
				darkBlue: "#1b2f52",
				heavyDark: "#1b1f20",
				lightDark: "#2e3536",
				peach: "#e77c58",
				darkPeach: "#f76435",
				placeholder: "rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [],
};
