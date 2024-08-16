
# Video

The `VideoComponent` is a versatile component designed to embed video content within your Next.js application. It allows you to render videos with customizable attributes and styling. The `remove` prop provides control over the visibility of the video element, enabling conditional rendering based on your application's needs.

## Props

-   **data:** An object containing the video configuration.
    -   **attr:** An object with attributes to be applied to the `<video>` element, such as `src`, `controls`, `autoplay`, and more.
    -   **class:** Additional CSS classes to apply to the video element for custom styling.
-   **remove:** A boolean that determines whether the video should be rendered or not. If `true`, the video will not be displayed.

## Component Code
```js title="src/components/availableComponents/VideoComponent.js"
const VideoComponent = ({ data, remove }) => (
    remove ? null : <video {...data.attr} className={`video ${data.class}`} />
);

export default VideoComponent;
```
## Component Explanation

-   **Video Element:**
    
    -   The `VideoComponent` renders a `<video>` element using the attributes provided in the `data.attr` object. This allows you to set various properties of the video element, such as the video source, playback controls, autoplay options, and more.
-   **Custom Styling:**
    
    -   The video element is styled with the class name `video` along with any additional classes specified in `data.class`. You can apply custom styles to these classes in your CSS to adjust the appearance and layout of the video.
-   **Visibility Control:**
    
    -   The video's visibility is controlled by the `remove` prop. If `remove` is `true`, the component returns `null`, and the video is not rendered. This provides flexibility to conditionally include or exclude the video based on application logic or user interactions.

## Customization

You can customize the `VideoComponent` by:

-   Adjusting the `data.attr` object to set video attributes such as `src`, `controls`, `width`, `height`, etc., according to your needs.
-   Applying or modifying styles for the `.video` class in your CSS to customize the appearance and layout of the video element.
-   Using the `remove` prop to conditionally render the video based on specific application conditions.

## Use Cases

-   **Media Embedding:** Ideal for embedding video content into your application, such as promotional videos, tutorials, or media galleries.
-   **Custom Controls:** Allows for customization of video playback controls and attributes, making it suitable for various use cases and requirements.
-   **Responsive Design:** Useful for integrating video content that can be styled and adjusted to fit different screen sizes and layouts.