import React from 'react'
import { useCount, CountProvider } from './context'

const Counter: React.FC = () => {
  const [count, setCount] = useCount()
  const increment = () => setCount(c => c + 1)

  return <button onClick={ increment }>{ count }</button>
}

const CountDisplay: React.FC = () => {
  const [count] = useCount()

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