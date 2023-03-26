import { gql } from '@apollo/client';

export const QUERY_MYTEAMS = gql`
query getMyTeams($username: String!) {
  me(username: $username) {
    username
    state
    zip
    city
    teams {
      sport
      state
      city
      captain {
        username
      }
    }
  }
}`

export const SEARCH_TEAMS = gql`
query SEARCH_TEAMS($name: String, $sport: String, $state: String, $city: String, $team_zip_code: Int) {
  searchTeams(name: $name, sport: $sport, state: $state, city: $city, team_zip_code: $team_zip_code) {
    _id
    sport
    name
    state
    team_zip_code
    city
    captain {
      _id
      username
    }
    members {
      _id
      username
    }
  }
}`