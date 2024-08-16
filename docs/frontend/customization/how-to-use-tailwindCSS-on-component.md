
# How to Use TailwindCSS on Custom Components?

## Step-by-Step Guide

### 1. Add Tailwind CSS to Your Project

Ensure that Tailwind CSS is installed and properly configured in your project. Follow the official installation guide if it's not yet set up: [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation).

### 2. Access `tailwind.config.js`

Navigate to your project's `tailwind.config.js` file. This is where you can customize your Tailwind setup, including adding classes to the safelist.

### 3. Define Safelist in `tailwind.config.js`

The safelist (previously known as the "purge" option) is used to prevent Tailwind CSS from purging classes that are dynamically generated or applied conditionally at runtime. By specifying these classes in the safelist, Tailwind ensures they remain in the final CSS build.

Here's how to add a safelist:

```js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    // Add paths to all your templates, components, and pages
  ],
  safelist: [
    'bg-red-500',
    'text-center',
    'hover:bg-blue-500',
    'md:flex',
    // Add more Tailwind classes that you use dynamically in your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Dynamically Apply Tailwind CSS Classes in Cockpit CMS

When working with dynamic components in Cockpit CMS, you might want to apply Tailwind classes conditionally. You can do this in your component templates, where the classes are applied based on user input or other data.

For example, if you're using a dynamic `class` field:

```html
<div :class="data.class">
  <!-- Content of your component -->
</div>
```

### 5. Update Safelist with Dynamic Classes

If you expect certain Tailwind CSS classes to be added dynamically through Cockpit CMS components (e.g., via the `class` field), make sure those classes are added to the safelist in `tailwind.config.js`. Tailwind will then retain them during the build process.

For instance, if you plan to allow custom colors or spacing classes like `bg-red-500`, `text-center`, and `md:flex`, ensure these are added to the safelist array:

```js
safelist: [
  'bg-red-500',
  'text-center',
  'hover:bg-blue-500',
  'md:flex',
  'lg:text-left',
  // Add additional dynamic classes as needed
]
```

### 6. Reference to Tailwind CSS Safelist

For more details and advanced usage of safelisting classes in Tailwind CSS, you can refer to the official documentation:

-   [Tailwind CSS Safelist Documentation](https://tailwindcss.com/docs/content-configuration#safelisting-classes)