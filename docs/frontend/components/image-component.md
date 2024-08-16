---
sidebar_position: 1
---

# Image

The `ImageComponent` is a reusable component designed to display images in your Next.js application. It leverages the built-in `Image` component from Next.js, providing optimized image loading and responsive behavior. The component allows for dynamic configuration of the image source, dimensions, alt text, and additional styling classes. It can also be dynamically shown or hidden based on the `remove` prop.

## Props

-   **data:** An object containing the image configuration.
    -   **asset:** An object representing the image asset.
        -   **width:** The width of the image in pixels.
        -   **height:** The height of the image in pixels.
        -   **path:** The file path to the image, relative to the storage directory.
        -   **altText:** The alternative text for the image, used for accessibility.
-   **remove:** A boolean that determines whether the image should be rendered or not. If `true`, the image will not be displayed.

## Component Code

```js title="src/components/availableComponents/ImageComponent.js"
import Image from 'next/image';

const ImageComponent = ({ data, remove }) => (
  remove ? null : <Image width={data.asset.width} height={data.asset.height} src={`${process.env.HOST}/storage/uploads/${data.asset.path}`} alt={data.asset.altText} className={`rounded-lg`} />
);

export default ImageComponent;
```
## Component Explanation

-   **Optimized Image Loading:**
    
    -   The component uses Next.js's `Image` component, which provides built-in optimization for loading images, including lazy loading and responsive image sizing.
-   **Dynamic Image Source:**
    
    -   The `src` attribute is constructed using the environment variable `process.env.HOST` combined with the relative path of the image stored in the `data.asset.path`. This allows for flexibility in image storage and access.
-   **Accessibility:**
    
    -   The `alt` attribute is populated with the `data.asset.altText` value, which is important for accessibility, ensuring that screen readers can describe the image content.

-   **Visibility Control:**
    
    -   The image's visibility is controlled by the `remove` prop. If `remove` is `true`, the component returns `null`, and the image is not rendered.

## Customization

You can easily customize the `ImageComponent` by:

-   Modifying the `data.asset` properties to render different images with specific dimensions and alt text.
-   Adding or changing the CSS classes passed via `className` to adjust the image's appearance (e.g., borders, shadows, or effects).