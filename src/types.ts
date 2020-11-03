export type GithubReducerProps = {
  state: { username: string, userDetails: UserDetails, userRepos: string[]},
  action: {type: string, payload: string}
}

export type ActionType = {
  type: string, 
  payload: string | UserDetails
}

export type UserDetails = {
  profileUrl: string | null,
  name: string | null,
  location: string | null,
  email: string | null,
  bio: string,
  publicRepos: number
}