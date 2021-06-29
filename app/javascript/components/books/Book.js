import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Book = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: ""
  })

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const res = await axios.get(`http://localhost:3000/api/v1/books/${id}`)
    setBook(res.data)
  }

  return (
    <div className="container">
      <h1 className="display-4">Book Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Title:       {book.title}</li>
        <li className="list-group-item">Author:      {book.author}</li>
        <li className="list-group-item">Description: {book.description}</li>
      </ul>
      <hr />
      <Link className="btn btn-primary" to="/"> Back To Home </Link>
    </div>
  );
};

export default Book;