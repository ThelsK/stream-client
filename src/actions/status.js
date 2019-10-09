export const CLEAR_STATUS = "CLEAR_STATUS"
export const SET_STATUS = "SET_STATUS"

export const clearStatus = () => dispatch =>
  dispatch({
    type: CLEAR_STATUS,
  })

export const setStatus = status => dispatch =>
  dispatch({
    type: SET_STATUS,
    payload: status,
  })