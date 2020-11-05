import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, getUserRepos } from '../../services/getGithubUser'
import { StateType, UserDetails, UserRepoType } from '../../types'
import { setError, setLoading, setUserDetails, setUsername, setUserRepos } from '../../actions/githubActions'

export const Username = () => {
  const username = useSelector((state: StateType) => state.username)
  
  const dispatch = useDispatch()

  const handleChange = ({ target }: {target: {value: string}}) => {
    dispatch(setUsername(target.value))
  }

  const handleClick = () => {
    dispatch(setLoading(true))
    getUserDetails(username)
      .then((userDetails: UserDetails) => dispatch(setUserDetails(userDetails)))
      .catch(err => dispatch(setError(err)))
    
    getUserRepos(username)
      .then((repos: UserRepoType[]) => dispatch(setUserRepos(repos)))
      .catch(err => dispatch(setError(err)))
      .finally(() => dispatch(setLoading(false)))
  }
  


  return (
    <div>
      <label htmlFor="username">Enter Username</label>
      <input 
        id="username"
        type="text"
        value={username}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Get Github Repository Data</button>
    </div>
  )
}
