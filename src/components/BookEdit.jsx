import React, { useState } from 'react'

const BookEdit = ({ title, onSubmit }) => {

  const [editTitle, setEditTitle] = useState(title)

  const handleEdit = (event) => {
    event.preventDefault()
    onSubmit(editTitle)
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