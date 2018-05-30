import React from 'react';
import { connect } from './context';

const List = ({ getVisibleTodos, deleteTodo, toggleTodo, toggleAll }) => (
    <section className="main">
        <input className="toggle-all" type="checkbox" onClick={toggleAll} />
        <ul className="todo-list">
            {getVisibleTodos().map(todo => <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                <label>{todo.title}</label>
                <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
            </div>
            <input className="edit" defaultValue="" />
        </li>)}
        </ul>
    </section>
)

export default connect(List);