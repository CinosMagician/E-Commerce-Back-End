# Goods and Sales Back End

## Description

This project is to demonstrate the connections of a database to use sequilize to perform GET/POST/PUT/DELETE requests for a commerce shop. Such as adding new products with tags and categories. Updating them all, adding new products, tags or caterogies and removing them.

## Table of Contents
- [Installation](#installation-instructions)
- [Usage](#usage-info)
- [Demo](#demo-video)
- [Questions](#questions)

## Installation Instructions

As this is done on a local machine, the .env file is not made public and will not be available for public download. To set up, first run 
```
npm install
```
To add package depentantcies. Make sure to connect to postgres to set up the database, once connected run 
```
\i db/schema.sql\q
```
This will first drop the database if it already exists in case of double up, then create the new database. Once this is done it will exit out of postgres. Next run 
```
npm run seeds
```
To then seed up the database with sample data. After which the database is ready to go, just run
```
node server.js
```
To establish a connection with the server. By using a program like insomnia, we can then use the connect to get the data, post new data, edit specific data and delete data. All of this can be seen in the demo video.
    
## Usage Info

This can be used to demonstrate having a shop, with different products and tags and categories, showing how they link together. As seen in the video below.
    
## Demo Video

Video Link: <a href="https://drive.google.com/file/d/12s52FJnLZavo4HkELIFWhKrw3ohDRgYp/view">https://drive.google.com/file/d/12s52FJnLZavo4HkELIFWhKrw3ohDRgYp/view</a>

## Questions

If you wish to see any of my other works,
here is a link to my GitHub Page: [CinosMagician](https://github.com/CinosMagician)

If you wish to contact me directly, please email me: lachyhughes@bigpond.com
