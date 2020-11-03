export type GithubReducerProps = {
  state: { username: string, userDetails: UserDetails, userRepos: string[]},
  action: {type: string, payload: string}
}

export type StateType = {
  username: string, 
  userDetails: UserDetails, 
  userRepos: string[]
}

export type ActionType = {
  type: string, 
  payload: string | UserDetails | string[]
}

export type UserDetails = {
  profileUrl: string | null,
  name: string | null,
  location: string | null,
  email: string | null,
  bio: string,
  publicRepos: number
}