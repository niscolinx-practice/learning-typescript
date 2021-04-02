import React from 'react'
import {connect} from 'react-redux'
import { Todo, fetchTodos } from '../store/actions'
import { StoreState } from '../store/reducers/reducer'

interface AppProps {
    todos: Todo[]
    fetchTodos(): any
}
class _App extends React.Component<AppProps> {
    
    onButtonClick = (): void => {
        this.props.fetchTodos()
    }

    renderList(): JSX.Element[]{
        return this.props.todos.map((todo: Todo) => {
            return <div key={todo.id}>{todo.title}</div>
        })
    }

    render(){
        console.log(this.props.todos)
        return (
            <div><button onClick={this.onButtonClick}>Fetch</button>
            {this.renderList()}
            </div>
        )
    }
}


const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
    return {
        todos
    }
}

export const App = connect(mapStateToProps, {fetchTodos})(_App)