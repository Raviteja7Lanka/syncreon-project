## Syncreon Project


# Frontend:

        React js
        
# Backend:

        Nodejs

## Instruction to Run the project
Step 1: clone the project

step 2: Install npm 

step 3: then go into the file directory do
        
        run npm i

step 4: Setup DataBase for macOs
        
        run mongod
        run brew --prefix
        run brew services start mongodb-community@4.2
        this is to stop :brew services stop mongodb-community@4.2

        After Dowloading open the application
        * give the URI: "mongodb://localhost:27017"

        You are all set with the database.

        For reference:
        Link:https://www.mongodb.com/docs/v4.2/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition

step 5: To run the backend. open the terminal with file directory 'server'

        run node index.js

        Server running on port 4000

step 6: To run the front end. Open the terminal with file directory 'syncreon project'

        run npm start

        Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


step 7: Make sure when your uploading file have No spaces in the beging of the file.

## API Used:
        * get: get('/getAllOrders')
        * put: put('/update')
        * post: post('/upload') 
        
## Data Base Relation:

* The relationship between teh customer table and the order table is one  --> many relation.
* Relation between the customer table and the address table is one --> many relation.(Customer can have multiple address)
* Relation between the Order table and OrderContent table is one ---> many relation.

** Customer collection:

        The _id field works as the primary key for the MongoDB collection

        Columns:
        customerCode 
        FirstName
        LastName
        Phone
        Email

** Address collection:
        
        The _id field works as the primary key for the MongoDB collection
        
        Columns:
        Addresscode 
        AddressType
        FullName
        AddressLine1
        AddressLine2
        customerCode 
        

** Orders collection:

        The _id field works as the primary key for the MongoDB collection

        Columns:
        ReferenceNum 
        Customercode 
        CountryCode,
        AddressCode


** Order Content collection:

        The _id field works as the primary key for the MongoDB collection

        Columns:
        Reference Number
        ItemNum 
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

![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Images/Home_Page.png)
    

# Dashboard Screen:
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Images/Screen1.png)
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Images/Screen%201-2.png)
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Images/Screen1-3.png)


# Update Model screen:
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Images/Model-1.png)
![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Images/Model%201-2.png)

# Upload Screen
* This Screen only visible when the database has no data in it.
* You can only Upload the xml File with the same structure same info.

![Example image](https://github.com/Raviteja7Lanka/syncreon-project/blob/master/Images/Upload%20Screen%20Shot.png)


