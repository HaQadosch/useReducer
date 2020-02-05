import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCountState, useCountDispatch, CountProvider } from './count/context';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <CountProvider>
          <CountDisplay />
          <Counter />
        </CountProvider>
      </header>
    </div>
  );
}

function CountDisplay () {
  const { count } = useCountState()

  return <p>The current Count is { count }</p>
}

function Counter () {
  const dispatch = useCountDispatch()

  return <button onClick={ () => dispatch?.({ type: 'increment' }) }>+1</button>
}

export default App;
