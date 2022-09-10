import { combineReducers } from 'redux'
import LeaderboardReducer from './leaderboardReducer'
import MatchesReducer from './matchesReducer'
import GroupReducer from './groupReducer'
import UserReducer from './userReducer'

const RootReducer = combineReducers({
  matches: MatchesReducer,
  playerStats: LeaderboardReducer,
  groups: GroupReducer,
  user: UserReducer
})

export default RootReducer
