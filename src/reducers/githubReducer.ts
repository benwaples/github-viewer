import { ActionType } from "../types";
import { SET_USERDETAILS, SET_USERNAME } from '../components/actions/githubActions'

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
  }
}