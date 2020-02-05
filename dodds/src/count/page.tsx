import React from 'react'
import { useCount, CountProvider } from './context'

const Counter: React.FC = () => {
  const { state, increment } = useCount()

  return <button onClick={ increment }>{ state.count }</button>
}

const CountDisplay: React.FC = () => {
  const { state: { count } } = useCount()

  return <p>The current value of the counter is: { count }</p>
}

export const CountPage: React.FC = () => {

  return (
    <div>
      <CountProvider >
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}