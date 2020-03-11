import React, { createContext, useReducer } from 'react'
import { initialState } from '../reducer/board'
import boardReducer from '../reducer/board'

export const BoardContext = createContext(initialState)
export const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, initialState)
  return (<BoardContext.Provider value={{
    board: state.board,
    isReset: state.isReset,
    originalBoard: state.originalBoard,
    filledBoard: state.filledBoard,
    isLoading: state.isLoading,
    solution: state.solution,
    isValidate: state.isValidate,
    username: state.username,
    score: state.score,
    dispatch
  }}>
    {children}
  </BoardContext.Provider>)
}
