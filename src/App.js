import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    if (window.Notification && Notification.permission !== 'denied') {
      Notification.requestPermission(status => {
          console.log(status)
          let n = new Notification('Titulo', {
              body: 'Soy una notificación de prueba :)',
              icon: 'https://move.appttitude.com/images/logo.png'
          })
      })
  }

  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
