# Stylelite CSS

> Styles that work for you

Stylelite is a tiny-dynamic-classlite css foundation for any project.  Easy to extend, with extras already available, and Great for rapid prototyping.

It *may* be light on `class`, but it makes up for it in *[style](src/extras)*

All in **2kb gzipped!**

## Features

- Tiny, 2kb
- Class-lite
- Few Layout Utility Classes
    - `.grid`, `.group`, `.left`, `.right`, `.center` `.clear`

- **extras/** supplies pick-and-choose styles to expanded your options
- Dynamic, 12 Custom CSS Vars
- Includes Light and Dark Themes

Designed to work with default [Feather Icons](https://feathericons.com/)


> WARNING: ever-green browsers need only apply ;)


## Get Started

Via `jsdelivr` CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/n2geoff/stylelite/dist/stylelite.min.css">

```

or [Download](https://raw.githubusercontent.com/n2geoff/stylelite/main/dist/stylelite.min.css)

Include Feather Icons

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/feather-icons-css/css/feather.min.css">

```

## Customize

While **Stylelite** is a drop-and-forget cascading style sheet (css) file, that doesn't mean you cannot customize it -- easily!

It is RECOMMENDED you import **Stylelite** via a `main.css` or the like referenced in your web application, like

```css
@import url(stylelite);

/* Add Your Styles Below */

```

Below are some simple and common examples.

### Dark Mode

Add `data-theme="dark"` to the `html` tag for a taste of the dark side

```html
<html lang="en" data-theme="dark">
```

> DEFAULT: data-theme="light"

### Theme

The stock theme color is `steelblue`, but you can change it to anything you want just add

```css
:root {
  --theme: Magenta;
}
```

> NOTE: Light mode (default) should use dark theme colors, and dark mode should use light theme colors

### Rounded Corners

By default Stylelite is a boxy design, but if you want a rounded design, just set `--radius` to something.  try `.4rem`


## LICENSE

- [MIT](LICENSE)


## TODO

Keep it small, but immediately useful.

Tweak to hit that SWEET spot:

- Dark mode use native browser scroll bars/classes
- Extras
  - Colors  - Bootstrap-inspired classes
  - Layout  - Little more flex-based layout options
  - Switch  - More modern UI component
  - Spinner - Identify content is loading
  - Tabs    - Another useful modern UI component
