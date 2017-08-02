import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './MessageList'

import 'font-awesome/css/font-awesome.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageList : [{
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }]
    }
  }
  
  get navBar() {
    return (
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span class="badge badge">2</span>
              unread messages
            </p>

            <a className="btn btn-danger">
              <i className="fa fa-plus"></i>
            </a>

            <button className="btn btn-default">
              <i className="fa fa-minus-square-o"></i>
            </button>

            <button className="btn btn-default">Mark As Read</button>

            <button className="btn btn-default">Mark As Unread</button>

            <select className="form-control label-select">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
    )
  }

  get getMessages() {
    return <MessageList messages = {this.state.messageList}/>
    
  }

  render() {
    return (
      <div className = "App">
      {this.navBar}
      {this.getMessages}
      <button className = "btn btn-primary">should be blue</button>
      </div>
    );
  }
}

export default App;
