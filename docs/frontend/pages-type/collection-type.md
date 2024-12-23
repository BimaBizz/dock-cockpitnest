
# Collection Page

A Collection page in Cockpit CMS is designed to handle multiple items of content in a structured format. This type of page is useful for displaying lists of items such as blog posts, products, or any other group of content where each item has similar attributes. This guide walks you through setting up a Collection model and demonstrates how to use the Collection data in your application.

## Steps

### 1. Create a Collection Model

1.  **Log in to Cockpit CMS Admin Panel:**
    -   Use your admin credentials to access the admin panel.
2.  **Navigate to content:**
    -   Go to the **Models** section.
3.  **Add a New Model:**
    -   Click **Create Model**.
    -   Name your model (e.g., "products").
    -   Display Name your model (e.g., "Products")
4.  **Set Model Type as Collection:**
    -   Select **Collection** from the **Type** of model.
    -   Add fields:
        1.  SEO
        -   `Type` -> `SEO`
        -   `Display name` -> `SEO`
        2.  Image
        -   `Type` -> `Asset`
        -   `Display name` -> `img`
        -   `Allow multiple values` -> `true`
        3.  Title
        -   `Type` -> `Text`
        -   `Display name` -> `Title`
        4.  Slug
        -   `Type` -> `Text`
        -   `Display name` -> `slug`
        -   `Options` -> 
            ``` json
            {
              multiline: false,
              showCount: true,
              readonly: true,
              placeholder: null,
              minlength: null,
              maxlength: null,
              list: null,
              slugField: 'title',
            }
            ```
        5.  Varian
        -   `Type` -> `Set`
        -   `Display name` -> `Varian`
        -   `Options` -> 
            ``` json
            {
              fields: [
                {
                  name: 'nameVarian',
                  type: 'text',
                  label: '',
                  info: '',
                  group: '',
                  i18n: false,
                  required: false,
                  multiple: false,
                  meta: [],
                  opts: {
                    multiline: false,
                    showCount: true,
                    readonly: false,
                    placeholder: null,
                    minlength: null,
                    maxlength: null,
                    list: null,
                  },
                },
                {
                  name: 'jenisVarian',
                  type: 'text',
                  label: '',
                  info: '',
                  group: '',
                  i18n: false,
                  required: false,
                  multiple: true,
                  meta: [],
                  opts: [],
                },
              ],
              display: '${data.nameVarian}',
            }
            ```
        6.  Description
        -   `Type` -> `Wysiwyg`
        -   `Display name` -> `Description`
5.  **Save the Model:**
    -   Click **Save** to finalize your Collection model setup.


### 2. Populate Collection Data

1.  **Go to Content Section:**
    -   Navigate to the **Content** menu.
2.  **Select the Collection Model:**
    -   Choose your Collection model (e.g., "Products").
3.  **Add Items:**
    -   Add items to your collection by filling in the fields
4.  **Save the Data:**
    -   Click **Save** to store the information.

### 3. Create Collection Page

    1.  navigate to `/pages`
    2.  Create page with type Collection
    3.  Fill up `Title`, `SEO`, `Collection`, `Slug Field -> slug`, etc.
    4.  List LayoutList is for your /products route
    5.  Detail Layout is for your /products/this-is-your-slug route

### 4. Accessing the Collection Page in Code

Register the `ProductsPage` code in `src\components\TypePages\CollectionComponent.js` like this:

```js title="Example of Code Register"
import ProductsPage from "./collectionPages/ProductsPage";

const CollectionComponent = ({ collection }) => {
  switch (collection.data.collection) {
    case "products":
      return <ProductsPage collection={collection} />;
    default:
      return <div>Unknown collection type: {collection.data.collection}</div>;
  }
};

export default CollectionComponent;
```

Here’s an example of how to use Collection model data in your code:

`src\components\TypePages\collectionPages\ProductsPage.js`

```js title="Example of using Colection"
import ComponentRenderer from "@/components/ComponentRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";
import ImageClient from "./ImageClient";
import Image from "next/image";
import formatPrice from "@/lib/formatPrice";
import PaymentButton from "@/components/PaymentButton";

const ProductsPage = ({ collection }) => {
  if (!collection.data || (!collection.data.items && !collection.data.item)) {
    notFound(); // Redirect to 404 page
  }

  return (
    <div>
      {collection.data.items ? (
        <>
          {/* Layout Before */}
          {collection.data.layoutList.before.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
          ))}

          {/* Lists items */}
          <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {collection.data.items.map((item) => (
              <Link
                href={item.route}
                key={item.item._id}
                className="card w-full bg-base-200 shadow-xl shadow-base-300 group"
              >
                <figure className="h-72 overflow-hidden object-cover object-center">
                  <Image
                    className="h-72 overflow-hidden object-cover object-center group-hover:scale-105 transition-transform"
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${item.item.img[0].path}`}
                    alt={item.item.img[0].altText}
                    width={item.item.img[0].width}
                    height={item.item.img[0].height}
                  />
                </figure>
                <div className="p-5 prose md:prose-base flex flex-col justify-between h-40">
                  <h4>{item.item.title}</h4>
                  <p className="text-end font-medium">Rp. {formatPrice(item.item.price)}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Layout After */}
          {collection.data.layoutList.after.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
          ))}
        </>
      ) : (
        <>
          {/* Layout Before */}
          {collection.data.layoutDetail.before.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
          ))}
          <section className="py-8 bg-base-100 md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
              <div className="grid lg:grid-cols-2 gap-8 xl:gap-16">
                <ImageClient
                  mainImage={collection.data.item.img[0]}
                  additionalImages={collection.data.item.img}
                />
                {/* Bagian Detail */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {collection.data.item.title}
                  </h1>
                  <div className="flex items-center mt-4 space-x-4">
                    <p className="text-xl md:text-2xl font-medium">
                      Rp. {formatPrice(collection.data.item.price)}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 4.21l1.45 2.94 3.25.47-2.35 2.3.56 3.24-2.91-1.53-2.91 1.53.56-3.24-2.35-2.3 3.25-.47L12 4.21z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm font-medium">(5.0)</p>
                      <a
                        href="#"
                        className="text-sm text-primary underline hover:no-underline"
                      >
                        345 Reviews
                      </a>
                    </div>
                  </div>
                  {collection.data.item.varian && collection.data.item.varian.length > 0 && (
                    <div className="mt-6">
                      {collection.data.item.varian.map((varian) => (
                        <div key={varian.nameVarian} className="mb-4">
                          <h3 className="font-medium mb-2">{varian.nameVarian}</h3>
                          <div className="flex items-center gap-2 flex-wrap-reverse">
                            {varian.jenisVarian.map((jenis) => (
                              <button key={jenis} className="btn btn-outline hover:btn-primary btn-sm px-4">
                                {jenis}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-6 flex items-center space-x-4">
                    <PaymentButton product={collection.data.item} />
                  </div>
                  <div className="divider" />
                  <div
                    id="post"
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: collection.data.item.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Layout After */}
          {collection.data.layoutDetail.after.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
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