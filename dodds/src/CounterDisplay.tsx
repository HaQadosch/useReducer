import React from 'react'

interface ICounterDisplay {
  count: number
}

export const CounterDisplay: React.FC<ICounterDisplay> = ({ count }) => {

  return (
    <p>
      The current value of the counter is: { count }
    </p>
  )
}