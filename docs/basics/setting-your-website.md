---
sidebar_position: 4
---

# Setting Up Website Settings

Cockpit CMS v2 allows you to centralize and manage your website settings, such as site title, meta descriptions, contact information, and other configurable options. By storing these settings in Cockpit, you can easily update and retrieve them across your website or application. This guide will show you how to set up and manage website settings using Cockpit CMS v2.

## Create your website settings

1.  **Access the Settings Section:**
    
    Go to the Pages section by navigating to `https://cockpit.example.com/pages/settings`.

2.  **Fill all Fields**

    -   Supported Fields with this Template :
        -   SEO
        -   Images
        -   Meta
            for meta you can see this example or see [Nextjs Example](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#other)

            ```json title="meta field example"
            {
              custom: 'meta',
            },
            ```
    -   Unsupported Fields with this Template :
        -   Scripts
        -   Preview
        -   Layout