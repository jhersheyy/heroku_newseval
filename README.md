# Project Summary

This project is a web tool that runs a Natural Language Processing (NLP) API on an article provided by the user via URL. The web page will then update to display information provided by the API regarding the content at the URL.

The project is built off skeleton code provided by Udacity. Technologies used include webpack, express, sass, service workers, and the meaningcloud api.

## Getting started

After cloning the skeleton code, I followed the lesson plan to fix the basic functionality of the page, including:
* install webpack
* install babel
* add html webpack plugin
* correct paths to use dist folder
* remove style and js link tags in html
* create production vs development modes
* install cleanwebpackplugin
* convert css to sass files
* install loaders to convert sass to css
* fixed js functionality on dev and prod side
* set express server to run on port 8081
* add plugins to minify css

## Setting up the API

The Meaningcloud API (for sentiment analysis) is different from the Aylien API in that it has no SDK and there is only one key/id needed to make a request to the api.

### Step 1: Signup for an API key
First, I made an account with Meaningcloud [here](https://www.meaningcloud.com/developer/create-account). I verified my account and received my API KEY.

### Step 2: Install the SDK
As mentioned earlier, Meaningcloud has no sdk.

### Step 3: Require the SDK package
No sdk= no require statements.

### Step 4: Environment Variables
To ensure privacy I made a .env file to save my API KEY and added that file to the .gitignore list, so my information is not released. I also installed dotenv through npm and added these two lines to my server/index.js:

const dotenv = require('dotenv');
dotenv.config();

This way, I am able to later use process.env.API_KEY to access my key in the server side index.js.

### Step 5: Using the API

To use the API you have to set up a POST route, so the client side and server side can exchange information.

On the client side, I call the /testpost endpoint from the event-triggered handleSubmit function. Here the input url is taken from the UI and sent to the server side.

On the server side, I receive the url from the client side at the same /testpost endpoint and use it to query the API from the server side, where I have access to the process.env.API_KEY.

Here is the baseURL I used:
     'https://api.meaningcloud.com/sentiment-2.1?key='
And another chunk between the API KEY and query url:
     '&lang=en&url='

After receiving the query result, I transform it into JSON and send the result back to the client to upload the result, formatted, to the UI through DOM selectors.

## After the Aylien API

### Error Handling: Invalid User Input

To handle any potential errors, I nested my code in if statements that have conditionals to test input validity and api result status. I also added .catch blocks to my promises.

### Testing with Jest
I tested that my url checker function worked, my polarity translator (to make the api output more readable), and the overall functionality of my handleSubmit function.

### Service Worker Setup
To install service workers, I added the require and instantiate statements to the webpack config file for the production environment only, as service workers are not helpful in development. I then installed service workers on my terminal and added a script tag to my html.