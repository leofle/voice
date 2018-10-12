export const STARTRECORD = 'record/STARTRECORD'
export const STOPRECORD = 'record/STOPRECORD'

const initialState = {
  recordstatus: false
}

export default (state = initialState, action) => {
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
