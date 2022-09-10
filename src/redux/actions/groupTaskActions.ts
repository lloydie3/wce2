import axios from 'axios'
import { GET_GROUPS_SUCCEEDED } from './groupActions'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../store'
import { AnyAction } from 'redux'

export const getGroupData = (): ThunkDispatch<void, RootState, AnyAction> => (dispatch) => {
  const baseUrl = `${process.env.REACT_APP_BASE_SERVER_URL}`
  axios
    .get(`${baseUrl}/Group/GetGroupDetails`)
    .then((res) => {
      dispatch({
        type: GET_GROUPS_SUCCEEDED,
        payload: res.data
      })
    })
}
