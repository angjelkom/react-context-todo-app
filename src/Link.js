import React, { Component } from 'react';
import { connect } from './context';

class Link extends Component {

    shouldComponentUpdate(ownProps, ownState){
        return ownProps.todosFilter !== this.props.todosFilter;
    }

    render(){
        const { filter, filterTodos, todosFilter } = this.props;
        return (
        <li>
            <a href={'#' + (filter === 'all' ? '' : filter)} className={filter === todosFilter ? 'selected' : ''} onClick={() => filterTodos(filter)}>{filter}</a>
        </li>
    )
    }
}

Link.defaultProps = {
    to: ''
}

export default connect(Link);