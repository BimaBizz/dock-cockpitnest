---
sidebar_position: 1
---

# Grid

The `GridComponent` is a versatile and reusable component designed to create a grid layout in your Next.js application. It allows you to organize content into multiple columns, with each column containing a set of nested components. The component can be customized with additional classes and can be dynamically shown or hidden based on the `remove` prop.

## Usage

### Props

-   **data:** An object containing configuration for the grid.
    -   **class:** Additional CSS classes to apply to the grid container for custom styling.
-   **columns:** An array of column objects. Each column object should contain:
    -   **components:** An array of components to be rendered within the column.
        -   **id:** A unique identifier for each component.
        -   **component:** The component data to be rendered by `ComponentRenderer`.
-   **remove:** A boolean that determines whether the grid should be rendered or not. If `true`, the grid will not be displayed.


### Component Code
```js title="src/components/availableComponents/GridComponent.js"
import ComponentRenderer from '../ComponentRenderer';

const GridComponent = ({ data, columns, remove }) => (
  remove ? null : (
    <div className={`gap-4 ${data.class}`}>
      {columns.map((column, index) => (
        <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {column.components.map((component) => (
            <ComponentRenderer key={component.id} component={component} />
          ))}
        </div>
      ))}
    </div>
  )
);

export default GridComponent;
```

### Component Explanation

-   **Grid Layout:**
    
    -   The `GridComponent` organizes content into a grid layout, where each column can contain multiple components.
-   **Visibility Control:**
    
    -   The grid's visibility is controlled by the `remove` prop. If `remove` is `true`, the component returns `null`, and the grid is not rendered.
-   **Component Rendering:**
    
    -   Each column in the grid contains a list of components, which are rendered using the `ComponentRenderer` component. The `ComponentRenderer` dynamically renders each component based on its `id` and `component` data.
-   **Styling:**
    
    -   The grid container is styled with a gap between columns (`gap-4`) and custom classes provided via `data.class`.
    -   Each column is styled with padding, a background color, a border, and rounded corners, with light and dark theme support.

## Customization

You can easily customize the `GridComponent` by:

-   Modifying the CSS classes applied to the grid container and columns.
-   Adding or removing components within each column.
-   Changing the layout or structure of the grid by adjusting the number of columns and their content.