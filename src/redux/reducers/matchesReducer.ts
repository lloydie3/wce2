import {
  GET_MATCHES_SUCCEEDED, GET_MATCH_PREDICTIONS_SUCCEEDED, UPDATE_MATCH_PREDICTION, SUBMIT_MATCH_PREDICTIONS_SUCCEEDED
} from '../actions/matchesActions'
import { initialMatchState } from '../types/MatchState'
import { AnyAction } from 'redux'
import { MatchState } from './../types/MatchState'

const MatchesReducer = (state: MatchState = initialMatchState, action: AnyAction): MatchState => {
  switch (action.type) {
    case GET_MATCHES_SUCCEEDED: {
      return {
        ...state,
        matchResults: [...action.payload]
      }
    }
    case GET_MATCH_PREDICTIONS_SUCCEEDED: {
      return {
        ...state,
        matchPredictions: [...action.payload]
      }
    }
    case UPDATE_MATCH_PREDICTION: {
      const theseMatchPredictions = [...state.matchPredictions]
      const thisMatch = theseMatchPredictions[action.payload.dateIndex].matches[action.payload.matchIndex]
      thisMatch.homeScore = parseInt(action.payload.homeScore) ?? 0
      thisMatch.awayScore = parseInt(action.payload.awayScore) ?? 0
      return {
        ...state,
        matchPredictions: theseMatchPredictions,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        updatedPredictions: { ...state.updatedPredictions, [`${action.payload.homeTeam}_${action.payload.awayTeam}`]: { homeTeam: action.payload.homeTeam, awayTeam: action.payload.awayTeam, homeScore: action.payload.homeScore, awayScore: action.payload.awayScore, matchDate: action.payload.matchDate } }
      }
    }
    case SUBMIT_MATCH_PREDICTIONS_SUCCEEDED: {
      return {
        ...state,
        updatedPredictions: {}
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default MatchesReducer
