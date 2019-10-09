export const CLEAR_HOSTDEVICE = "CLEAR_HOSTDEVICE"
export const SET_HOSTDEVICE = "SET_HOSTDEVICE"

export const clearHostdevice = () => dispatch =>
  dispatch({
    type: CLEAR_HOSTDEVICE,
  })

export const setHostdevice = status => dispatch =>
  dispatch({
    type: SET_HOSTDEVICE,
    payload: status,
  })