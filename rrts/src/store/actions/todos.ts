import { ActionTypes } from './types'
import axios from 'axios'
import { Dispatch } from 'redux'

export interface Todo {
    id: number
    title: string
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos
    payload: Todo[]
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo
    payload: number
}

const URL = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(URL)

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data,
        })
    }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id,
    }
}
