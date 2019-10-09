export const CLEAR_SIGNAL = "CLEAR_SIGNAL"

export const clearSignal = () => dispatch =>
  dispatch({
    type: CLEAR_SIGNAL,
  })