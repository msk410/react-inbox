import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import seeds from './seeds'
import MessageList from './MessageList'
import Toolbar from './Toolbar'
import 'font-awesome/css/font-awesome.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageList: seeds
    }
  }

  onCheckBoxClick(id) {
    
    this.setState({
      messageList: this.state.messageList.map((message) => {
        if(message.id === id) {
          message.selected = !message.selected
        }
        return message
      })
    })
  }

  onStarClick(id) {
    this.setState({
      messageList: this.state.messageList.map((message) => {
        if(message.id === id) {
          message.starred = !message.starred
        }
        return message
      })
    })
  }

  onSelectAllClick() {
     this.setState({
      messageList: this.state.messageList.map((message) => {
        message.selected = true
        return message
      })
    })
  }
  

  render() {
    return (
      <div className = "App">
        <Toolbar onSelectAllClick = {this.onSelectAllClick.bind(this)}/>
        <MessageList  
          messages = {this.state.messageList} 
          onCheckBoxClick = {this.onCheckBoxClick.bind(this)}
          onStarClick = {this.onStarClick.bind(this)
        }/>
      </div>
    );
  }
}

export default App;
