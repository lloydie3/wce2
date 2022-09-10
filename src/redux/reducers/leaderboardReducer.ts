import { GET_LEADERBOARD_SUCCEEDED } from '../actions/leaderboardActions'
import { initialLeaderboardState, LeaderboardState } from '../types/LeaderboardState'

const LeaderboardReducer = (state = initialLeaderboardState, action): LeaderboardState => {
  switch (action.type) {
    case GET_LEADERBOARD_SUCCEEDED: {
      return {
        ...state
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default LeaderboardReducer
