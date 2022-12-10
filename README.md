# tailwind-automatic-dark-mode-classes

> Automatically generates tailwind classes for colors that have the &#34;light&#34; and &#34;dark&#34; property set

Install the plugin from npm:

```
$ npm install tailwind-automatic-dark-mode-classes
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    // ...
    require('tailwind-automatic-dark-mode-classes'),
    // ...
  ],
};
```

Now, assuming that you have the following colors in your theme:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        myColor: {
          light: "white",
          dark: "black"
        }
      }
    }
  }
};
```

It will automatically generate the following classes for you:
```css
.bg-myColor {
  @apply bg-myColor-light dark:bg-myColor-dark;
}

.text-myColor {
  @apply text-myColor-light dark:text-myColor-dark;
}

.ring-myColor {
  @apply ring-myColor-light dark:ring-myColor-dark;
}

.fill-myColor {
  @apply fill-myColor-light dark:fill-myColor-dark;
}

.border-myColor {
  @apply border-myColor-light dark:border-myColor-dark;
}

.divide-myColor {
  @apply divide-myColor-light dark:divide-myColor-dark;
}

.outline-myColor {
  @apply outline-myColor-light dark:outline-myColor-dark;
}

.accent-myColor {
  @apply accent-myColor-light dark:accent-myColor-dark;
}
```

Inverse classes are also generated:
```css
.bg-myColor-inverse {
  @apply bg-myColor-dark dark:bg-myColor-light;
}

.text-myColor-inverse {
  @apply text-myColor-dark dark:text-myColor-light;
}

.ring-myColor-inverse {
  @apply ring-myColor-dark dark:ring-myColor-light;
}

.fill-myColor-inverse {
  @apply fill-myColor-dark dark:fill-myColor-light;
}

.border-myColor-inverse {
  @apply border-myColor-dark dark:border-myColor-light;
}

.divide-myColor-inverse {
  @apply divide-myColor-dark dark:divide-myColor-light;
}

.outline-myColor-inverse {
  @apply outline-myColor-dark dark:outline-myColor-light;
}

.accent-myColor-inverse {
  @apply accent-myColor-dark dark:accent-myColor-light;
}
```


## License

tailwind-automatic-dark-mode-classes is licensed under the MIT License.
