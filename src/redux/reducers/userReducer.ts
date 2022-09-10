import { AnyAction } from 'redux'
import { initialUserState } from '../types/UserState'

const UserReducer = function (state = initialUserState, action: AnyAction) {
  switch (action.type) {
    default: {
      return {
        ...state
      }
    }
  }
}

export default UserReducer
