
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5151",
        lightGray: "#b3b3b2",
        gray: "#696869"

      },
    },
  },
  plugins: [],
});
