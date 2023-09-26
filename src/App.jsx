import React, {useState} from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

const App = () => {

  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const newBook = {id: Math.round(Math.random() * 9999), title: title}
    console.log(newBook);
    const updatedBooks = [...books, newBook]
    setBooks(updatedBooks)
    console.log(books)
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return id !== book.id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if(id === book.id) {
        return {...book, title: title}
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <h1>Books Reading List</h1>
      <BookList 
        books={books}
        onDelete={deleteBookById}
        onEdit={editBookById}
      />
      <BookCreate 
        onCreate={createBook}
      />
    </div>
  )
}

export default App