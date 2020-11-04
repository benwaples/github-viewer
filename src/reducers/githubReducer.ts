import { ActionType, StateType, UserDetails, UserRepoType } from "../types";
import { SET_ERROR, SET_LOADING, SET_USERDETAILS, SET_USERNAME, SET_USERREPOS } from '../actions/githubActions'

export const initialState: StateType = {
  username: '',
  userDetails: {profileUrl: '', name: '', location: '', email: '', bio: '', publicRepos: 0},
  userRepos: [{name: '', url: '', language: '', html_url: '' }],
  loading: null,
  error: null
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
        userRepos: action.payload as UserRepoType[]
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload as boolean | null
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload as string | null
      }
    default:
      return state
  }
}