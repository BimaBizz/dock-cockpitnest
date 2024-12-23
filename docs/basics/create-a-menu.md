---
sidebar_position: 3
---


# Creating a Menu

Cockpit CMS v2 have a built-in menu management with pro addons. However, you can create and manage menus using Cockpit's addons feature. This guide will show you how to create and configure a menu using Cockpit CMS v2.

## Step 1: Create a Menu

1.  **Log in to Your Cockpit :**
    
    Navigate to your Cockpit CMS at `https://localhost/your-cockpit-folder`.
    
2.  **Access the Pages Section:**
    
    Go to the Pages section by navigating to `https://localhost/your-cockpit-folder/pages/menus`.
    
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
        -   **Add Fields Data**: 
            1. **Enable Theme**: 
            -   `Name` -> `enableTheme`
            -   `Type` -> `boolean`
            -   `Display name` -> `Enable Theme`
            2.  **Enable Search**:
            -   `Name` -> `enableSearch`
            -   `Type` -> `boolean`
            -   `Display name` -> `Enable Search`
        -   **Template**:
        ```html title="Template Navbar cockpit cms"
        <nav style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12);">
            <!-- Logo -->
            <div style="font-size: 1.5em; font-weight: bold; color: #7480FF;">MyLogo</div>

            <!-- Navigation Links -->
            <ul style="display: flex; list-style: none; margin: 0 auto; padding: 0; gap: 15px;">
            <li><a href="#home" style="text-decoration: none; color: #7480FF; font-size: 1em; transition: color 0.3s ease;">Home</a></li>
            <li><a href="#about" style="text-decoration: none; color: #7480FF; font-size: 1em; transition: color 0.3s ease;">About</a></li>
            <li><a href="#services" style="text-decoration: none; color: #7480FF; font-size: 1em; transition: color 0.3s ease;">Services</a></li>
            <li><a href="#contact" style="text-decoration: none; color: #7480FF; font-size: 1em; transition: color 0.3s ease;">Contact</a></li>
            </ul>

            <!-- Theme & Search -->
            <div style="display: flex; align-items: center; gap: 15px;">
            <div v-if="data.enableSearch" style="color: #7480FF;">Search Enabled</div>
            <div v-if="data.enableTheme" style="color: #7480FF;">Theme Enabled</div>
            </div>
        </nav>
        ```

    -   Click **Create Component** to add the entry.

2.  **Add to Your Pages** it should displayed on your component items when you create or edit your pages

## Step 3: Setting New Compoenent to Frontend

1.  Open your editor go to `.env`
2.  Edit NEXT_MENU_NAME with menu name you have created

    ``` .env title=".env"
    NEXT_MENU_NAME=your-menu-name
    ```