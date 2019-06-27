import React, { useEffect } from 'react'
import { ListGroup } from 'reactstrap'
import { ITodo } from '../types'
import Todo from './Todo'
import { connect } from 'react-redux'
import { fetchTodos } from '../redux/actions/todos'

interface TodosListProps {
  todos: ITodo[]
  fetchTodos(): void
}

const TodosList = (props: TodosListProps) => {
  useEffect(() => {
    props.fetchTodos()
  }, [])

  let listOfTodos = props.todos.map((todo: ITodo) => (
    <Todo key={todo.id} todo={todo} />
  ))
  return <ListGroup>{listOfTodos}</ListGroup>
}

const mapStateToProps = (storeState: any) => ({ todos: storeState.todos })

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodosList)
