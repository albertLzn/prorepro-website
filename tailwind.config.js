module.exports = {
  purge: [],
  theme: {
    container: {
      padding: "6vw"
    },
    extend: {
      colors: {
        primary: "#263238",
        primaryDark: "#263238",
        secondary: "#EDBBD0",
        secondaryDarker: "#3f51b5",
        grey: "#CFD8DC"
      }
    },
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    borderColor: theme => ({
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f"
    })
  },
  variants: {},
  plugins: []
};
