import { MatchResult } from '../../domain/MatchResult'

export interface MatchState {
  matchResults: any[]
  matchPredictions: any[]
  updatedPredictions: { [key: string]: MatchResult }
  gamedays: any[]
}

export const initialMatchState: MatchState = {
  matchResults: [],
  matchPredictions: [],
  updatedPredictions: {},
  gamedays: []
}
