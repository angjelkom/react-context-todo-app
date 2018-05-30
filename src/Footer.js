import React, { Component } from 'react';
import Link from './Link';
import { connect } from './context';

class Footer extends Component {

    render(){
        const { clearCompleted, itemLeftCount } = this.props;
        return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{itemLeftCount()}</strong>
            <span> </span>
            <span>items</span>
            <span> left</span>
        </span>
        <ul className="filters">
            <Link filter='all' />
            <Link filter='active' />
    <Link filter='completed' />
    </ul>
    <a className="clear-completed" onClick={clearCompleted}>Clear completed</a>
    </footer>
)
    }
}

export default connect(Footer);