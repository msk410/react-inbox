import React, { Component } from 'react';

export default class Toolbar extends Component {
    onSelectAllClick() {
        this.props.onSelectAllClick()
    }

    onMarkAsReadClick() {
        this.props.onMarkAsReadClick()
    }

    onMarkAsUnreadClick() {
         this.props.onMarkAsUnreadClick()   

    }

    onDeleteClick() {
        this.props.onDeleteClick()
    }

    onAddLabel(e) {
        console.log(e.target.value)
        this.props.onAddLabel(e.target.value)
    }
    onRemoveLabel(e) {
        this.props.onRemoveLabel(e.target.value)
    }
    getUnreadMessages() {
        return this.props.test
    }
    getSelectAllButtonState() {
        if(this.props.getSelectAllButtonState() === 0) {
            return "fa-square-o"
        }
        if(this.props.getSelectAllButtonState() === 1) {
            return "fa-check-square-o "
        }
        else {
            return "fa-check-square"
        }
    }

    render() {
        return (
        <div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                <span className="badge badge">{this.props.getUnreadMessages()}</span>
                unread messages
                </p>

                <button className="btn btn-default" onClick = {() => this.onSelectAllClick()}>
                <i className={"fa " + this.getSelectAllButtonState()}></i>
                </button>

                <button className="btn btn-default" onClick = {() => this.onMarkAsReadClick()}>
                Mark As Read
                </button>

                <button className="btn btn-default" onClick = {() => this.onMarkAsUnreadClick()}>
                Mark As Unread
                </button>

                <select className="form-control label-select" onChange = {(e) => this.onAddLabel(e)}>
                <option value ="">Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <select className="form-control label-select" onChange = {(e) => this.onRemoveLabel(e)}>
                <option value = "">Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <button className="btn btn-default" onClick = {() => this.onDeleteClick()}>
                <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
        )
    }
}