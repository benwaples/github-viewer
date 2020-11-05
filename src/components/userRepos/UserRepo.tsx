import React from 'react'
import { UserRepoType } from '../../types'

export const UserRepo = ({ name, url, language }: UserRepoType) => {
  return (
    <>
      <h3><a href={url}>{name}</a></h3>
      <p>Main Language Used: {language}</p>
    </>
  )
}
