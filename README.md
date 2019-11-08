# Tweeter Project

Tweeter is a simple, single-page Twitter clone project using HTML, CSS, JS, jQuery and AJAX front-end skills, and Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- md5
- Timeago.js

## Functional Requirements

- Primarily a client-side Single Page App (SPA)
- The client-side app communicates with a server via AJAX

## Display Requirements

1. Navigation bar with the compose box show/hide toggle
2. Tweet box to compose tweet
3. List the tweets in reverse-chronological order

## Behaviour Requirements

1. When clicked on navigation bar down-arrow, the compose box transitions between 'shown' and 'hidden' states
2. When user types into the compose tweet area the character counts in reverse order
   - if the tweet exceeds 140 characters the user is warned and is unable to tweet the the post
   - if the tweet textarea is empty then user is warned to enter tweet
3. When a user submits a valid tweet, the tweet displays on the top of the list with all the older tweets
4. The page should be responsive to different sizes and should not break the layout when viewed in different devices
