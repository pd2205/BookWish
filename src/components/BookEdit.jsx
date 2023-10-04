import React, { useState } from 'react'
import useBooksContext from '../hooks/useBooksContext'

const BookEdit = ({ title, onSubmit, id }) => {

  const { editBookById } = useBooksContext

  const [editTitle, setEditTitle] = useState(title)

  const handleEdit = (event) => {
    event.preventDefault()
    onSubmit(editTitle)
    editBookById(id, editTitle)
  }

  const handleChange = (event) => {
    setEditTitle(event.target.value)
  }

  return (
    <form 
      className="book-edit"
      onSubmit={handleEdit}
    >
      <input
        className='input'
        value={editTitle}
        onChange={handleChange}
      />
      <button className="button is-primary">
        Save
      </button>
    </form>
  )
}

export default BookEdit