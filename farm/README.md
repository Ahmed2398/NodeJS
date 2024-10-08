# learn-nod.js
---
# Node.js Project - Simple Product Website

## Project Overview

This project is a basic Node.js application that serves as a simple product website. It demonstrates the use of core Node.js modules like `http`, `fs`, and `url`, as well as custom modules to manage templates. The website includes an overview page displaying a list of products, a product detail page, and an API endpoint to serve product data in JSON format.

## Features

- **Overview Page**: Displays a list of products using dynamic HTML templates.
- **Product Page**: Shows detailed information for a specific product, based on the product's ID.
- **API Endpoint**: Provides product data in JSON format, which can be consumed by other applications or frontend components.
- **404 Page**: Custom error page for handling invalid routes.

## Project Structure

```
project-folder/
│
├── dev-data/
│   └── data.json            # JSON file containing product data
├── modules/
│   └── replaceTemplate.js   # Custom module for template rendering
├── templates/
│   ├── template-overview.html # HTML template for overview page
│   ├── template-card.html   # HTML template for individual product cards
│   └── template-product.html # HTML template for product detail page
└── index.js                 # Main Node.js server file
```

## Key Learning Points

### 1. Core Node.js Modules:
- **`http` Module**: Used to create an HTTP server that listens for incoming requests and sends responses back to the client.
- **`fs` Module**: Utilized to read files from the filesystem, such as HTML templates and JSON data.
- **`url` Module**: Parses URL strings to handle routing and query parameters.

### 2. Handling Routing:
- Different routes are managed by checking the `pathname` from the parsed URL. Depending on the route, different HTML pages or JSON data are sent as responses.

Great! With the `replaceTemplate.js` file, I can expand the README to explain how the template rendering works. Here's an updated section for the README file:

---

### 3. Dynamic HTML Templates:
- The **`replaceTemplate.js`** module is responsible for injecting product data into HTML templates. This module takes two inputs: the template HTML and the product data. It then replaces placeholder tags in the template (e.g., `{%PRODUCTNAME%}`) with actual product values (e.g., the product's name).

  **Key Features of `replaceTemplate.js`:**
    - Uses the `replace()` method with global modifiers (`/g`) to replace all instances of the placeholder tags with dynamic content.
    - Supports various placeholders like `{%PRODUCTNAME%}`, `{%PRICE%}`, `{%DESCRIPTION%}`, etc.
    - Conditionally adds a `not-organic` class to products that are not organic.

This template system allows the application to generate dynamic content for the overview and product pages, providing a more customized user experience based on the data provided.

---

Let me know if you need further adjustments or additions!
### 4. Serving JSON Data:
- The `/api` route serves the product data as JSON. This is useful for creating a RESTful API that can be accessed by other frontend components or applications.

### 5. Error Handling:
- A 404 page is returned when an invalid route is accessed, demonstrating basic error handling in a Node.js server.

## How to Run the Project

1. Clone this repository to your local machine.
2. Install Node.js if you haven't already.
3. Navigate to the project directory in your terminal.
4. Run the following command to start the server:
   ```
   node index.js
   ```
5. Open your browser and navigate to `http://127.0.0.1:8000/` to view the website.

## Conclusion

This project is a simple yet effective way to get familiar with Node.js and understand how to build a basic web server using core modules. It introduces important concepts like routing, template rendering, and serving JSON data, which are fundamental in backend development.

---

Feel free to adjust the README to better fit your project and learning experience. Let me know if you need any further assistance!