import React from 'react'
import {connect} from 'react-redux'
import { Todo } from '../store/actions/action'

interface AppProps {
    todos: Todo[]
    fetchTodos(): any
}
export class App extends React.Component {
    render(){
        return (
            <div>This is the App</div>
        )
    }
}