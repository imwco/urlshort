import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './components/NameForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <NameForm />
        </p>
     </header>
    </div>
  );
}

export default App;
