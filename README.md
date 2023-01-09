# Reddit Museum

[View Live WebApp](https://redditmuseum.netlify.app/)

## Please note

This project is currently in development mode and is being updated daily

## Overview

A digital art gallery that displays art collected from the various artistic enclaves that exist in the world of Subreddits, and Redditors. This project was inspired by the need for more opportunities to explore the creative content of the internet without the advertisements, data collection, and distractions that are usually present on prominent social media platforms. Artists are credited and their profiles are linked along with links to the original Reddit post. The content/art can be curated/filtered by the user based on (pre-defined) art genre categories or (custom) search terms. There is no need to log in and the user is not required to have a Reddit account.

## To Do List

- generate custom share link on click of media shareButton
- allow sharing of image via injection of custom (sharedImg) gallery;
- create touch/swipe effect for gallery on mobile
- add zoom in/out buttons for image in fsMode (and make sure to allow default browser zoom to work - currently not working)
- make localHostedVideo's and embeddedYoutubeVideo's stop playing automatically on scroll-away
- add a collapse all button in the NavBarMenu
- add search button (and map to enter button) to activate search, also show amount of search results on the top of the search results page
- make sure that every genre loads a minimum of X images (if first request < X than automatically request and load the next batch or results)
- add a chromecast / cast to tv option
- create slide show option that plays art of selected gallery on selected time interval (2sec, 5sec, 10sec)
- make videos stop playing automatically when user scrolls out of sight
- create video banner like MET website for homepage
- on desktop it is difficult to view total portrait images + their title's at once on screen. Perhaps solve this by making a side poster (like in museums) where the title and additional info can go. Perhaps also incorporate some creative 3D art/photo frame animations
- design homepage
- create footer?
- look into alternative state management options (react context ?)

## Must-Fix/Bugs

- configure sound in locallyHosted reddit videos

## Features

- maybe only load by default posts that have above x amount of likes. This will ensure the quality of the photo/art (more likes = more relatable / more captivating). Additionally, maybe i can add a filter by amount of likes option where user gets to set standard of the art they load.
- allow user to filter out all NSFW posts
- add load more button
- filter through art by genre
- filter through art using the search bar
- create a shuffled section which combines a random mix of art from all the galleries
- figure out how to load photos every 6 hours to a server and host from there

### User Guide

- current version skips/blocks posts with externally hosted media (embedded youtube videos etc.)
- current version skips/blocks pure text posts (with no img/video media)

## Potential Extra Features

- allow users to add custom genres by adding a new genreName and pasting in a link of their favorite subreddit's. This could effectively turn this project into a custom gallery tool / bulletin-board by allowing the users to cast their favorite subreddit's to their TV thereby turning the tv into a gallery / bulletin center-piece with the capacity to shuffle and display content based on the user's choices. All these customizations should be stored and saved to a user's account. This will require figuring out how to create and store user accounts and their corresponding info).
- merge multiple subreddit's of similar genres in same "genre page"
- change image resolution from default
- download img button
- optimize hidden gallery images to only load after the rest of the visible page has completed loading
- create a weekly newsletter sent via email that curates all the top art from each genre
- figure out how to read most prominent color in a given image (or secondary) and automatically make background color that color in fullScreenMode
- rename nav menu to "Museum Map" (and add cute/creative map-style)

## Details and Specs

### Concepts Applied

- Making HTTP fetch requests to an external web API (the Reddit API)
- Working with JSON data
- working with navigation-menus, filepaths and url's using React-Router-Dom
- Loading an initial/default view of data
- Function Components and React Hooks
- State Management using the redux store
- Asynchronous Actions using Redux Thunks and Middleware
- Responsive Layouts (Users can use the application on both desktop/mobile)
- Using CSS Grid and Flexbox and media queries for layout, positioning, and responsiveness
- Creating smooth and pleasant transitions between CSS properties using CSS animations
- Deploying a website with Netlify

### Languages, Tools, Frameworks, and Libraries

- HTML5
- CSS3
- JavaScript
- React
- Redux & Redux-Toolkit
- Git and GitHub
- Command line
- Chrome DevTools, React DevTools, Redux DevTools
- React-Icons library
- Netlify
