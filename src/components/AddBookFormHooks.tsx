import React, { useState } from 'react'
import { IBook } from '../types'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

interface AddBookFormState {
  title: String
  author: String
}

interface AddBookFormProps {
  addBookToState(book: IBook): void
}

const AddBookForm = (props: AddBookFormProps) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    props.addBookToState({
      title,
      author
    })
  }

  // The onChange events needed to be changed into their own functions!
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Author</Label>
        <Input
          type="text"
          name="author"
          onChange={e => setAuthor(e.target.value)}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
export default AddBookForm
