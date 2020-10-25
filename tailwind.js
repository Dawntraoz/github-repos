const plugin = require("tailwindcss/plugin");
const selectorParser = require("postcss-selector-parser");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.vue"],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" }
      }
    },
    container: {
      center: true,
      padding: "1rem"
    }
  },
  variants: {
    textColor: ["dark", "responsive", "hover", "focus"],
    backgroundColor: ["dark", "responsive", "hover", "focus"]
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("dark", ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return selectorParser(selectors => {
            selectors.walkClasses(sel => {
              sel.value = `dark${separator}${sel.value}`;
              sel.parent.insertBefore(
                sel,
                selectorParser().astSync(".dark-mode ")
              );
            });
          }).processSync(selector);
        });
      });
    })
  ]
};
