import { UserDetails } from "../../types"

export const SET_USERNAME = 'setUsername'
export const setUsername = (username: string) => {
  return { type: SET_USERNAME, payload: username }
}

export const SET_USERDETAILS = 'setUserDetails'
export const setUserDetails = (userDetails: UserDetails) => {
  return { type: SET_USERDETAILS, payload: userDetails}
}