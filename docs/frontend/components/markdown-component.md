
# Markdown
The `MarkdownComponent` is a component designed to render Markdown content as HTML within your Next.js application. It leverages the `Showdown` library to convert Markdown syntax into HTML, allowing you to easily integrate rich text content. The component also supports additional Markdown features such as tables, automatic links, strikethrough, and task lists. You can dynamically control whether the component is rendered using the `remove` prop.

## Props

-   **markdown:** A string containing the Markdown content that will be converted to HTML.
-   **remove:** A boolean that determines whether the Markdown content should be rendered or not. If `true`, the content will not be displayed.

## Component Code

```js title="src/components/availableComponents/MarkdownComponent.js"
import Showdown from 'showdown';

const MarkdownComponent = ({ markdown, remove }) => {
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return remove ? null : <div className="markdown" dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }} />;
};

export default MarkdownComponent;` 
```
## Component Explanation

-   **Markdown to HTML Conversion:**
    
    -   The component uses the `Showdown` library to convert Markdown text into HTML. The conversion process supports extended Markdown features such as tables, simplified auto links, strikethrough, and task lists.
-   **Markdown Features:**
    
    -   **Tables:** The `tables` option enables the rendering of tables written in Markdown syntax.
    -   **Simplified Auto Links:** The `simplifiedAutoLink` option automatically converts URLs into clickable links.
    -   **Strikethrough:** The `strikethrough` option allows for the use of `~~` to strike through text.
    -   **Task Lists:** The `tasklists` option supports the rendering of task lists with checkboxes.
-   **Rendering Process:**
    
    -   The Markdown content is converted into HTML using `converter.makeHtml(markdown)`, and the resulting HTML is injected into the DOM using `dangerouslySetInnerHTML`. This allows for complex text formatting to be easily handled and displayed.
-   **Visibility Control:**
    
    -   The component's visibility is controlled by the `remove` prop. If `remove` is `true`, the component returns `null`, and the Markdown content is not rendered.

## Customization

You can customize the `MarkdownComponent` by:

-   Modifying the `markdown` prop to render different Markdown content.
-   Adjusting the configuration of the `Showdown` converter to enable or disable specific Markdown features.
-   Styling the rendered HTML by adding or modifying CSS classes in the `div` container to match your application's design.