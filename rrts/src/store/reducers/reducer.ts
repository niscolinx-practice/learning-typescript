import { Todo } from './../actions/action';
import { todosReducer } from './todos';
import {combineReducers} from 'redux'

export interface StoreState{
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
})