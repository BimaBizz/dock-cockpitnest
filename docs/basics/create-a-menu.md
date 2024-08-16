---
sidebar_position: 3
---


# Creating a Menu

Cockpit CMS v2 have a built-in menu management with pro addons. However, you can create and manage menus using Cockpit's addons feature. This guide will show you how to create and configure a menu using Cockpit CMS v2.

## Step 1: Create a Menu

1.  **Log in to Your Cockpit Installation:**
    
    Navigate to your Cockpit CMS installation at `https://cockpit.example.com`.
    
2.  **Access the Pages Section:**
    
    Go to the Pages section by navigating to `https://cockpit.example.com/pages/menus`.
    
3.  **Create a New Menu:**
    
    -   Click **Menus**.
    -   Create new menu by clicking **Create Menu**
    -   fill in fields to define the menu structure.
        -   **Name** (Required).
        -   **Display name** (Required).
        -   **Group** (optional).
        -   **Info** (optional).
    -   Configure menu items.
        -   **Active** (default : false) set it to true to display it on frontend
        -   **Title** (Required).
        -   **URL** (Required) Select the page that you have created by clicking pages.
        -   **Target** (Optional).
        -   **Image** (Optional).
    -   Click **Save** to create the item menu.
    -   Click **Create Menu** to create menu

## Step 2: Add Layout Component to Cockpit CMS

1.  **Add Layout Component**
    
    -   Go to the `https://cockpit.example.com/layout-components` to create component.
    -   Click **Add Component**.
    -   Fill in the details for each component fields:
        -   **Name**: navbar
        -   **Display Name**: Navbar
    -   Click **Create Component** to add the entry.

2.  **Add to Your Pages** it should displayed on your component items when you create or edit your pages

## Step 3: Setting New Compoenent to Frontend

1.  Open your editor go to `\src\components\availableComponents\NavbarComponent.js`
2.  Edit fetchMenu with menu name you have created

    ```
    ...

    const Navbar = async () => {

        const data = await fetchMenus('mysite'); // ganti dengan nama menu yang ingin Anda tampilkan
        const setting = await fetcSettings();
        
    ...
    ```