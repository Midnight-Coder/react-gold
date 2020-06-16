# React Gold

Skeleton SPA ready for production.
Tech Stack: React, Redux, Redux-Saga, Material-UI, React Testing Library, Jest, ESLint, Docker, CircleCI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dive right in `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:4140](http://localhost:4140) to view it in the browser.


### Code organization

1. urlConstants ->  API endpoints organized as export consts per application feature
2. redux: Types -> typically you'd need a FETCH_x, FETCH_x_SUCCESS, FETCH_x_ERROR
3. redux: Action generators, Reducers & Saga
4. /pages -> Each feature is an app directory. The page handles the API communication & error handling
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
