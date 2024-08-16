
# Row

The `RowComponent` is a flexible layout component designed to display a row of columns within your Next.js application. It dynamically renders content based on the provided configuration, allowing for customizable column widths and additional styling. The component utilizes a `ComponentRenderer` to render nested components within each column, making it ideal for building complex, grid-based layouts. The `remove` prop allows for conditional rendering of the row.

## Props

-   **data:** An object containing the row configuration.
    -   **class:** Additional CSS classes to apply to the row container for custom styling.
-   **columns:** An array of objects representing the columns within the row.
    -   **data:** An object with properties for each column.
        -   **width:** The width of the column, specified as a CSS-compatible value (e.g., '50%', '300px').
        -   **class:** Additional CSS classes to apply to the column for custom styling.
    -   **components:** An array of component objects to be rendered within the column.
        -   **id:** A unique identifier for the component.
        -   **component:** The type of component to render, managed by `ComponentRenderer`.
-   **remove:** A boolean that determines whether the row should be rendered or not. If `true`, the row will not be displayed.

## Component Code

jsx

Salin kode
```js title="src/components/availableComponents/RowComponent.js"
import ComponentRenderer from '../ComponentRenderer';

const RowComponent = ({ data, columns, remove }) => (
  remove ? null : (
    <div className={`container mx-auto p-4 row ${data.class}`}>
      {columns.map((column, index) => (
        <div key={index} style={{ width: column.data.width }} className={`column ${column.data.class}`}>
          {column.components.map((component) => (
            <ComponentRenderer key={component.id} component={component} />
          ))}
        </div>
      ))}
    </div>
  )
);

export default RowComponent;
```
## Component Explanation

-   **Dynamic Layout:**
    
    -   The `RowComponent` creates a row container with customizable styling and spacing. Each column within the row is rendered with a dynamic width and additional classes, allowing for flexible and responsive design.
-   **Column Rendering:**
    
    -   Each column is rendered with its specified width and CSS classes. The content of each column is dynamically populated by iterating over the `components` array, with each component rendered using the `ComponentRenderer`.
-   **ComponentRenderer Integration:**
    
    -   The `ComponentRenderer` is used to render individual components within each column. This allows for the dynamic and modular rendering of various types of content based on the provided configuration.
-   **Visibility Control:**
    
    -   The row's visibility is controlled by the `remove` prop. If `remove` is `true`, the component returns `null`, and the row is not rendered.

## Customization

You can customize the `RowComponent` by:

-   Adjusting the `data.class` and `columns` props to apply different styles and configurations to the row and its columns.
-   Modifying the `width` and `class` properties within each column to control the layout and appearance of the columns.
-   Using the `remove` prop to conditionally render the row based on specific application logic or user interactions.

## Use Cases

-   **Grid Layouts:** Ideal for creating responsive grid layouts where each row can contain multiple columns with varying content and styles.
-   **Dynamic Content:** Useful for dynamically rendering rows of content based on configuration data, such as user-generated content or CMS-managed layouts.
-   **Custom Layouts:** Allows for the creation of custom, flexible layouts that can adapt to different design requirements and screen sizes.