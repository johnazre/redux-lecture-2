import { Dispatch } from 'redux'
import { ITodo } from '../../types'
import axios from 'axios'

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED'

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      let todos = await response.json()

      dispatch({
        type: FETCH_TODOS_SUCCESS,
        payload: todos
      })
    } catch (err) {
      dispatch({
        type: FETCH_TODOS_FAILED,
        payload: err
      })
    }
  }
}

export const addTodo = (todo: ITodo) => async (dispatch: Dispatch) => {
  try {
    let response = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      todo
    )

    let newTodo = response.data

    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: newTodo
    })
  } catch (error) {
    console.log(error)
  }
}
