import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Home name='Bryan' age={21}/>
      </header>
    </div>
  );
}

export default App;
