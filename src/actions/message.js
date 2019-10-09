export const CLEAR_MESSAGE = "CLEAR_MESSAGE"
export const SET_MESSAGE = "SET_MESSAGE"

export const clearMessage = () => dispatch =>
  dispatch({
    type: CLEAR_MESSAGE,
  })

export const setMessage = message => dispatch =>
  dispatch({
    type: SET_MESSAGE,
    payload: message,
  })