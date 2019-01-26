import React, { Component } from 'react';
import Chat from './Chat.js';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/
const users = [{ username: 'Amy' }, { username: 'John' }];

/*
const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];
*/

class App extends Component {
  state = {messages: []};

  sendMsg = (msg) => {
    console.log(msg);
    this.setState(currentState => ({
      messages: [...currentState.messages, msg]
    }));
  }
  
  render() {
    const {messages} = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
        {users.map(user => (
          <Chat key={user.username} messages={messages} onSendMsg={this.sendMsg} user={user}/>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
