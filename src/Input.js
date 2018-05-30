import React, { Component } from 'react';

import { connect } from './context';

class Input extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render(){

        const { addTodo } = this.props;

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="What needs to be done?" defaultValue="" onKeyPress={addTodo} />
                </header>
            </div>
        )
    }
}

export default connect(Input);