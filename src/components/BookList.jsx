import React from 'react'
import BookShow from './BookShow'
import useBooksContext from '../hooks/useBooksContext'

const BookList = () => {

  const { books } = useBooksContext()

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