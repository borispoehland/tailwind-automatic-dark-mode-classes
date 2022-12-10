const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, config }) {
  const { theme } = config();
  const colors = theme?.colors ?? {};

  const modifiers = ['bg', 'text', 'ring', 'fill', 'border', 'divide'];

  const reducer = (object, prefix) => (acc, curr) => {
    const value = object[curr];
    if (
      ['light', 'dark'].every(colorMode =>
        Object.keys(value).includes(colorMode)
      )
    ) {
      modifiers.forEach(modifier => {
        acc[`.${modifier}-${curr}`] = {
          [`@apply ${modifier}-${
            prefix ? `${prefix}-` : ''
          }${curr}-light dark:${modifier}-${
            prefix ? `${prefix}-` : ''
          }${curr}-dark`]: {},
        };
        acc[`.${modifier}-${curr}-inverse`] = {
          [`@apply ${modifier}-${
            prefix ? `${prefix}-` : ''
          }${curr}-dark dark:${modifier}-${
            prefix ? `${prefix}-` : ''
          }${curr}-light`]: {},
        };
      });
      delete value['light'];
      delete value['dark'];
    }
    if (Object.keys(value).some(key => isNaN(+key))) {
      return Object.keys(value).reduce(reducer(value, curr), acc);
    }
    return acc;
  };

  const result = Object.keys(colors).reduce(reducer(colors), {});

  addComponents(result);
});
