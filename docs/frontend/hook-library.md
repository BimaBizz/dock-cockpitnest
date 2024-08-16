---
sidebar_position: 4
---
# Hook API

These hooks are asynchronous functions designed to fetch various types of data from the server, such as routes, layout information, menus, settings, and sitemap data. They are used to dynamically retrieve and manage content from API endpoints. Each hook makes use of the `fetch` API to get data from the server and returns it for use in the application.

### Hook: `fetchRoutes`

This hook fetches route data from the server. The data is used to determine the routes and navigation structure within the application.

```js
export const fetchRoutes = async () => {
    const response = await fetch(`${process.env.HOST}/api/pages/routes`, {
        cache: 'no-cache'
    });
    const data = await response.json();
    return data.default;
};
``` 

-   **URL**: `${process.env.HOST}/api/pages/routes` (replace with your actual API URL).
-   **Cache Control**: The `cache: 'no-cache'` option ensures that the response is not cached.
-   **Return Value**: Returns the `default` field of the fetched JSON data, representing the routes.

----------

### Hook: `fetchLayout`

This hook fetches layout data for a specific page based on the provided route (`slug`). The data could include the layout structure, content, or metadata of a particular page.

```js
export const fetchLayout = async (slug) => {
    const response = await fetch(`${process.env.HOST}/api/pages/page?route=${slug}`, {
        cache: 'no-cache'
    });
    const data = await response.json();
    return data;
};
``` 

-   **URL**: `${process.env.HOST}/api/pages/page?route=${slug}` (replace with your actual API URL).
-   **Parameter**: `slug` - The route or slug of the page for which layout data is requested.
-   **Cache Control**: The `cache: 'no-cache'` option ensures the data fetched is always up-to-date.
-   **Return Value**: Returns the entire fetched JSON object containing the page layout data.

----------

### Hook: `fetchMenus`

This hook retrieves menu data based on the provided menu name (`name`). It is useful for fetching dynamic menus that are managed via an API.

```
export const fetchMenus = async (name) => {
    const response = await fetch(`${process.env.HOST}/api/pages/menu/${name}`, {
        cache: 'no-cache'
    });
    const data = await response.json();
    return data;
};
``` 

-   **URL**: `${process.env.HOST}/api/pages/menu/${name}` (replace with your actual API URL).
-   **Parameter**: `name` - The name of the menu to be fetched.
-   **Cache Control**: The `cache: 'no-cache'` option ensures the menu data is always fresh.
-   **Return Value**: Returns the menu data in JSON format.

----------

### Hook: `fetchSettings`

This hook fetches application settings data from the server. These settings might include configurations like site metadata, global preferences, or other settings stored in the API.

```js
export const fetchSettings = async () => {
    const response = await fetch(`${process.env.HOST}/api/pages/settings`, {
        cache: 'no-cache'
    });
    const data = await response.json();
    return data;
};
``` 

-   **URL**: `${process.env.HOST}/api/pages/settings` (replace with your actual API URL).
-   **Cache Control**: The `cache: 'no-cache'` option ensures that settings are always current.
-   **Return Value**: Returns the settings data in JSON format.

----------

### Hook: `fetchSitemap`

This hook retrieves sitemap data from the server, which contains information about the routes and their last modified times. This data is useful for generating a sitemap for SEO purposes.

```js
export const fetchSitemap = async () => {
    const response = await fetch(`${process.env.HOST}/api/pages/sitemap`, {
        cache: 'no-cache'
    });
    const data = await response.json();
    return data;
};
``` 

-   **URL**: `${process.env.HOST}/api/pages/sitemap` (replace with your actual API URL).
-   **Cache Control**: The `cache: 'no-cache'` option ensures that the sitemap data is always up-to-date.
-   **Return Value**: Returns the sitemap data in JSON format.

----------

## General Notes:

-   **Environment Variables**: All hooks rely on `process.env.HOST` to construct the base URL for the API. Make sure this environment variable is properly configured with the correct domain.
-   **No Caching**: Each hook is configured with the `cache: 'no-cache'` option to ensure fresh data is retrieved from the server every time. This is useful for dynamic content but may be modified if caching is preferred for performance reasons.
-   **Error Handling**: The provided code does not include explicit error handling. It is recommended to add error handling logic (such as `try-catch` blocks) to manage potential errors gracefully.