# Reddit Museum

[View Live WebApp](https://redditmuseum.netlify.app/)

## Please note

This project is currently in development mode and is being updated daily 

## Overview

A digital art gallery that displays art collected from the various artistic enclaves that exist in the world of Subreddits, and Redditors. This project was inspired by the need for more opportunities to explore the creative content of the internet without the advertisements, data collection, and distractions that are usually present on prominent social media platforms. Artists are credited and their profiles are linked along with links to the original Reddit post. The content/art can be curated/filtered by the user based on (pre-defined) art genre categories or (custom) search terms. There is no need to log in and the user is not required to have a Reddit account.

## To Do List

- fix loading effect to hold down actual size of media being loaded. Also make sure prior title remains cleared
- make react route aware of current genre category
- incorporate react-router into mobile menu
- work on subsub menu
- prevent youtube iframes from crashing/overloading page
- place full screen button right below image/media
- create slide show option that plays art of selected gallery on selected time interval (2sec, 5sec, 10sec)
- add zoom in/out buttons for image in full screen mode (and make sure to allow default browser zoom to work - currently not working)- work on accessing sound in reddit videos
- add search button (and map to enter button) to activate search, also show amount of search results on the top of the search results page
- make sure that every genre loads a minimum of 35 images (if first request < 35 than automatically request and load the next batch or results)
- add a share link button option
- add a chromecast / cast to tv option
- create touch/swipe effect for gallery on mobile
- make videos stop playing automatically when user scrolls out of sight
- figure out how to make a 3D art/photo frame with pure css
- add box shadow/blur to post images
- rename menu selector to "Museum Map" (also add cute map style and name banner)
- make gal button icon lighter (less bold)
- create an array of search keywords out of every individual title word
- create footer?
- add download button
- create video banner like MET website
- look into alternative state management options (react context ?)

## Must-Fix/Bugs

- detect embedded videos inside galleries
- sound in videos

## Features

- maybe only load by default posts that have above x amount of likes. This will ensure the quality of the photo/art (more likes = more relatable / more captivating). Additionally, maybe i can add a filter by amount of likes option where user gets to set standard of the art they load.
- allow user to filter out all NSFW posts
- add load more button
- filter through art by genre
- filter through art using the search bar
- create a shuffled section which combines a random mix of art from all the galleries
- figure out how to load photos 4 times a day to a server and host from there

### User Guide

- current version skips/blocks posts with externally hosted media (embedded youtube videos etc.)
- current version skips/blocks pure text posts (with no img/video media)

## Potential Extra Features

- merge and multiple subreddits of similar genres in same "genre page"
- change image resolution from default
- download img button
- optimize hidden gallery images to only load after the rest of the visible page has completed loading
- create a weekly newsletter sent via email that curates all the top art from each genre

## Details and Specs

### Concepts Applied

- Making HTTP fetch requests to an external web API (the Reddit API)
- Working with JSON data
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
