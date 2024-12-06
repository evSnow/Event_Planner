<summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-this-program">About This Program</a>
    </li>
    <li>
      <a href="#installation-process">Installation Process</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#built-with">Built With</a></li>
  </ol>

## About This Program
There are many great events around the UNT campus hosted by a variety of groups; however, the lack of coordination as well as the difficulty of finding some events makes planning much more difficult. This is where the event planner comes into play, allowing guests and account holders to:
* Create their own events to be hosted on the event planner database
* View a list of all events on the database
* Plan a booking with any event in the database
* Store event information in a personal account with the system

Although not all events are guaranteed to show up within the database, a centralized system that allows anyone to upload event information will greatly increase the convenience across campus for those wondering about possible uses of leisure time in the future.

## Installation Process
### Requirements
* node.js 
* mongodb

### Setup
Type `npm install` in your terminal of choosing while navigated to the main folder of the project, followed by `npm start` to run the program. If the program does not successfully run, install the following four packages with `npm install <name>` before attempting again:
* `express`
* `path`
* `morgan`
* `mongoose`

## Usage
The event planner allows a user to create, book, and track events submitted by other users of the program. Additionally, users can save events they have signed up for if done so when logged into the system.

## Built With

* [![MongoDB][MongoDB.js]][MongoDB-url]
* [![EJS][EJS.js]][EJS-url]
* [![Node.js][Node.js.js]][Node.js-url]

[MongoDB.js]: https://img.shields.io/badge/MongoDB-202020?style=for-the-badge&logo=MongoDB
[EJS.js]: https://img.shields.io/badge/EJS-202020?style=for-the-badge&logo=EJS
[Node.js.js]: https://img.shields.io/badge/node.js-202020?style=for-the-badge&logo=Node.js

[MongoDB-url]: https://www.mongodb.com/
[EJS-url]: https://ejs.co/
[Node.js-url]: https://nodejs.org/
