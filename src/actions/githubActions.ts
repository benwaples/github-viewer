import { UserDetails, UserRepoType } from "../types"

export const SET_USERNAME = 'setUsername'
export const setUsername = (username: string) => {
  return { type: SET_USERNAME, payload: username }
}

export const SET_USERDETAILS = 'setUserDetails'
export const setUserDetails = (userDetails: UserDetails) => {
  return { type: SET_USERDETAILS, payload: userDetails}
}

export const SET_USERREPOS = 'setUserRepos'
export const setUserRepos  = (repos: UserRepoType[]) => {
  return { type: SET_USERREPOS, payload: repos}
}

export const SET_LOADING = 'setLoading'
export const setLoading = (loading: boolean) => {
  return { type: SET_LOADING, payload: loading}
}

export const SET_ERROR = 'setError'
export const setError = (error: string | null) => {
  return { type: SET_ERROR, payload: error}
}