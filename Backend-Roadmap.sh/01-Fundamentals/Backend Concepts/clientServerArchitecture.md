# Request-Response Cycle

## How It Works:

1. **Client** – Makes an HTTP request (e.g., clicking a button).
2. **Server** – Processes the request and returns a response.

---

# HTTP Methods

✅ **GET** – Fetch data  
✅ **POST** – Submit data  
✅ **PUT** – Update data  
✅ **DELETE** – Remove data

---

# What is a REST API?

A **REST API** (Representational State Transfer API) is an Application Programming Interface (API) that follows the REST architectural style. REST defines a set of principles for designing web APIs.

The **REST API** refers to the **backend endpoints** that allow the frontend to communicate with the backend through HTTP requests.

---

| HTTP Method | Route (Endpoint)  | Functionality       |
| ----------- | ----------------- | ------------------- |
| GET         | /api/endpoint     | Fetch all users     |
| POST        | /api/endpoint     | Add a new user      |
| PUT         | /api/endpoint/:id | Update a user by ID |
| DELETE      | /api/endpoint/:id | Delete a user by ID |

---

## 🔹 Why is This Called a REST API?

✅ **Stateless** – Each request is independent; the server doesn’t store client state.  
✅ **Uses HTTP Methods** – GET, POST, PUT, DELETE.  
✅ **Returns JSON Responses** – Structured data format.  
✅ **Resource-based URLs** – (e.g., `/api/endpoint` represents a "users" resource).

---

## How REST APIs Work:

When a client makes a request via a **RESTful API**, it transfers a **representation** of the resource’s state to the requestor (or endpoint).  
This information is delivered in one of several formats over HTTP:

- **JSON** (JavaScript Object Notation)
- **HTML**
- **XML**
- **Python**
- **PHP**
- **Plain Text**

### HTTP Headers & Parameters

Headers and parameters in RESTful API requests contain important metadata, including:

✅ **Authorization** – Authentication credentials  
✅ **URI (Uniform Resource Identifier)** – Identifies the resource  
✅ **Caching** – Helps store responses for efficiency  
✅ **Cookies** – Maintains session-related information

---

# Principles of a RESTful API

For an API to be considered **RESTful**, it must conform to these criteria:

✅ **Client-Server Architecture** – Separates client, server, and resources, with requests managed through HTTP.

✅ **Stateless Communication** – The server does not store client information between requests; each request is independent.

✅ **Cacheable Data** – Allows caching to improve performance and reduce server load.

✅ **Uniform Interface** – Ensures a consistent structure for interactions, including:

- **Resource Identification** – Resources are identifiable and separate from their representations.
- **Manipulation via Representation** – The client can modify resources through received representations.
- **Self-Descriptive Messages** – Responses contain enough information for the client to process them.
- **Hypermedia as the Engine of Application State (HATEOAS)** – Clients can discover available actions via hyperlinks.

✅ **Layered System** – Organizes different server responsibilities (security, load-balancing, etc.) into hierarchies, invisible to the client.

✅ **Code-on-Demand (Optional)** – Servers can send executable code to the client to extend functionality.

---

REST APIs provide a scalable and efficient way to design web services, making them a fundamental part of modern web development. 🚀
