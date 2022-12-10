# automatic-dark-mode-classes

> Automatically generates tailwind classes for colors that have the &#34;light&#34; and &#34;dark&#34; property set

Install the plugin from npm:

```
$ npm install automatic-dark-mode-classes
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    // ...
    require('automatic-dark-mode-classes'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.example-utility-class {
  display: block;
}

.custom-utility-class {
  background-color: red;
}
/* ... */
```

## License

automatic-dark-mode-classes is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
