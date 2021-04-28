# ecommerce-sample

E-commerce app using React, SASS, Redux, Hooks, GraphQL, Stripe, Firebase

## Tech Stack

- `React`
- `Redux`
- `React Router`
- `GraphQL`
- `Firebase`
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
