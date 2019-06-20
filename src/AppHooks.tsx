import React, { Component, useState, useEffect } from 'react'
import TopNav from './components/TopNav'
import { Container, Row, Col } from 'reactstrap'
import BookList from './components/BookList'

const App: React.FC = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/books`)
      .then(res => res.json())
      .then(books => setBooks(books))
  }, [])

  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <Col>
            <BookList books={books} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
