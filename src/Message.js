import React, { Component } from 'react';


export default class Message extends Component {

    onChange() {
        this.props.onCheckBoxClick(this.props.message.id)
    }

render() {
        return (
                <div className={this.props.message.selected ? "row message read selected" : "row message unread"}>
                <div className="col-xs-1">
                    <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox"  onClick = {() => this.onChange()} />
                    </div>
                    <div className="col-xs-2">
                        <i className="star fa fa-star-o"></i>
                    </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    <a href="#">
                    Here is some message text that has a bunch of stuff
                    </a>
                </div>
            </div>
        )
    }
}