import React, { Component } from 'react';

const TodoContext = React.createContext({
    todos: []
});

export class TodoProvider extends Component {

    state = { todos: [] }

    componentDidUpdate(nextProps, nextState){
        localStorage.TODO_STATE = JSON.stringify(nextState);
    }

    componentWillMount(){
        try {
            this.setState(JSON.parse(localStorage.TODO_STATE));
        } catch(e){
            //catch error
        }
    }

    addTodo = event => {
        if(event.which === 13 && event.target.value){
            this.setState({
                todos: [
                    ...this.state.todos,
                    { title: event.target.value, id: Date.now(), completed: false}
                ]
            });

            event.target.value = '';
        }
    }

    toggleTodo = id => {
        this.setState({
                todos: this.state.todos.map(todo => {
                    if(todo.id === id){
                        return Object.assign(todo, {
                            completed: !todo.completed
                        });
                    }
                    return todo;
                })
            });
        
    }

    deleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
        
    }

    clearCompleted = () => {
        this.setState({
                todos: this.state.todos.filter(todo => !todo.completed)
            });
    }

    itemLeftCount = () => {
        return this.state.todos.filter(todo => !todo.completed).length;
    }

    getVisibleTodos = () => {
        switch (this.state.todosFilter) {
            case 'active':
                return this.state.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.state.todos.filter(todo => todo.completed);
            default:
                return this.state.todos;
        }
    }

    toggleAll = () => {
        this.setState({
            allCompleted: !this.state.allCompleted,
            todos: this.state.todos.map(todo => Object.assign(todo, {
                completed: !this.state.allCompleted
            }))
        })
    }

    filterTodos = todosFilter => {
        this.setState({ todosFilter });
    }

    render(){
        return (
            <TodoContext.Provider value={{
                addTodo: this.addTodo,
                toggleTodo: this.toggleTodo,
                deleteTodo: this.deleteTodo,
                clearCompleted: this.clearCompleted,
                itemLeftCount: this.itemLeftCount,
                getVisibleTodos: this.getVisibleTodos,
                toggleAll: this.toggleAll,
                allCompleted: this.state.allCompleted,
                filterTodos: this.filterTodos,
                todosFilter: this.state.todosFilter
            }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}

export function connect(Component) {
  return function TodoComponent(props) {
    return (
      <TodoContext.Consumer>
        {value => <Component {...props} {...value} />}
      </TodoContext.Consumer>
    );
  };
}