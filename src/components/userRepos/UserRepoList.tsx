import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../types'
import { UserRepo } from './UserRepo'

export const UserRepoList = () => {
  const userRepos = useSelector((state: StateType) => state.userRepos)

  const repoElements = userRepos.map(repo => <UserRepo {...repo} key={repo.name}/>)
  return (
    <>
    <h1>Users Repositories </h1>
      <ul>
        {repoElements}
      </ul>
    </>
  )
}
