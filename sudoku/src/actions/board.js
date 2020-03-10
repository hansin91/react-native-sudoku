import { SET_MESSAGE, SET_BOARD, SET_ERRORS, SET_LOADING, SET_FILLED_BOARD } from './types'
import api from '../api'

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value
})

export const setBoard = (value) => ({
  type: SET_BOARD,
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

export const fetchBoard = (difficulty) => (dispatch) => {
  console.log('here')
  dispatch(setLoading(true))
  api({
    method: 'GET',
    url: '/board?difficulty=' + difficulty
  })
    .then(response => {
      console.log(response.data)
      dispatch(setBoard(response.data.board))
    })
    .catch(err => {
      console.log(err.response)
      dispatch(setErrors(err.response))
    })
    .finally(() => dispatch(setLoading(true)))
}