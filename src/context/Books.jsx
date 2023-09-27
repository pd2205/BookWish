import { createContext, useState } from "react";
import axios from 'axios'

const BooksContext = createContext()

function Provider({ children }) {
    
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
    // Making a GET req to fetch books

    const response = await axios.get("http://localhost:3001/books")
        setBooks(response.data)
    }

    const createBook = async (title) => {
        // Making a POST Req to create a book
    
        const response = await axios.post("http://localhost:3001/books", {
          title: title
        })
    
        const newBook = {id: response.data.id, title: response.data.title}
        const updatedBooks = [...books, newBook]
        setBooks(updatedBooks)
    }
    
    const deleteBookById = async (id) => {
        // Making a DELETE req to delete a book by its id
    
        await axios.delete(`http://localhost:3001/books/${id}`)
    
        const updatedBooks = books.filter((book) => {
          return id !== book.id
        })
        setBooks(updatedBooks)
    }
    
    const editBookById = async (id, title) => {
        // Making a PUT req to update a title of book by its id 
    
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title: title
        })
    
        const updatedBooks = books.map((book) => {
          if(response.data.id === book.id) {
            return response.data
          }
          return book
        })
        setBooks(updatedBooks)
    }

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById,
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            { children }
        </BooksContext.Provider>
    )
}

export { Provider }

export default BooksContext