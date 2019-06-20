import React from 'react'
import { IBook } from '../types'

interface BookProps {
  book: IBook
}

const Book = (props: BookProps) => {
  return <li>{props.book.title}</li>
}
export default Book
