import React from 'react'
import App from './App';
import {shallow} from 'enzyme';
import MessageList from './MessageList'


describe('MessageList', () => {
  it('should render messages', () => {
    const expected = [
      {
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
      }
    ];
    const div = document.createElement('div');
    const messageList = shallow(<MessageList messages={expected}/>, div);
    const actual = messageList.find(".container");
    expect(actual).toHaveLength(2);
  });

  it('should have message read style if message is read'){
    
  }
})