export interface IBook {
  id?: number
  title: string
  author: string
}

export interface BookListProps {
  books: IBook[]
}
