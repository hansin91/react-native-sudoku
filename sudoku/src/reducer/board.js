import { SET_BOARD, SET_LOADING, SET_FILLED_BOARD } from '../actions/types'

export const initialState = {
  board: [],
  filledBoard: [],
  isLoading: null
}

export default (state, action) => {
  switch (action.type) {
    case SET_FILLED_BOARD:
      return {
        ...state,
        filledBoard: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_BOARD:
      return {
        ...state,
        board: action.payload
      }
    default:
      return state
  }
}