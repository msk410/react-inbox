import React from 'react'
import App from './App';
import {shallow} from 'enzyme';
import MessageList from './MessageList'
// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App/>, div);
// });

  describe('App', () => {
      it('has a MessageList', () => {
         const div = document.createElement('div')
         const app = shallow(<App/>, div)
         const messageList = app.find(MessageList.name)
         expect(messageList).toHaveLength(1)
        });
    it('has state', () => {
        const div = document.createElement('div');
        const app = shallow(<App/>, div);
        expect(app.state().messageList).toHaveLength(8);
    });
     it('passes messages state', () => {
        const div = document.createElement('div');
        const app = shallow(<App/>, div);
        const messages = app.find(MessageList.name);
        expect(messages.props().messages).toHaveLength(8);
    });
 }) 