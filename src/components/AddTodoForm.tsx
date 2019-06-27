import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { addTodo } from '../redux/actions/todos'
import { connect } from 'react-redux'
import { ITodo } from '../types'

interface ATFProps {
  addTodo(todo: ITodo): void
}

const AddTodoForm = (props: ATFProps) => {
  const [title, setTitle] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.addTodo({
      title,
      completed: false
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>New Todo</Label>
        <Input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default connect(
  null,
  { addTodo }
)(AddTodoForm)
