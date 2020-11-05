export type StateType = {
  username: string, 
  userDetails: UserDetails, 
  userRepos: UserRepoType[],
  loading: boolean | null,
  error: string | null
}

export type ActionType = {
  type: string, 
  payload: string | UserDetails | UserRepoType[] | boolean
}

export type UserDetails = {
  profileUrl: string | undefined,
  name: string,
  location: string | null,
  email: string | null,
  bio: string,
  publicRepos: number
}

export type UserRepoType = {
  name: string,
  url: string | undefined,
  language: string,
  html_url: string,
}