# ecommerce-sample

E-commerce app using React, SASS, Redux, Hooks, GraphQL, Stripe, Firebase

## Tech Stack

- [`React`](https://reactjs.org/) - A JavaScript library for building user interfaces
- `Redux`
- `React Router`
- `GraphQL`
- [`Firebase`](https://firebase.google.com/docs/database) - Store and sinc data with NoSQL cloud database. Data is synced across all clients in realtime, and remains available when your app goes offline
- `SASS` - A SASS file is a Syntactically Awesome StyleSheets file. It contains Sass syntax, which is an extension of CSS used to format the layout of webpages.
- [`UTF-8 Dingbats`](https://www.w3schools.com/charsets/ref_utf_dingbats.asp) Represents on browser what characters are displayed in HTML
- [`Redux Persist`](https://www.npmjs.com/package/redux-persist) is a library that allows saving a Redux store in the local storage of an application.
- [`lodash`](https://www.npmjs.com/package/lodash.memoize) library has a memoize helper function we can use to memoize selectCollection. `Memoize` does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function which returns our selector. By wrapping this fucntion in memoize, we're saying that whenever this function gets called and receives collection UrlParam, we want to memoize the return of this function(in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time.
- [`Stripe`](https://stripe.com/docs) sample credit [card](https://stripe.com/docs/testing#cards) for payments: 4242 4242 4242 4242 - exp: 01/23 -- cw: 123
  - yarn add react-stripe-checkout

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

### To deploy to Heroku

- Install CLI
- Login to Heroku with CLI and create new build Heroku project

```
heroku login
heroku create ecommerce-store-sample --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master
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
- After deploying go to authentication/authorized domains and add the deployed domain to be able to use the sign in feature

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
  ```
  export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //to get a firestore snapshot of user to add to firestore database
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      //create a new user ref
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
  };
  ```

## React tips

- When importing SVG in React we can use `import {ReactComponent as Logo}`. The `ReactComponent` import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename. This is React library special syntax. More info [here](https://create-react-app.dev/docs/adding-images-fonts-and-files/).

### The job of a React Developer - Data Flow

1. Decide on Components
2. Decide the State and where it lives
3. What changes when state changes

### Redux 3 principles

- Single source of thrut
- State is read only (immutability)
- Changes using pure functions

### Memoization ~ ~ Caching

- When we use a selector in Redux, the component gets called with every rendering of any other component creating new state every time even if the value is the same.
- We can cache these selectors(memoization) using reselect library that will check if the values of the selectors are the same the component should not be re rendered. These selectors can be made reusable.

  - Redux's mapStateToProps has a shallow equality check for every value in the object. It wont' replace values if they pass a shallow equality check which means it won't needlessly re-render, but if we have transformation logic it's still valuable to memoize it with a selector to save us running duplicate logic to get the same output.

  - Add library to project: `yarn add reselect`
  - import { createSelector } from 'reselect'

  ```
  import { createSelector } from 'reselect';

  const selectCart = (state) => state.cart;

  //Memoized selector
  export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
  );

  export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  ```

#### Currying is an advanced technique of working with functions. Currying doesn't call a function. It just transforms it.

- Currying is a transformation of functions that translates a function from callable as f(a,b,c) into callable as f(a)(b(c)) ex:

```
const multiply = (a,b ) => a*b;
multiply(3,4)

const curriedMultiply = (a) => (b) => a*b
curriedMultiply(5)(3)
```

##### Data Normalization

[Hash Tables vs Arrays](https://www.kirupa.com/html5/hashtables_vs_arrays.htm) Storing data in an object(Hash Table) instead of an array for easy, inexpensive search. This is a common computing optimization when talking about data structures.
