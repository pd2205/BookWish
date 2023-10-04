import React, { useState } from 'react'
import useBooksContext from '../hooks/useBooksContext'

const BookCreate = () => {

  const { createBook } = useBooksContext()

  const [title, setTitle] = useState('')

  const handleTitle = (event) => {
    if(event.target.value !== '')
      setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createBook(title)
    setTitle('')
  }
    
  return (
    <div className='book-create'>
        <h3>Add a Book</h3>
        <form onSubmit={ handleSubmit }>
            <label htmlFor="title">Title</label>
            <input 
                className='input'
                type="text"
                name="title"
                value={title}
                onChange={handleTitle}
            />
            <button className='button'>Create!</button>
        </form>
    </div>
  )
}

export default BookCreate