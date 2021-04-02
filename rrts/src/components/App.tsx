import React from 'react'
import {connect} from 'react-redux'
import { Todo, fetchTodos } from '../store/actions/action'
import { StoreState } from '../store/reducers/reducer'

interface AppProps {
    todos: Todo[]
    fetchTodos(): any
}
class _App extends React.Component<AppProps> {

    componentDidMount(){
        this.props.fetchTodos()
    }

    render(){
        console.log(this.props.todos)
        return (
            <div>This is the App</div>
        )
    }
}


const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
    return {
        todos
    }
}

export const App = connect(mapStateToProps, {fetchTodos})(_App)