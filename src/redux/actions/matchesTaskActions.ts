import axios, { AxiosResponse } from 'axios'
import {
  GET_MATCH_PREDICTIONS_SUCCEEDED,
  GET_MATCHES_SUCCEEDED,
  SUBMIT_MATCH_PREDICTIONS_SUCCEEDED,
  UPDATE_MATCH_PREDICTION
} from './matchesActions'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'

export const getMatchResults = (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
  const baseUrl = `${process.env.REACT_APP_BASE_SERVER_URL}`
  axios
    .get(`${baseUrl}/Match/GetAllMatches`)
    .catch((error) => console.log(error))
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    .then((res: AxiosResponse<any> | void) => {
      dispatch(getMatchResultSucceeded(res?.data))
    })
    .catch((error) => console.log(error))
}
export const getMatchPredictions = () => (dispatch, getState: () => RootState) => {
  const baseUrl = `${process.env.REACT_APP_BASE_SERVER_URL}`
  const userReducer = getState().user
  axios
    .get(`${baseUrl}/Match/GetMatchPredictionsForWallet?walletAddress=${userReducer.walletAddress}`)
    .catch((error) => console.log(error))
    .then((res) => {
      dispatch(getMatchPredictionSucceeded(res?.data))
    })
    .catch((error) => console.log(error))
}
export const submitMatchPredictions = (): (dispatch, getState: () => RootState) => any => (dispatch, getState: () => RootState) => {
  const baseUrl = `${process.env.REACT_APP_BASE_SERVER_URL}`
  const matchReducer = getState().matches
  const userReducer = getState().user

  const updatedWalletPredictions = Object
    .entries(matchReducer.updatedPredictions)
    .map(([_, value]) => {
      return {
        homeTeamName: value.homeTeam,
        awayTeamName: value.awayTeam,
        homeTeamScore: value.homeScore,
        awayTeamScore: value.awayScore,
        matchDate: value.matchDate
      }
    })
  const update = {
    priceTier: userReducer.priceTier,
    walletAddress: userReducer.walletAddress,
    walletPredictionItems: updatedWalletPredictions
  }
  axios
    .post(`${baseUrl}/Match/SubmitMatchPrediction`, update)
    .catch((error) => console.log(error))
    .then((res) => {
      dispatch(submitMatchPredictionsSucceeded())
    })
    .catch((error) => console.log(error))
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getMatchResultSucceeded = (data) => (
  {
    type: GET_MATCHES_SUCCEEDED,
    payload: data
  }
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getMatchPredictionSucceeded = (data) => ({
  type: GET_MATCH_PREDICTIONS_SUCCEEDED,
  payload: data
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const updateMatchPredictions = (dateIndex, matchIndex, homeTeam, awayTeam, homeScore, awayScore, matchDate) => ({
  type: UPDATE_MATCH_PREDICTION,
  payload: {
    dateIndex,
    matchIndex,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    matchDate
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const submitMatchPredictionsSucceeded = () => ({
  type: SUBMIT_MATCH_PREDICTIONS_SUCCEEDED
})
