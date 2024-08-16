---
sidebar_position: 1
---

# Quickstart

## Getting Started with CockpitNest

Follow these simple steps to get your CockpitNest project up and running in no time.

### Prerequisites

Before you begin, ensure you have the following installed on your development machine:

-   **Node.js** (version 20.x or higher)
-   **npm** (Node package manager)
-   **Git** (optional, for version control)
-   **PHP** (version 8.2 or higher, for Cockpit CMS)
-   **Composer** (for running Cockpit CMS)
-   **MonggoDB** (Optional, supported database for Cockpit CMS)

### Clone the Repository

Start by cloning the CockpitNest repository from GitHub:

```bash title="clone repository"
git clone https://github.com/BimaBizz/cockpitnest.git
cd cockpitnest
```

### Install Dependencies

Install the required dependencies for both the Next.js frontend and the Cockpit CMS backend.

#### Install Next.js Dependencies

Create folder and navigate to the `frontend` directory then install the dependencies:

```bash title="install dependencies NextJS"
cd frontend
npm install
``` 

#### Install Cockpit CMS

Create folder and navigate to the `backend` directory and install Cockpit CMS:

1.  Download the latest version of Cockpit CMS from the official repository or directly from the [Cockpit CMS website](https://getcockpit.com/).
2.  Extract the files into the `backend` directory.
3.  Ensure the `storage` and `config` directories are writable.

### Configure Environment Variables

You'll need to set up environment variables for the frontend.

#### Frontend (.env)

Create a `.env` file in the `frontend` directory and add your environment variables:

```plaintext title="frontend/.env"
HOST=https://your.cockpit.domain
DOMAIN=https://your.main.domain

# clientSide (Optional if you want to create components with CSR)

NEXT_PUBLIC_HOST=https://your.cockpit.domain
```

#### Backend (Optional - config/config.php)

Edit the `config.php` file in the `backend/config` directory to set up your database connection and other settings:

```php title="backend/config/config.php"
# use mongodb as main data storage
'database' => [
    'server' => 'mongodb://localhost:27017',
    'options' => [
        'db' => 'cockpitdb'
    ]
],
```

### Start the Development Servers

#### Start the Cockpit CMS Backend

Navigate to the `backend` directory and start the Cockpit CMS server:

```bash title="start your cockpit cms"
composer serve
``` 

This will start Cockpit CMS on `http://localhost:8080`.

#### Start the Next.js Frontend

Navigate back to the `frontend` directory and start the Next.js development server:

```bash title="start your CockpitNest"
npm run dev
``` 

This will start the Next.js frontend on `http://localhost:3000`.

### Access Your Project

-   **Frontend:** Open your browser and navigate to `http://localhost:3000` to view your site.
-   **Backend:** Access the Cockpit CMS admin interface at `http://localhost:4000/cockpit`.

### Deploy Your Project

When you're ready to deploy, follow these steps:

#### Build the Next.js Frontend

```bash title="build NextJS frontend"
npm run build
npm run start
``` 

Deploy the built project to your preferred hosting provider.

#### Deploy Cockpit CMS

Follow the standard procedure to deploy Cockpit CMS on your server, ensuring all configurations are properly set up.
