import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';

const EditBook = () => {
  let history = useHistory();

  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: ""
  });

  const { title, author, description } = book;

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:3000/api/v1/books/${id}`)
    setBook(result.data)
  }

  const onInputChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  useEffect(() => {
    loadBook()
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/v1/books/${id}`, book);
    history.push('/')
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit a Book</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Author"
              name="author"
              value={author}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-warning btn-block mt-3">Edit Book</button>
        </form>
      </div>
    </div>
  )
}

export default EditBook