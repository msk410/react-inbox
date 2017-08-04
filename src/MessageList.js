
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import Message from './Message'

export default class MessageList extends Component {
  render() {
      return (
          <ul>
            {this.props.messages.map((myMessage, i) => {
                return <Message 
                            message={myMessage} 
                            key={i} 
                            onCheckBoxClick={this.props.onCheckBoxClick}
                            onStarClick={this.props.onStarClick}
                         />
            })}
          </ul>
      )
  }
}
