export const GET_CIVILIZATIONS_REQUESTED = 'GET_CIVILIZATIONS_REQUESTED'
export const GET_CIVILIZATIONS_SUCCEED = 'GET_CIVILIZATIONS_SUCCEED'
export const GET_CIVILIZATIONS_FAILED = 'GET_CIVILIZATIONS_FAILED'

export const ACTION_GET_CIVILIZATIONS_REQUESTED = (url) => ({
  type: GET_CIVILIZATIONS_REQUESTED,
  payload: url,
})

export const ACTION_GET_CIVILIZATIONS_SUCCEED = (data) => ({
  type: GET_CIVILIZATIONS_SUCCEED,
  payload: data,
})

export const ACTION_GET_CIVILIZATIONS_FAILED = (error) => ({
  type: GET_CIVILIZATIONS_FAILED,
  payload: error,
})
