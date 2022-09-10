import { GET_GROUPS_SUCCEEDED } from '../actions/groupActions'
import { AnyAction } from 'redux'
import { GroupState, initialGroupState } from '../types/GroupState'

const GroupReducer = (state: GroupState = initialGroupState, action: AnyAction): GroupState => {
  switch (action.type) {
    case GET_GROUPS_SUCCEEDED: {
      return {
        ...state,
        groupDetails: [...action.payload]
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default GroupReducer
