// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'vue-graphql',
      // URL to the GraphQL API
      url: 'https://my-gql.herokuapp.com/v1/graphql'
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js']
  }
}
