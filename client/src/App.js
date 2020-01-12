import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  getData() {
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
    })
    // open the request with the verb and the url
    xhr.open('GET', 'http://localhost:3000/hello');
    // send the request
    xhr.send();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello World!</p>
        </header>
      </div>
    );
  }
}
