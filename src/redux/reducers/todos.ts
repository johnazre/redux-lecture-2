import {
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILED,
  ADD_TODO_SUCCESS
} from '../actions/todos'

interface TodosAction {
  type: string
  payload?: any
}

export default (state = [], action: TodosAction) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.payload
    case FETCH_TODOS_FAILED:
      let err = action.payload
      return err

    case ADD_TODO_SUCCESS:
      let newTodo = action.payload
      return state.concat(newTodo)

    default:
      return state
  }
}
