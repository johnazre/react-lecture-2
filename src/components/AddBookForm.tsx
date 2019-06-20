import React, { Component } from 'react'
import { IBook } from '../types'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

interface AddBookFormState {
  title: String
  author: String
}

interface AddBookFormProps {
  addBookToState(book: IBook): void
}

class AddBookForm extends Component<AddBookFormProps, AddBookFormState> {
  state = {
    title: '',
    author: ''
  }

  // The change event for the input needs to be tied directly to a React change event that is tied to an input element
  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.currentTarget
    this.setState({ ...this.state, [name]: value })
  }

  // The submit handler needs to be tied to a form event tied to a form element
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" name="title" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Author</Label>
          <Input type="text" name="author" onChange={this.handleChange} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}
export default AddBookForm
