import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { CounterDisplay } from './CounterDisplay';
import { CountPage } from './count/page';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CounterDisplay count={ count } />
        <Counter count={ count } increment={ setCount } />
        <CountPage />
      </header>
    </div>
  );
}

export default App;
