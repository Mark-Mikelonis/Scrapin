# Scrapinator
The Scrapinator is a web scraper using MongoDB, Mongoose, Node, Express, Cheerios, Axios, Handlebars and nodemon. Due to the nature of varied webstie heirarchical structure the scrape function needs to be altered for new websites to ensure that the proper data is targeted.


## LINK
[Scrapinator](https://radiant-wave-89626.herokuapp.com/ "Scrapinator")

## INSTRUCTIONS FOR USING THE WEBSITE
  * Visit link above.
  * Click the scraper icon in the upper left corner of the screen for a fresh scrape of Arstechnica.com.
  * You will be presented with the most current articles from the website
    * There will be a Title, Summary, Link to the article as well as an option to make and save notes for each article.

![Scrapinator ](/public/assets/images/scrapinator.png)


## INSTRUCTIONS FOR USING THE WEB APP

## DEPENDENCIES
  * If you plan on using the code for this app you will need the following dependencies.
    * express, express-handlebars, mongoose, body-parser, cheerios and request

## INSTALLATION   
  1. Clone the repo down from github by clicking the clone repo button and copying the link
  2. From the command line type the following command:
   `git clone <github clone link>` 
    this repo clone link is `git@github.com:Mark-Mikelonis/Scrapinator.git`
  3. cd into the newly cloned directory
  4. Initialize the app for npm. From the command line type the following command:
   `npm init` 
  5. Install all npm dependencies. From the command line type the following command:
   `npm install`
  6. Start your server. From the command line type the following command:
    `nodemon server.js`  
  7. Point your browser to `localhost:3333` and the app should launch
