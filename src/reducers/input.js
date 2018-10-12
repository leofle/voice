export const ADDLABEL = 'input/ADDLABEL'
export const REMOVELABEL = 'input/REMOVELABEL'

const initialState = {
  label: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADDLABEL:
      return {
        ...state,
        label: action.label
      }

    case REMOVELABEL:
      return {
        ...state,
        label: ''
      }

    default:
      return state
  }
}

export const addlabel = (label) => {
  return dispatch => {

    dispatch({
			type: ADDLABEL,
			label
    })
  }
}


export const removelabel = () => {
  return dispatch => {

    dispatch({
      type: REMOVELABEL
    })
  }
}
