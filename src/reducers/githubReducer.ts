import { ActionType, StateType, UserDetails } from "../types";
import { SET_USERDETAILS, SET_USERNAME, SET_USERREPOS } from '../components/actions/githubActions'

export const initialState: StateType = {
  username: '',
  userDetails: {profileUrl: '', name: '', location: '', email: '', bio: '', publicRepos: 0},
  userRepos: []
}

export default function reducer(state = initialState, action: ActionType): StateType {
  switch(action.type) {
    case SET_USERNAME: 
      return {
        ...state,
        username: action.payload as string
      }
    case SET_USERDETAILS:
      return {
        ...state,
        userDetails: action.payload as UserDetails
      }
    case SET_USERREPOS: 
      return {
        ...state,
        userRepos: action.payload as string[]
      }
    default:
      return state
  }
}