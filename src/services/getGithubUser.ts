import { UserRepoType } from "../types"

export const getUserDetails = (username: string) => {
  
  return fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: new Headers({
      'Authorization': process.env.MY_GITHUB_TOKEN as string,
      'User-Agent': 'Networkr'
    })
  })
    .then(res => res.json())
    .then(user => ({
      profileUrl: user.html_url,
      name: user.name,
      location: user.location,
      email: user.email,
      bio: user.bio,
      publicRepos: user.public_repos
    }))
  
  
}

export const getUserRepos = (username: string) => {
  try {
    return fetch(`https://api.github.com/users/${username}/repos`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': process.env.MY_GITHUB_TOKEN as string,
        'User-Agent': 'Networkr'
      })
    })
      .then(res => res.json())
      .then(repos => repos.map((repo: UserRepoType) => ({
        name: repo.name,
        url: repo.html_url,
        language: repo.language
      })))
  } catch(err) {
    throw new Error(err)
  }
}