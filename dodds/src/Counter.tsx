import React, { useState } from 'react'

interface ICounter {

}

export const Counter: React.FC<ICounter> = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={ () => setCount(c => c + 1) }>
      { count }
    </button>
  )
}