# Vue 2 with Webpack 4 + GraphQL Setup

## Master branch

- Basic Vue 2 + Webpack 4 setup

## apollo-graphql feature branch

- Basic Vue 2 + Webpack 4 + Vue-Apollo setup
- Using public GraphQL endpoint: 'https://countries.trevorblades.com/'

## vuex_vue-router feature branch

- Basic Vue 2 + Webpack 4 + Vue-Apollo setup
- Using public GraphQL endpoint: 'https://countries.trevorblades.com/'
- Vuex + Vue-Router setup
- Use Vuex action for GraphQL query
- Use Vue-Router 'Per-Route Guards' for fetching GraphQL data and use NProgress to display status bar at the top of the page while waiting for the data
- Above approach allows the component that originally does the data fetching and rendering to have less dependency (no longer needs to involve data fetch from vue-apollo and access state from Vuex)

## firebase-auth feature branch

- Add firebase (email/password) auth
- Add login/sign-up pages
- Configure 'Continents' page to be protected by firebase auth and requires log in /or sign up to access the page
