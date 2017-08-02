import React from 'react'
import App from './App';
import {shallow} from 'enzyme';

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App/>, div);
// });

  describe('App', () => {
     it('shows a list of messages', () => {
         const div = document.createElement('div')
         const app = shallow(<App/>, div)
            //const messageList = app.find(MessageList.name)
            //  expect(messageList).toHaveLength(1)
     });
 }) 