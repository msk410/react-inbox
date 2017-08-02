
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

export default class MessageList extends Component {
    checkReadStatus(myMessage) {
        return myMessage.read ? ("row message read") : ("row message unread")
    }
    checkStarStatus(myMessage) {
        return myMessage.starred ? ("star fa fa-star-o") : ("star fa fa-star")
    }

    get messages() {
        return this.props.messages.map((myMessage, i) => (
        <div className="container">
            {/* <div className="row message unread"> */}
            <div className={this.checkReadStatus(myMessage)}>
                <div className="col-xs-2">
                    <div className="row">
                    <div className="col-xs-1">
                        <input type="checkbox" />
                    </div>
                    <div className="col-xs-1">
                        {/* {myMessage.starred ? <i className="star fa fa-star-o"></i> :
                        <i className="star fa fa-star"></i>}  */}
                        <i className={this.checkStarStatus(myMessage)}></i> 
                    </div>
                </div>
            </div>
            <div className="col-xs-10">
               {myMessage.labels.map((myLabel) => {
                   return <span className="label label-warning">{myLabel}</span>
                })}
                <a href="#">
                {myMessage.subject}
                </a>
            </div>
            </div>
        </div>
        ))
    }

    render() {
        return (
            // <div>
            //     {this.messages}
            // </div>
            <div className="">
                    {this.messages}
                    </div>
        )
    }
}
