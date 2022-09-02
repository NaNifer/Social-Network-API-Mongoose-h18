# Project Name - Social Network API in Mongoose

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Demo](#Demo)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Social networking platforms use several technologies in their full-stack applications to build and structure their API's.

### The challenge

The Social Network API in Mongoose challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This app uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, and the native JavaScript Date object to format timestamps.

### User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

### Demo
A [walkthrough video](https://drive.google.com/file/d/1qlYVXGY_6yPDJhXmqOTJO5r-SlZDhvRc/view) that demonstrates its functionality.

### Links

- Solution URL: [GitHub Repo](https://github.com/NaNifer/Social-Network-API-Mongoose-h18)

## My process

### Built with

- JavaScript
- NodeJS
- Express.js
- Mongoose
- Mongo Database​

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

If you want more help with writing markdown, check out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax) - Mongoose - validate email syntax
- [How to Seed MongoDB Database From Node](https://javascript.plainenglish.io/seeding-mongodb-database-from-node-the-simplest-way-3d6a0c1c4668) - A simple and straightforward article on seeding your MongoDB database.

## Author

- GitHub - [NaNifer](https://github.com/NaNifer)
- Portfolio - [Nifer Kilakila](https://nanifer.github.io/Nifer-Kilakila-Portfolio-h2/)

## Acknowledgments

Big thanks to the TA's for quick answers to questions, and to my tutor this week Andres Long. I appreciate your patence and great information.