import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Books = (props) => {
	const [books, setBook] = useState([]);

	useEffect(() => {
		loadBooks();	}, [])

	const loadBooks = async () => {
		const result = await axios.get('http://localhost:3000/api/v1/books');
		setBook(result.data)
	}

	const deleteBook = async (id) => {
		await axios.delete(`http://localhost:3000/api/v1/books/${id}`);
		loadBooks();
	}

  return (
    <div className="container">
			<h1 className="text-center">Status: {props.logged_in}</h1>
			<div className="py-4">
				<h1>Books Page</h1>
				<table className="table border shadow">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Title</th>
							<th scope="col">Author</th>
							<th scope="col">Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{books.map((book, index) => (
							<tr>
								<th scope="row">{index + 1}</th>
								<td>{book.title}</td>
								<td>{book.author}</td>
								<td>{book.description}</td>
								<td>
									<Link className="btn btn-primary" style={{margin:"0 10px 0 0"}} to={`/books/${book.id}`}> View </Link>
									<Link className="btn btn-outline-primary" style={{margin:"0 10px 0 0"}} to={`/books/edit/${book.id}`}>Edit</Link>
									<Link className="btn btn-danger" onClick={() => deleteBook(book.id)} to="/">Delete</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>

        <Link className="btn btn-primary" to={'/books/add'}> Add Book </Link>
			</div>
		</div>
  )
}

export default Books