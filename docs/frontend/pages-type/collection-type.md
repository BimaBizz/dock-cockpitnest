
# Collection Page

A Collection page in Cockpit CMS is designed to handle multiple items of content in a structured format. This type of page is useful for displaying lists of items such as blog posts, products, or any other group of content where each item has similar attributes. This guide walks you through setting up a Collection model and demonstrates how to use the Collection data in your application.

## Steps

### 1. Create a Collection Model

1.  **Log in to Cockpit CMS Admin Panel:**
    -   Use your admin credentials to access the admin panel.
2.  **Navigate to Models:**
    -   Go to the **Models** section.
3.  **Add a New Model:**
    -   Click **Add Model**.
    -   Name your model (e.g., "blog").
4.  **Set Model Type as Collection:**
    -   Select **Collection** from the **Type** dropdown.
    -   Add fields such as `title` (type Text), `post` (type Wysiwyg), and any other fields you need.
5.  **Save the Model:**
    -   Click **Save** to finalize your Collection model setup.

### 2. Populate Collection Data

1.  **Go to Content Section:**
    -   Navigate to the **Content** menu.
2.  **Select the Collection Model:**
    -   Choose your Collection model (e.g., "blog").
3.  **Add Items:**
    -   Add items to your collection by filling in the fields like `title` and `post`.
4.  **Save the Data:**
    -   Click **Save** to store the information.

### 3. Accessing the Collection Page in Code

Here’s an example of how to use Collection model data in your code:

`src\components\DynamicComponents.js`

```js title="Example of using Colection"
const  DynamicComponent = ({ layout, collection, singleton }) => {

{/* Other Codes */}

  if (collection) {
    if (!collection.data || (!collection.data.items && !collection.data.item)) {
      notFound(); // Redirect to 404 page if no data is available
    }

    return (
      <div>
        {/* Render components before the main content */}
        {collection.data.layoutList.before.map((section) => (
          <ComponentRenderer key={section.id} component={section} />
        ))}
        
        <div className="container mx-auto p-4">
          {/* Render list of items if available */}
          {collection.data.items ? (
            collection.data.items.map((item) => (
              <div key={item.item._id} className="p-4">
                <Link href={item.route}>
                  <h2>{item.item.title}</h2>
                </Link>
                <div id='post' dangerouslySetInnerHTML={{ __html: item.item.post }} />
              </div>
            ))
          ) : (
            <div className="container mx-auto p-4">
              <h2>{collection.data.item.title}</h2>
              <div id='post' dangerouslySetInnerHTML={{ __html: collection.data.item.post }} />
            </div>
          )}
        </div>
        
        {/* Render components after the main content */}
        {collection.data.layoutList.after.map((section) => (
          <ComponentRenderer key={section.id} component={section} />
        ))}
      </div>
    );
  }

  // Handle case where collection data is not available
  return <div>Error: Page not found</div>;
};

export default DynamicComponent;` 
```
### Explanation

-   **Conditional Rendering:**
    -   The component first checks if `collection` data exists and if there are either items or a single item. If neither is present, it redirects to a 404 page.
-   **Render Layout Before:**
    -   Components or content specified in `layoutList.before` are rendered before the main content.
-   **Render List of Items:**
    -   If `collection.data.items` exists, it maps through each item and renders it with a link and content. If only a single item (`collection.data.item`) is available, it renders that item instead.
-   **Render Layout After:**
    -   Components or content specified in `layoutList.after` are rendered after the main content.

### References

-   [Cockpit CMS Documentation: Content](https://getcockpit.com/documentation/core/concepts/content)