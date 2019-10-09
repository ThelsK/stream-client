export const CLEAR_STREAM = "CLEAR_STREAM"
export const SET_STREAM = "SET_STREAM"

export const clearStream = () => dispatch => {
  dispatch({
    type: CLEAR_STREAM,
  })
}

export const setStream = stream => dispatch => {
  dispatch({
    type: SET_STREAM,
    payload: stream,
  })
}