---
sidebar_position: 1
---

# Button

The `ButtonComponent` is a reusable button component designed for use in a Next.js application. It allows you to create a button with customizable text, URL redirection, and additional CSS classes. The button's visibility can be controlled dynamically based on the `hidden` property.

## Usage

### Props

-   **data:** An object that contains the button's configuration.
    -   **data.data:** An object containing the button's specific properties:
        -   **caption:** The text displayed on the button.
        -   **url:** The URL to which the button redirects when clicked.
    -   **data.hidden:** A boolean that determines whether the button should be rendered or not. If `true`, the button will not be displayed.

### Component Code

```js title="src/components/availableComponents/ButtonComponent.js"
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ButtonComponent = ({ data }) => {
  const buttondata = data.data;
  const remove = data.hidden;

  const router = useRouter();

  return remove ? null : (
    <button
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      onClick={() => router.push(buttondata.url)}
    >
      {buttondata.caption}
    </button>
  );
};

export default ButtonComponent;`` 
```
### Component Explanation

-   **Visibility Control:**
    
    -   The button's visibility is controlled by the `hidden` property. If `hidden` is `true`, the component returns `null` and the button is not rendered.
-   **Styling:**
    
    -   The button has predefined classes for styling, including background color, hover effects, and focus states. You can add additional custom classes.
-   **Navigation:**
    
    -   The `useRouter` hook from Next.js is used to navigate to the URL specified in `buttondata.url` when the button is clicked.

## Customization

You can easily customize the `ButtonComponent` by passing different values for the `caption` and `url` properties in the `data` object. This allows you to reuse the component across different parts of your application with different button labels, styles, and target URLs.