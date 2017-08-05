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
    let allSelected = !this.state.messageList.reduce((initial, elem) => { 
      return initial && elem.selected} , true)
    
     this.setState({
      messageList: this.state.messageList.map((message) => {
        message.selected = allSelected
        return message
      })
    })
  }

  onMarkAsReadClick() {
    this.setState({
      messageList: this.state.messageList.map((message) => {
        if(message.selected) {
          message.read = true
        }
        return message
      })
    })
  }


    onMarkAsUnreadClick() {
      this.setState({
        messageList: this.state.messageList.map((message) => {
          if(message.selected) {
            message.read = false;
          }
          return message
        })
      })
    }
    onDeleteClick() {
      this.setState({
        messageList: this.state.messageList.filter((message) => {
          if(!message.selected)
            return message
        })
      })
    }
    onAddLabel(addLabel) {
      this.setState({
        messageList: this.state.messageList.map((message) => {
          if(message.selected) {
            if(!(message.labels.includes(addLabel))) {
              message.labels.push(addLabel)
            }
          }
          return message
        })
      })
    }
    onRemoveLabel(removeLabel) {
      this.setState({
        messageList: this.state.messageList.map((message) => {
          if(message.selected) {
            message.labels = message.labels.filter(myLabel => myLabel !== removeLabel)
          }
          return message
        })
      })
    }
    getUnreadMessages() {
      
      return this.state.messageList.reduce((unread, elem) => {
        return unread + !elem.read
      }, 0)
    }
    getSelectAllButtonState() {
      let state = this.state.messageList.reduce((numSelected, elem) => {
        if(elem.hasOwnProperty("selected")) {
          return numSelected + elem.selected
         } else {
           return numSelected + false
         }
      }, 0)
      if(state  === 0) 
        return 0
      if(state < this.state.messageList.length)
        return 1
      return 2
    }

  render() {
    return (
      <div className = "App"> {this.getSelectAllButtonState()}
        <Toolbar onSelectAllClick = {this.onSelectAllClick.bind(this)}
          onMarkAsReadClick = {this.onMarkAsReadClick.bind(this)}
          onMarkAsUnreadClick = {this.onMarkAsUnreadClick.bind(this)}
          onDeleteClick = {this.onDeleteClick.bind(this)}
          onAddLabel= {this.onAddLabel.bind(this)}
          onRemoveLabel = {this.onRemoveLabel.bind(this)}
          getUnreadMessages = {this.getUnreadMessages.bind(this)}
          getSelectAllButtonState = {this.getSelectAllButtonState.bind(this)}
          fuck = "you"

        />
        <MessageList  
          messages = {this.state.messageList} 
          onCheckBoxClick = {this.onCheckBoxClick.bind(this)}
          onStarClick = {this.onStarClick.bind(this)}
          />
      </div>
    );
  }
}

export default App;
