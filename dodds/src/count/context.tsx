import React, { createContext, useContext, useState, useMemo, Dispatch, SetStateAction } from "react"

const CountContext = createContext([0, () => { }] as [number, Dispatch<SetStateAction<number>>])

function useCount () {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error('useCount must be used within a Count Provider')
  }

  return context
}

function CountProvider (props: any) {
  const [count, setCount] = useState(0)

  const value = useMemo<[number, Dispatch<SetStateAction<number>>]>(() => [count, setCount], [count])
  return <CountContext.Provider value={ value } { ...props } />
}

export { useCount, CountProvider }