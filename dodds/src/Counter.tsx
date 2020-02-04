import React, { Dispatch, SetStateAction } from 'react'

interface ICounter {
  count: number
  increment: Dispatch<SetStateAction<number>>
}

export const Counter: React.FC<ICounter> = ({ count, increment }) => {

  return (
    <button onClick={ () => increment(count => count + 1) }>
      { count }
    </button>
  )
}