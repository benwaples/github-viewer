import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../types'

export const UserDetails = () => {
  const userDetails = useSelector((state: StateType) => state.userDetails)
  const loading = useSelector((state: StateType) => state.loading)
  const error = useSelector((state: StateType) => state.error)
  if(error) console.log(error, 'error')
  if(loading) return <h1>Loading..</h1>
  if(error) return <h1>{error}</h1>
  return (
    <div id="userDetails">
      {
        userDetails.name.length > 0  &&
        (
        <>
          <h1><a href={userDetails.profileUrl}>{userDetails.name}</a></h1>
          <p>Location: {userDetails.location}</p>
          <p>Email: {userDetails.email}</p>
          <p>Bio: {userDetails.bio}</p>
          <p>Number Of Public Repos: {userDetails.publicRepos}</p>
        </>
        )
      }
    </div>
  )
}
