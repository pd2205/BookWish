import React from 'react'
import BookShow from './BookShow'

const BookList = ({books, onDelete, onEdit}) => {

  const renderedBooks = books.map((book) => {
    return (
      <BookShow 
        key={book.id}
        title={book.title}
        onDelete={onDelete}
        id={book.id}
        onEdit={onEdit}
      />
    )
  })

  return (
    <div>
      {renderedBooks}
    </div>
  )
}

export default BookList