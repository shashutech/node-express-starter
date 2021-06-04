# Node & Express Starter

> A boilerplate for your next node and express web app. It follows **MVC** pattern. It can be used for both - REST API and fullstack web apps.

_Note - Haven't implimented the registration and login logic as there can be multiple ways to do it. Eg- JWT, Passport-local_

---

![Homepage](\public\images\homepage.png)
![Details](\public\images\details.png)

## Installation

#### DB Setup

Use your MongoDB connection URI in the file `config/DB_Config.js`

Run the following commands to install and run the app.

```
npm install
```

```
npm start
```

## Endpoints

Refer `views/details.handlebars` for the list of endpoints.

## Packages Used

- express
- express-handlebars
- mongoose

## Directory Structure

```
Node_Express_Starter
|
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
|   server.js
|
+---config
|       DB_Config.js
|
+---controllers
|       static-controller.js
|       user-controller.js
|
+---models
|       User.js
|
+---public
|   +---images
|   +---javascripts
|   |       client.js
|   |
|   \---stylesheets
|           style.css
|
+---routes
|       static.js
|       user.js
|
\---views
    |   details.handlebars
    |   index.handlebars
    |
    +---layouts
    |       main.handlebars
    |
    +---partials
    |       _footer.handlebars
    |       _navbar.handlebars
    |
    \---users
            login.handlebars
            register.handlebars

```
