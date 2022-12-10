/* eslint-disable @typescript-eslint/no-var-requires */

const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, config }) {
  const { theme } = config();
  const colors = theme?.colors ?? {};

  const modifiers = [
    "bg",
    "text",
    "ring",
    "fill",
    "border",
    "divide",
    "outline",
    "accent",
  ];

  const reducer = (acc, curr) => {
    const value = colors[curr];
    if (
      ["light", "dark"].every((colorMode) =>
        Object.keys(value).includes(colorMode)
      )
    ) {
      modifiers.forEach((modifier) => {
        acc[`.${modifier}-${curr}`] = {
          [`@apply ${modifier}-${curr}-light dark:${modifier}-${curr}-dark`]: {},
        };
        acc[`.${modifier}-${curr}-inverse`] = {
          [`@apply ${modifier}-${curr}-dark dark:${modifier}-${curr}-light`]: {},
        };
      });
    }
    return acc;
  };

  const result = Object.keys(colors).reduce(reducer, {});

  addComponents(result);
});
