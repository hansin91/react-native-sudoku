import {
  SET_MESSAGE,
  SET_BOARD, SET_ERRORS,
  SET_LOADING,
  SET_FILLED_BOARD,
  SET_RESET_BOARD,
  VALIDATE_BOARD,
  SET_SOLUTION_BOARD,
  SET_PLAYER,
  SET_SCORE,
  RESET_SCORE
} from './types'

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value
})

export const setBoard = (value) => ({
  type: SET_BOARD,
  payload: value
})

export const setResetBoard = (value) => ({
  type: SET_RESET_BOARD,
  payload: value
})

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message
})

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors
})

export const setFilledBoard = (value) => ({
  type: SET_FILLED_BOARD,
  payload: value
})

export const setSolutionBoard = (value) => ({
  type: SET_SOLUTION_BOARD,
  payload: value
})

export const setPlayer = (username) => ({
  type: SET_PLAYER,
  payload: username
})

export const setScore = (step) => ({
  type: SET_SCORE,
  payload: step
})

export const resetScore = (value) => ({
  type: RESET_SCORE,
  payload: value
})