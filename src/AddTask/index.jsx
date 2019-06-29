import React, { useState } from 'react'
import styled from 'styled-components'

function AddTask() {
  const [todo, setTodo] = useState('')
  const [date, setDate] = useState('')

  return (
    <Container>
      <Title>Quick Add Task</Title>
      <InputGroup>
        <TextInput
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <DateInput
          type="text"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </InputGroup>
      <AddButton>Add Task</AddButton>
    </Container>
  )
}

export default AddTask

const Container = styled.form`
  border-radius: 8px 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  padding: 2em;
  width: 30vw;
`

const Title = styled.h1`
  font-size: 1em;
  margin-bottom: 1.5em;
`

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  border-radius: 3px;
  border: 1px solid #e8e8e8;
  margin-bottom: 1em;
`

const Input = styled.input`
  padding: 8px;
  border: none;
  &:focus {
    outline: none;
  }
`

const TextInput = styled(Input)`
  flex-grow: 1;
  border-right: 1px solid #ececec;
`

const DateInput = styled(Input)`
  width: 20%;
`

const AddButton = styled.button`
  background: #dd4b39;
  padding: 8px 12px;
  border-radius: 3px;
  outline: none;
  border: none;
  color: white;
  font-weight: 600;
`
