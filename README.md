# ecommerce-sample

E-commerce app using React, SASS, Redux, Hooks, GraphQL, Stripe, Firebase

## Tech Stack

- [`React`](https://reactjs.org/) - A JavaScript library for building user interfaces
- `Redux`
- `React Router`
- `GraphQL`
- [`Firebase`](https://firebase.google.com/docs/database) - Store and sinc data with NoSQL cloud database. Data is synced across all clients in realtime, and remains available when your app goes offline
- `SASS` - A SASS file is a Syntactically Awesome StyleSheets file. It contains Sass syntax, which is an extension of CSS used to format the layout of webpages.

### Getting Started

- Clone this project and refresh dependencies then cd into project and start on local host 300
  - `npm install`
  - `npm start`

### To update dependencies

- Remove yarn.lock file if you are using npm

```
rm -rf yarn.lock
npm update -D
npm start
```

- When there is a conflict on versions of babel-jest dependencies
  - Create a resolutions property in JSON file to force bable jest to use the more current version. Added just above scripts. npm install again

```
"resolutions": {
  "babel-jest": "24.7.1
}
```

### Firebase set up

- Create a new projed in your [firebase](https://console.firebase.google.com/u/0/) account
- Click add firebase to your web app
- Give it a name-db
- Register app
- In the terminal of your project `yarn add firebase`
- In your root folder add a new folder for `firebase`
- Create a new js file `firebase.utils.js`
- Add Firebase SDK by copying and pasting the firebaseConfig script

```
import firebase from "firebase/app"
//import the database access
import 'firebase/firestore'
//import the auth for app
import 'firebase/auth'

const config = {
  pase the firebaseConfig object here
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

```

- To create the option for the user to sign in with google account
  - In firebase account/project overview/project settings/
  - Then Build/Authentication/signin method/
  - Import the signIn with Google method to sign in component

## React tips

- When importing SVG in React we can use `import {ReactComponent as Logo}`. The `ReactComponent` import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename. This is React library special syntax. More info [here](https://create-react-app.dev/docs/adding-images-fonts-and-files/).

### The job of a React Developer

1. Decide on Components
2. Decide the State and where it lives
3. What changes when state changes
