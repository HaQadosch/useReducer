import React, { Dispatch } from 'react'

interface ICountState {
  count: number
}

const countInitState = {
  count: 0
}

interface IAction {
  type: string
}

const CountStateContext = React.createContext<ICountState>(countInitState)
const CountDispatchContext = React.createContext<Dispatch<IAction> | null>(null)

const countReducer = ({ count }: ICountState, { type }: IAction): ICountState => {
  switch (type) {
    case 'increment':
      return { count: count + 1 }
    case 'decrement':
      return { count: count - 1 }
    default:
      throw new Error(`Unhandled action type ${ type }`)
  }
}

export const CountProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(countReducer, countInitState)

  return (
    <CountStateContext.Provider value={ state } >
      <CountDispatchContext.Provider value={ dispatch }>
        { children }
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}

export const useCountState = () => {
  const context = React.useContext(CountStateContext)

  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }

  return context
}

export const useCountDispatch = () => {
  const context = React.useContext(CountDispatchContext)

  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }

  return context

}