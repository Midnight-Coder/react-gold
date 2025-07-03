
# Deprecation Notice
This has been deprecated in favor of its [TSX version](https://github.com/Midnight-Coder/react-gold-tsx)

# React Gold

Skeleton SPA; ready for production.

Tech Stack: React, [Synthetic-Redux (Redux + Redux-Saga)](https://www.npmjs.com/package/synthetic-redux), Material-UI, React Testing Library, Jest, ESLint, Docker, CircleCI

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dive right in `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:4140](http://localhost:4140) to view it in the browser.


### Code organization

1. apiUrls.js ->  API endpoints organized as `exported consts` per application feature
2. redux: Types.js - 1 action type per action (synthetic redux dynamically creates error and success type)
3. /pages -> Each feature is an app directory. The page handles the API communication & error handling
4. /pages/<page>.redux.js -> Synthetic Redux configuration for the page   
5. /components -> Each feature has multiple pure components orchestrated by one pure component
6. /components/common -> Common ReactJS components
7. Theme.js -> Material UI Opinions & Overrides
8. Tests -> unit: For services, redux functions
9. Tests -> integration: For React components

### To recreate from scratch

```
npx create-react-app
npm i react-router-dom react-redux redux-saga 
npm install @material-ui/core @material-ui/icons ( Add appropriate Fonts in index.html)
npm i eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
``` 
