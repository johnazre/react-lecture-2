import React from 'react'
import { BookListProps } from '../types'
import Book from './Book'
import { IBook } from '../types'

const BookList = (props: BookListProps) => {
  let listOfBooks = props.books.map((book: IBook) => (
    <Book key={book.id} book={book} />
  ))
  return <ul>{listOfBooks}</ul>
}

export default BookList
