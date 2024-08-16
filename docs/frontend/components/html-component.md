---
sidebar_position: 1
---

# Html

The `HtmlComponent` is a versatile component designed to render raw HTML content within your Next.js application. It allows for the dynamic insertion of HTML into the page, making it ideal for cases where you need to display HTML content generated from external sources or dynamically loaded content. The component can be dynamically shown or hidden based on the `remove` prop.

## Props

-   **html:** A string containing the raw HTML that will be rendered inside the component. The HTML content is inserted directly into the DOM using `dangerouslySetInnerHTML`.
-   **remove:** A boolean that determines whether the HTML content should be rendered or not. If `true`, the HTML content will not be displayed.

## Component Code
```js title="src/components/availableComponents/HtmlComponent.js"
const HtmlComponent = ({ html, remove }) => (
    remove ? null : <div dangerouslySetInnerHTML={{ __html: html }} className="container mx-auto p-4" />
);

export default HtmlComponent;
```

## Component Explanation

-   **Rendering Raw HTML:**
    
    -   The `HtmlComponent` uses React's `dangerouslySetInnerHTML` attribute to insert raw HTML into the DOM. This allows you to display complex HTML content without needing to manually create React components for each element.
-   **Visibility Control:**
    
    -   The component's visibility is controlled by the `remove` prop. If `remove` is `true`, the component returns `null`, and the HTML content is not rendered.
-   **Styling:**
    
    -   The component is wrapped in a `div` element with classes for basic styling:
        -   **container:** Centers the content and restricts the width of the container.
        -   **mx-auto:** Applies automatic horizontal margins to center the container.
        -   **p-4:** Adds padding inside the container for spacing.

## Security Consideration

When using `dangerouslySetInnerHTML`, it is important to ensure that the HTML content is sanitized to prevent Cross-Site Scripting (XSS) attacks. Only use trusted sources for the `html` prop, and consider sanitizing the content before rendering it.

## Customization

You can customize the `HtmlComponent` by:

-   Adjusting the `html` prop to render different HTML content.
-   Modifying the CSS classes applied to the `div` for different layout and styling options.
-   Implementing content sanitization to enhance security when dealing with untrusted HTML content.