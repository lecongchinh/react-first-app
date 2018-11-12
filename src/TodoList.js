import React, { Component } from 'react';
import './App.css';
class TodoList extends Component {
    removeItem(item) {
        this.props.removeTodo(item);
    }
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button type="button" data-toggle="modal" data-target="#myModal">
                        Edit
                        </button>
                        <div class="modal" id="myModal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <input value={item.text} />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => {this.removeItem(item)}}>Delete</button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default TodoList;