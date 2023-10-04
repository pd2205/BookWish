import React, { useState } from 'react'
import BookEdit from './BookEdit'
import useBooksContext from '../hooks/useBooksContext'

const BookShow = ({ title, id }) => {

  const { deleteBookById } = useBooksContext()

  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    deleteBookById(id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(!showEdit)
  }

  let content = <h3>{title}</h3>
  if(showEdit) {
    content = <BookEdit id={id} title={title} onSubmit={handleSubmit} />
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${id}/300/200`} alt="books" />
      <div className="content">
        {content}
      </div>
      <div className="actions">
        <button
          className='edit'
          onClick={handleEdit}
        >
          Edit
        </button>
        <button 
          className="delete"
          onClick={handleDelete}
        >
          Delete
       </button>
      </div>
    </div>
  )
}

export default BookShow