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

export const QUERY_USERS = gql`
  query Users {
    users {
      id
      first_name
      last_name
      email
    }
  }
`

export const QUERY_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
      countries {
        code
        name
        currency
        emoji
        languages {
          code
          name
        }
      }
    }
  }
`
