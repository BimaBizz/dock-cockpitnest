---
sidebar_position: 1
---

# Setting Public API
In Cockpit CMS v2, you can configure specific API endpoints to be accessed without requiring an API token by setting up a public API role. This allows you to expose certain data to unauthenticated users while maintaining control over your content. This guide will walk you through the steps to configure public API access in Cockpit CMS v2.

## Step 1: Create a Public API Role

1.  **Log in to Your Cockpit Installation:**
    
    Navigate to your Cockpit CMS installation at `https://cockpit.example.com`.
    
2.  **Access the Roles Section:**
    
    Go to the Roles section at `https://cockpit.example.com/system/users/roles`.
    
3.  **Add a New Role:**
    
    -   Click **Add Role**.
    -   Enter an **App ID** (e.g., `public`).
    -   Provide a **Name** for the role (e.g., `Public API`).
    -   Set the permissions as needed. Typically, you will want to allow access to the collections or endpoints that you intend to make public. For example:
        -   **Custom Endpoints**: Configure access as required.
    -   Click **Save** to create the role.

## Step 2: Configure Public API Access

1.  **Navigate to the API Section:**
    
    Go to the API section at `https://cockpit.example.com/system/api`.
    
2.  **Set Up Public API:**
    
    -   Click **Public API**.
    -   Under the **Role** dropdown, select the role you created (e.g., `Public API`).
    -   Click **Save** to apply the changes.


## Notes

-   **Permissions:** Ensure that the public API role has appropriate permissions to access only the data you want to expose publicly.
-   **Security:** Although public access can be convenient, be cautious about exposing sensitive data. Always review and limit the permissions associated with the public API role.