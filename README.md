# spacex_sapient

This app uses Express based nodejs app at the back-end, and react based app at front-end.
Back-end app is configured to serve '/client/build/index.html' page for every request. And then front end renders the components as per filters defined via query string.

## Built With

* [React](https://reactjs.org/) - The library for front-end
* [Express](https://expressjs.com/) - Web framework for Node.js
* [Nodejs](https://nodejs.org/en/) - JavaScript runtime for back-end
* [Redux](https://redux.js.org/) - State management library
* [Redux Thunk](https://www.npmjs.com/package/redux-thunk) - Thunk middleware for Redux

# Installing

Use any of below steps to run on local environment

```
npm install

cd client 
npm install
npm run build

cd ..
npm run start
```
or

```
npm install
npm run start
```
Inside a new terminal....
```
cd client 
npm install
npm run start
```
