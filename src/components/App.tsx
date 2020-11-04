import React from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../types';
import './App.css';
import { UserDetails } from './userDetails/UserDetails';
import { Username } from './username/Username';
import { UserRepoList } from './userRepos/UserRepoList'

function App() {
  const userRepos = useSelector((state: StateType) => state.userRepos)
  return (
    <>
      <Username />
      <UserDetails />
      {userRepos.length > 1 && <UserRepoList />}
    </>
  );
}

export default App;
