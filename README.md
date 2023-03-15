## Syncreon Project






## Instruction to Run the project
Step 1: clone the project

step 2: Install npm 

step 3: then go into the file directory do npm i

step 4: Setup DataBase for macOs
        
        run mongod
        run brew --prefix
        run brew services start mongodb-community@4.2
        this is to stop :brew services stop mongodb-community@4.2

        Link:https://www.mongodb.com/docs/v4.2/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition

step 5: To run the backend. open the terminal with file directory 'server'

        run node index.js

step 6: To run the front end. Open the terminal with file directory 'syncreon project'

        run npm start
        Runs the app in the development mode.\
        Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
        
## Data Base Relation:

* The relationship between teh customer table and the order table is one  --> many relation.
* Relation between the customer table and the address table is one --> many relation.(Customer can have multiple address)
* Relation between the Order table and OrderContent table is one ---> many relation.

** Customer Table:

        Columns:
        customerCode (Primary Key)
        FirstName
        LastName
        Phone
        Email

** Address Table:
        
        Columns:
        Addresscode (Primary Key)
        AddressType
        FullName
        AddressLine1
        AddressLine2
        customerCode (Foreign Key to Customers)
        

** Orders Table:

        Columns:
        ReferenceNum (Primary Key)
        Customercode 
        CountryCode(Foreign Key to Customers),
        AddressCode(Foreign Key to Addresses)


** Order Content Table:

        Columns:
        Reference Number(Foreign Key to Orders)
        ItemNum (Primary Key)
        ItemDescription

## why Mongodb??
MongoDB and MySQL are both database management systems, but they differ in their underlying data models and approaches to data management. Here are some advantages of MongoDB over MySQL:

*Flexible data model: MongoDB is a document-oriented database, which means it stores data in a JSON-like format called BSON. This allows for flexible data modeling and makes it easier to work with complex data structures. In contrast, MySQL is a relational database, which requires you to define a schema before storing data. This can be limiting for certain use cases.

*Scalability: MongoDB is designed to scale horizontally, which means it can handle large amounts of data and traffic by distributing data across multiple servers. MySQL can also scale horizontally, but it requires more effort and expertise to set up and manage.

*Performance: MongoDB uses a memory-mapped storage engine that allows for faster reads and writes. This makes it ideal for high-traffic applications that require fast access to data. MySQL can also be optimized for performance, but it requires more tuning and configuration.

*Schema-less design: MongoDB allows you to store data without a predefined schema, which means you can add or modify fields as needed without affecting the existing data. This makes it easier to evolve your data model over time. In contrast, MySQL requires you to define a schema upfront, which can be inflexible for certain use cases.

*Developer-friendly: MongoDB has a rich query language and provides many features that make it easier for developers to work with data. For example, it supports dynamic queries, aggregation, and full-text search. MySQL also has a powerful query language, but it can be more difficult to work with for certain use cases.

In summary, MongoDB offers advantages over MySQL in terms of flexibility, scalability, performance, and developer-friendliness. However, it may not be the best choice for all use cases, and you should evaluate your requirements carefully before choosing a database management system.



# Home Screen:

![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Home_Page.png)
    

# Dashboard Screen:
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Screen1.png)
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Screen%201-2.png)
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Screen1-3.png)


# Update Model screen:
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Model-1.png)
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Model%201-2.png)

# Upload Screen
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Upload%20Screen%20Shot.png)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
