# NoSql - Social Network API

## Description

A social network application that allows users create, read, update and delete users/friends/thoughts.

## Table of Contents

- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Installation](#Installation)
- [Technologies Used](#Technologies-Used)
- [License](#License)
- [Live Demo](#Live-Demo)

### User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

### Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

### Installation

1. Clone repo from Github and open in VS code.
2. Open terminal in VS code and enter in command npm run start.
3. In insomnia got to http://localhost:3001/api/user and test routes

### Technologies Used

The technolgoies used to build the application is express.js, mongoDB and nodes.js

### License

[MIT](https://choosealicense.com/licenses/mit/)

### Live Demo

https://drive.google.com/file/d/1HJH5mOxeaUeRMHpsK3JayEmsFfD7zytX/view
