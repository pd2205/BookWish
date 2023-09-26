import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ title, onDelete, id, onEdit }) => {

  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    onDelete(id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (editTitle) => {
    onEdit(id, editTitle)
    setShowEdit(!showEdit)
  }

  let content = <h3>{title}</h3>
  if(showEdit) {
    content = <BookEdit title={title} onSubmit={handleSubmit} />
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