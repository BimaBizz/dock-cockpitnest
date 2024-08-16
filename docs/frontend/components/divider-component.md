---
sidebar_position: 1
---

# Divider

The `DividerComponent` is a simple and reusable component designed to add a horizontal line (`<hr>`) to your layout. It is typically used to visually separate different sections of a webpage. The component can be dynamically shown or hidden based on the `remove` prop.

## Usage

### Props

-   **remove:** A boolean that determines whether the divider should be rendered or not. If `true`, the divider will not be displayed.


### Component Code
```js title="src/components/availableComponents/DividerComponent.js"
const DividerComponent = ({ remove }) => (
  remove ? null : <hr className="border border-gray-300 my-4" />
);

export default DividerComponent;` 
```
### Component Explanation

-   **Visibility Control:**
    
    -   The divider's visibility is controlled by the `remove` prop. If `remove` is `true`, the component returns `null`, and the divider is not rendered.
-   **Styling:**
    
    -   The divider is styled with predefined classes:
        -   **border-gray-300:** Sets the border color to a light gray.
        -   **my-4:** Adds vertical margin (`my-4`) to create space above and below the divider.

## Customization

You can easily customize the `DividerComponent` by modifying the CSS classes applied to the `<hr>` element. For example, you can change the border color, thickness, or add additional styles to fit the design of your application.