import React, { Component } from 'react'

import TopNav from './components/TopNav'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookFormHooks'

import { Container, Row, Col } from 'reactstrap'
import { IBook } from './types'

class App extends Component {
  state = {
    books: []
  }

  // componentDidMount() {
  //   fetch(`http://localhost:8000/books`)
  //     .then(res => res.json())
  //     .then(books => this.setState({ books }))
  // }

  async componentDidMount() {
    let res = await fetch(`http://localhost:8000/books`)
    let books = await res.json()
    this.setState({ books })
  }

  addBookToState = (book: IBook) => {
    this.setState({
      books: { ...this.state.books, book }
    })
  }

  render() {
    return (
      <>
        <TopNav />
        <Container>
          <Row>
            <Col>
              <AddBookForm addBookToState={this.addBookToState} />
            </Col>
          </Row>
          <Row>
            <Col>
              <BookList books={this.state.books} />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default App
