export const SUCKBALLS = 'balls/SUCKBALLS'
export const PUNCHBALLS = 'balls/PUNCHBALLS'

const initialState = {
  balls: 'what you wanna do?'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SUCKBALLS:
      return {
        ...state,
        balls: 'suckballs'
      }

    case PUNCHBALLS:
      return {
        ...state,
        balls: 'punchballs'
      }

    default:
      return state
  }
}

export const suckballs = () => {
  return dispatch => {

    dispatch({
      type: SUCKBALLS
    })
  }
}


export const punchballs = () => {
  return dispatch => {

    dispatch({
      type: PUNCHBALLS
    })
  }
}
