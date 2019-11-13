import gql from 'graphql-tag'

export const QUERY_EVENTS = gql`
  query Events {
    events {
      id
      name
      owner {
        email
        id
        first_name
        last_name
      }
    }
  }
`
