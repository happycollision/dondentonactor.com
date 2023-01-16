const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "media",
	theme: {
		extend: {
			colors: {
				green: {
					100: "#ecffff",
					200: "#d2ffe6",
					300: "#b9f2cd",
					400: "#a0d8b4",
					500: "#88bf9c",
					600: "#70a684",
					700: "#598f6e",
					800: "#437758",
					900: "#2d6143",
				},
				blue: {
					100: "#cef3ff",
					200: "#b4d9ff",
					300: "#9bc0e7",
					400: "#83a8ce",
					500: "#6b90b5",
					600: "#53799d",
					700: "#3c6385",
					800: "#234d6e",
					900: "#033958",
				},
			},
			screens: {
				xs: "475px",
			},
			spacing: {
				112: "28rem",
			},
			zIndex: {
				"-10": "-10",
			},
		},
	},
	plugins: [],
}

module.exports = config
