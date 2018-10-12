export const STARTRECORD = 'record/STARTRECORD'
export const STOPRECORD = 'record/STOPRECORD'
export const SAVERECORD = 'record/SAVERECORD'

const initialState = {
  recordstatus: false,
  recordingList: []
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {

    case STARTRECORD:
      return {
        ...state,
        recordstatus: true
      }

    case STOPRECORD:
      return {
        ...state,
        recordstatus: false
      }

    case SAVERECORD:
      return {
        ...state,
        recordingList: [...state.recordingList, action.recordItem]
      }
    default:
      return state
  }
}

export const startrecord = () => {
  return dispatch => {

    dispatch({
			type: STARTRECORD
    })
  }
}


export const stoprecord = () => {
  return dispatch => {

    dispatch({
      type: STOPRECORD
    })
  }
}

export const saverecord = (recordItem) => {
  return dispatch => {

    dispatch({
      type: SAVERECORD,
      recordItem
    })
  }
}
