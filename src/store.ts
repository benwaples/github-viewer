import { createStore } from 'redux'
import reducer from './reducers/githubReducer'

export default createStore(
  reducer,
)