import {
  SET_BOARD,
  SET_LOADING,
  SET_FILLED_BOARD,
  SET_RESET_BOARD,
  VALIDATE_BOARD,
  SET_SOLUTION_BOARD,
  SET_SCORE,
  SET_PLAYER,
  RESET_SCORE
} from '../actions/types'

export const initialState = {
  board: [],
  filledBoard: [],
  isLoading: null,
  isReset: false,
  isValidate: false,
  solution: [],
  username: '',
  score: 0
}

export default (state, action) => {
  switch (action.type) {
    case RESET_SCORE:
      return {
        ...state,
        score: action.payload
      }
    case SET_PLAYER:
      return {
        ...state,
        username: action.payload
      }
    case SET_SCORE:
      return {
        ...state,
        score: state.score + action.payload
      }
    case VALIDATE_BOARD:
      return {
        ...state,
        isValidate: action.payload
      }
    case SET_SOLUTION_BOARD:
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