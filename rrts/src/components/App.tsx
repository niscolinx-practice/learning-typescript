import React from 'react'
import {connect} from 'react-redux'
import { Todo } from '../store/actions/action'
import { StoreState } from '../store/reducers/reducer'

interface AppProps {
    todos: Todo[]
    fetchTodos(): any
}
class _App extends React.Component<AppProps> {
    render(){
        
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