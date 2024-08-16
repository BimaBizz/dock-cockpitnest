
# Spacer

The `SpacerComponent` is a simple utility component designed to create vertical spacing within your layout. It allows you to insert a specified amount of space between elements by adjusting the height of the spacer. This component is particularly useful for adding consistent spacing in your design without the need for additional CSS classes or styles. The `remove` prop controls whether the spacer should be rendered.

## Props

-   **size:** A string or number representing the height of the spacer. This value is applied as the height of the `<div>` element, allowing you to control the amount of vertical space.
-   **remove:** A boolean that determines whether the spacer should be rendered or not. If `true`, the spacer will not be displayed.

## Component Code
```js title="src/components/availableComponents/SpacerComponent.js"
const SpacerComponent = ({ size, remove }) => (remove ? null : <div style={{ height: size }} className="spacer" />);
export default SpacerComponent;` 
```
## Component Explanation

-   **Vertical Spacing:**
    
    -   The `SpacerComponent` renders a `<div>` element with a specified height, which creates vertical space in your layout. This is achieved by setting the `height` style property to the value provided in the `size` prop.
-   **Styling:**
    
    -   The spacer is styled with the class name `spacer`. You can apply additional styles to this class in your CSS to customize the appearance or behavior of the spacer as needed.
-   **Visibility Control:**
    
    -   The spacer's visibility is controlled by the `remove` prop. If `remove` is `true`, the component returns `null`, and the spacer is not rendered. This allows you to dynamically control the presence of spacing in your layout.

## Customization

You can customize the `SpacerComponent` by:

-   Adjusting the `size` prop to control the height of the spacer. This can be specified in any valid CSS unit (e.g., `'20px'`, `'2rem'`, `'10%'`).
-   Adding or modifying styles for the `.spacer` class in your CSS to apply custom styling or effects to the spacer element.
-   Using the `remove` prop to conditionally render the spacer based on specific application logic or user interactions.

## Use Cases

-   **Consistent Spacing:** Ideal for creating consistent vertical spacing between elements in your layout, such as between sections, headers, or content blocks.
-   **Responsive Design:** Useful for adding space in a responsive layout where the amount of space may vary based on screen size or other conditions.
-   **Layout Adjustments:** Allows for quick and easy adjustments to the layout without modifying other CSS or HTML elements.