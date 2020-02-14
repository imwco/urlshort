import React from 'react';
import logo from './logo.svg';
import './App.css';
import UrlForm from './components/UrlForm';

function App() {
  return (
  <div class="container-fluid">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <img className="App-logo" alt="Brand" src={logo}></img>
          </a>
        </div>
        <header className="App-header">URL Shortener</header>
      </div>
    </nav>
    <div className="App">
      <div class="grid-container">
        <div class="mid-container">
          <div class="row">
            <div class="col-md-2"></div>
              <div class="col-md-8">
                <UrlForm />
              </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
