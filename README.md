# CS-465-GitHub-repository

Travlr Full Stack Application – README
Overview

This project is a full stack web application built to support both customer-facing features and an administrative interface. The application allows users to view travel packages while giving admins the ability to create, update, and manage trips through a secure login system. The final version includes authentication using JWT to protect admin routes and data.

Architecture

In this project, I worked with multiple types of frontend development, which each served a different purpose.

The customer-facing side was built using Express with HTML and Handlebars. This approach uses server-side rendering, meaning the server builds the page and sends it to the browser. It is simple and fast for basic content but less interactive.

On the other hand, the admin side was built as a single-page application (SPA) using Angular. Instead of reloading pages, the SPA dynamically updates the UI, which makes it feel faster and more modern. It also allowed me to separate logic into components and services, making the app easier to manage.

JavaScript was used across both approaches, but in different ways. In Express, it handled server-side logic, while in Angular, it powered the client-side interactivity and communication with the API.

The backend used MongoDB, which is a NoSQL database. This was a good choice because the data (like trips) is flexible and doesn’t require a strict structure. MongoDB stores data in JSON-like documents, which fits naturally with JavaScript and made it easier to pass data between the frontend and backend.

Functionality

JSON is different from JavaScript because it is purely a data format, not a programming language. It is used to store and transfer data, while JavaScript is used to manipulate that data. In this project, JSON acted as the bridge between the frontend and backend. The Angular app sends and receives JSON data through API calls, and the backend processes that data using JavaScript.

During development, I refactored several parts of the application to improve functionality and efficiency. One example was moving repeated UI elements into reusable Angular components like the trip card. Instead of rewriting the same code multiple times, I created one component and reused it wherever needed.

This made the code cleaner, easier to maintain, and more scalable. If I needed to update how trips were displayed, I only had to change it in one place instead of multiple files.

Testing

Testing in a full stack application involves working with API methods and endpoints. Each endpoint, such as GET, POST, and PUT, needs to be tested to make sure it correctly handles requests and returns the right data.

I used tools like Postman to test API endpoints by sending requests and checking responses. This helped confirm that data was being retrieved, created, and updated correctly in the database.

Adding security introduced more complexity. With authentication in place, endpoints required a valid token to access them. This meant I had to test both authorized and unauthorized requests to make sure the system was secure. It also showed me how important it is to protect sensitive routes in real-world applications.

Overall, I learned how methods, endpoints, and security all work together to create a reliable and secure backend.
