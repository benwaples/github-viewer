import { UserRepoType } from "../types"

export const getUserDetails = (username: string) => {
  try{
  return fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: new Headers({
      'Authorization': '76f2fb1723b166abdb974c7feed6937f5b8899f8',
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
  } catch(err) {
    throw new Error(err)
  }
  
}

export const getUserRepos = (username: string) => {
  try {
    return fetch(`https://api.github.com/users/${username}/repos`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': '76f2fb1723b166abdb974c7feed6937f5b8899f8',
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