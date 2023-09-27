import React, { useContext } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/Books'

const BookList = () => {

  const { books } = useContext(BooksContext)

  const renderedBooks = books.map((book) => {
    return (
      <BookShow 
        key={book.id}
        title={book.title}
        id={book.id}
      />
    )
  })

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList