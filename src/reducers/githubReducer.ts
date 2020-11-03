import { ActionType } from "../types";
import { SET_USERDETAILS, SET_USERNAME, SET_USERREPOS } from '../components/actions/githubActions'

const initialState = {
  username: '',
  userDetails: {},
  userRepos: []
}

export default function reducer(state = initialState, action: ActionType) {
  switch(action.type) {
    case SET_USERNAME: 
      return {
        ...state,
        username: action.payload
      }
    case SET_USERDETAILS:
        return {
          ...state,
          userDetails: action.payload
        }
    case SET_USERREPOS: 
        return {
          ...state,
          userRepos: action.payload
        }
  }
}