import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

const AddBook = () => {
  let history = useHistory();

  const [book, setBook] = useState({
    title: "",
    author: "",
    description: ""
  });

  const { title, author, description } = book;

  const onInputChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/v1/books', book);
    history.push('/')
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a Book</h2>
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

          <button className="btn btn-primary btn-block mt-3">Add Book</button>
        </form>
      </div>
    </div>
  )
}

export default AddBook