const colors = require("tailwindcss/colors")
const defaultConfig = require("tailwindcss/defaultConfig")
const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles")

module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.svelte"],
    options: {
      defaultExtractor: (content) => [
        // This is an internal Tailwind function that we're not supposed to be allowed to use
        // So if this stops working, please open an issue at
        // https://github.com/babichjacob/svelte-add-tailwindcss/issues
        // rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group,
        ),
      ],
      keyframes: true,
    },
  },
  theme: {
    colors: {
      ...defaultConfig.theme.colors,
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
    fontFamily: {
      ...defaultConfig.theme.fontFamily,
      sans: ["proxima-nova", ...defaultConfig.theme.fontFamily.sans],
      serif: ["ff-tisa-web-pro", ...defaultConfig.theme.fontFamily.serif],
    },
    spacing: {
      ...defaultConfig.theme.spacing,
      112: "28rem",
    },
    zIndex: {
      ...defaultConfig.theme.zIndex,
      "-10": "-10",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
