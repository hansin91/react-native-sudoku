import {
  SET_BOARD,
  SET_LOADING,
  SET_FILLED_BOARD,
  SET_RESET_BOARD,
  VALIDATE_BOARD,
  SET_SOLUTION_BOARD
} from '../actions/types'

export const initialState = {
  board: [],
  filledBoard: [],
  isLoading: null,
  isReset: false,
  isValidate: false,
  solution: []
}

export default (state, action) => {
  switch (action.type) {
    case VALIDATE_BOARD:
      return {
        ...state,
        isValidate: action.payload
      }
    case SET_SOLUTION_BOARD:
      console.log(action.payload)
      return {
        ...state,
        solution: action.payload
      }
    case SET_RESET_BOARD:
      return {
        ...state,
        isReset: action.payload
      }
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