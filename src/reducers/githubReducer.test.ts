import { setUserDetails, setUsername } from "../components/actions/githubActions"
import reducer from "./githubReducer"


describe('gihubReducer', () => {
  it('should handle SET_USERNAME actions', () => {
    const state = {
      username: '',
      userDetails: {},
      userRepos: []
    }

    const action = setUsername('benwaples')

    const newState = reducer(state, action)

    expect(newState).toEqual({
      username: 'benwaples',
      userDetails: {},
      userRepos: []
    })
  })

  it('should handle SET_USERDETAILS actions', () => {
    const state = {
      username: '',
      userDetails: {},
      userRepos: []
    }

    const userDetails = {
      profileUrl: 'benwaples',
      name: 'Ben Waples',
      location: 'Portland, OR',
      email: null,
      bio: 'he seems like a nice enough guy',
      publicRepos: 3
    }

    const action = setUserDetails(userDetails)

    const newState = reducer(state, action)


    expect(newState).toEqual({
      username: '',
      userDetails: {
        profileUrl: 'benwaples',
        name: 'Ben Waples',
        location: 'Portland, OR',
        email: null,
        bio: 'he seems like a nice enough guy',
        publicRepos: 3
      },
      userRepos: []
    })
  })
  
})
