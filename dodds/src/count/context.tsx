import React, { createContext, useContext, useMemo } from "react"

const initState = { count: 0 }
const CountContext = createContext([initState, () => { }] as [{ count: number }, (action: any) => void])

function countReducer (state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + 1 }
    }
    default: {
      throw new Error('Unsupported action type' + action.type)
    }
  }
}

function useCount () {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`)
  }

  const [state, dispatch] = context
  const increment = () => dispatch({ type: 'INCREMENT' })

  return {
    state,
    dispatch,
    increment,
  }
}

function CountProvider (props: any) {
  const [state, dispatch] = React.useReducer(countReducer, initState)

  const value = useMemo(() => [state, dispatch], [state])
  return <CountContext.Provider value={ value } { ...props } />
}

export { useCount, CountProvider }