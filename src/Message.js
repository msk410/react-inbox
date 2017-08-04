import React, { Component } from 'react';


export default class Message extends Component {

    onCheckBoxClick() {
        this.props.onCheckBoxClick(this.props.message.id)
    }
    checkRead() {
        console.log(this.props.message.read)
        return this.props.message.read ? " read" : " unread"
    }
    
    checkSelected() {
        return this.props.message.selected ? " selected" : ""
    }
    getSubject() {
        return this.props.message.subject
    }
    checkStarStatus() {
        return this.props.message.starred ? " fa-star" : " fa-star-o"
    }

    onStarClick() {
        this.props.onStarClick(this.props.message.id)
    }
     
render() {
        return (
                <div className={"row message" + this.checkRead() + this.checkSelected()}>
                <div className="col-xs-1">
                    <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox"  checked={this.props.message.selected} onClick = {() => this.onCheckBoxClick()} />
                    </div>
                    <div className="col-xs-2">
                        <i className={"star fa " + this.checkStarStatus()} onClick = {() => this.onStarClick()}></i>
                    </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    <a href="#">
                        {this.props.message.labels.map((myLabel, i) => {
                            return <span key = {i} className="label label-warning">{myLabel}</span>
                            })}
                            {this.getSubject()}
                    </a>
                </div>
            </div>
        )
    }
}