## Petful App

Created by Mason Reichbauer and Anthony Bostic
[Live App Link](https://petful-app.anthonytb.now.sh)
[client side repo link](https://github.com/thinkful-ei-iguana/Mason-Anthony-Petful-Client)
[API Repo Link](https://github.com/thinkful-ei-iguana/Mason-Anthony-DSA-Petful)

## Technology Used

React, HTML, CSS, JavaScript, JSX, Linked Listed, Queues

## Summary

This is a pet adoption app that utilizes Queues and Linked lists. The adoption process is on a first come first serve basis (Queue) so there may be a wait, but you will be able to see where you are in line. Once it is your turn to adopt you will be presented with 2 animals, a cat and a dog. You can adopt the cat, the dog or both! The 2 animals that you will be presented with are a cat and a dog that have been here the longest (Queue). We do this to ensure that animals find a home as quick as possible. If you would like 2 of the same animal then you will have to adopt one and wait in line until it is your turn again to adopt.

## How do set up?

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
