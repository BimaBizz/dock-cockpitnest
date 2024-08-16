
# How to Create Custom Components?

## Step-by-Step Guide to Create Custom Components in Cockpit CMS

### 1. Access Cockpit CMS

-   **Login**: Log in to your Cockpit CMS admin dashboard.
-   **Navigation**: Go to the **Components** section. This may be accessible through the following URL:  
    `https://example.com/layout-components`.

### 2. Add a New Component

-   **Click on "Add Component"**: You will be redirected to a form where you can define the properties of your new component.

### 3. Fill Out the Fields

-   **Component Name**: Provide a meaningful name for your component, e.g., "roundedImage".
-   **Data**: Depending on the component, you might need to fill out several fields like `title`, `description`, and any other attributes that define the behavior and appearance of the component. Common fields include:
    -   `img` (source, dimensions, alt text) -> `type = Asset`
    -   `class` (CSS classes for custom styling) -> `type = Text`

### 4. Add Extra Data (Optional)

If your component requires additional data (such as custom CSS classes), ensure these fields are included in the form.

For example, if you have a field called `class`, you would add it to your component template using Vue.js conditionals.

### 5. Edit the Component Template

In the template editor, add the necessary HTML and Vue.js syntax to define how the component should render. Use `v-if` or other directives to handle conditional data display.

#### Example Template with Optional Class Field

If you have an additional `class` field in your component, modify the template as follows:

```html title="example Template field"
<div v-if="data.img" :class="data.class">{{data.img}}</div>
<div v-if="data.class" :class="data.class">{{data.class}}</div>
```

-   **`v-if="data.class"`**: This checks if the `class` field has been provided.
-   **`:class="data.class"`**: Dynamically applies the CSS class to the component's `<div>` element.
-   **`{{data.class}}`**: Outputs the class name within the `<div>` if the class exists.

### 6. Save the Component

Once you have completed the setup and template, click **Save** to add the component to your Cockpit CMS.

### 7. Use the Component

After saving, you can use this custom component throughout your site by inserting it into the layouts where required. You can manage the component's data and fields directly from the Cockpit CMS interface.

## Add your Custom Components to CockpitNest

### 1. Create Your Name Component

-   open directory `src/components/availableComponents`
-   create new component with name `RoundedImageComponent.js`
-   add data in `src/components/availableComponents/RoundedImageComponent.js`

```js title="src/components/availableComponents/RoundedImageComponent.js"
import Image from 'next/image';

const RoundedImageComponent = ({ data, remove }) => (
  remove ? null : <Image width={data.img.width} height={data.img.height} src={`${process.env.HOST}/storage/uploads/${data.img.path}`} alt={data.img.altText} className={`rounded-full ${data.class}`} />
);

export default RoundedImageComponent;
```
### 2. Initialize the Component

-   open directory `src/components/`
-   add new component in `src/components/ComponentRenderer.js`
-   add `RoundedImageComponent` in `src/components/ComponentRenderer.js`

```js title="src/components/ComponentRenderer.js"
import RoundedImageComponent from './availableComponents/RoundedImageComponent';

const ComponentRenderer = ({ component }) => {
  switch (component.component) {
        case 'roundedImage':
            return <RoundedImageComponent data={component.data} />;
        default:
            return <div>Unknown component type: {component.component}</div>;
  }
};
```

## Notes

-   If you are confused about mapping the components you have created, you can visit `https://example.com/api/pages/page/{id}` ([must have public API enabled](https://docs.cockpit.dev/docs/basics/setting-api-cockpit))