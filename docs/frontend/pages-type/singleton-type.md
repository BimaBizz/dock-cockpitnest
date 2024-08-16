# Singleton Page

A Singleton page in Cockpit CMS is designed for unique pages or settings that need only one instance. Examples include "About Us", "Contact", or global settings pages. This guide walks you through setting up a Singleton model and provides a code example demonstrating how to use the Singleton data in your application.

## Steps

### 1. Create a Singleton Model

1.  **Log in to Cockpit CMS Admin Panel:**
    
    -   Use your admin credentials to access the admin panel.
2.  **Navigate to Models:**
    
    -   Go to the **Models** section.
3.  **Add a New Model:**
    
    -   Click **Add Model**.
    -   Name your model (e.g., "aboutme").
4.  **Set Model Type as Singleton:**
    
    -   Select **Singleton** from the **Type** dropdown.
    -   Add fields such as `image` with type Asset and `post` with type Wysiwyg.
5.  **Save the Model:**
    
    -   Click **Save** to finalize your Singleton model setup.

### 2. Populate Singleton Data

1.  **Go to Content Section:**
    
    -   Navigate to the **Content** menu.
2.  **Select the Singleton Model:**
    
    -   Choose your Singleton model (e.g., "aboutme").
3.  **Fill in the Fields of Page:**
    
    -   **Title:** Enter the page title.
    -   **Slug:** Define a URL slug.
    -   **SEO:** Provide SEO metadata.
    -   **Page Content:** Add the main content.
    -   **Layout Before:** Include components or content before the main content.
    -   **Layout After:** Include components or content after the main content.
4.  **Save the Data:**
    
    -   Click **Save** to store the information.
5.  **Add to your menu (optional)**

    -   Click **menus** to add the page to the menu.

### 3. Accessing the Singleton Page in Code

Here’s an example of how to use Singleton model data in your code:

`src\components\DynamicComponents.js`

```js title="Example of using Singleton"
import ComponentRenderer from './components/ComponentRenderer';

const  DynamicComponent  = ({ layout, collection, singleton }) => {

{/* Other Codes */}

  if (singleton) {
    if (!singleton.data || !singleton.data.layout) {
      notFound(); // Redirect to 404 page if layout is missing
    }

    return (
      <div>
        {/* Render components before the main content */}
        {singleton.data.layout.before.map((section) => (
          <ComponentRenderer key={section.id} component={section} />
        ))}
        
        <div className="container mx-auto p-4 flex gap-4">
          {/* Render image if available */}
          {singleton.data.data.image && (
            <img
              src={process.env.HOST + "/storage/uploads" + singleton.data.data.image.path}
              alt={singleton.data.data.image.altText}
              width={singleton.data.data.image.width}
              height={singleton.data.data.image.height}
              className='rounded-lg'
            />
          )}
          {/* Render page content */}
          <div id='post' dangerouslySetInnerHTML={{ __html: singleton.data.data.post }}></div>
        </div>
        
        {/* Render components after the main content */}
        {singleton.data.layout.after.map((section) => (
          <ComponentRenderer key={section.id} component={section} />
        ))}
      </div>
    );
  }

  // Handle case where singleton data is not available
  return <div>Error: Page not found</div>;
};

export default DynamicComponent;` 
```
### Explanation

-   **Conditional Rendering:**
    
    -   The component first checks if `singleton` data exists and if the layout is present. If not, it redirects to a 404 page.
-   **Render Layout Before:**
    
    -   Components or content specified in `layout_before` are rendered before the main content.
-   **Render Main Content:**
    
    -   An image is displayed if available, followed by the main page content (`post`) using `dangerouslySetInnerHTML`.
-   **Render Layout After:**
    
    -   Components or content specified in `layout_after` are rendered after the main content.

### References

-   [Cockpit CMS Documentation: Content](https://getcockpit.com/documentation/core/concepts/content)