import React, { useState  }from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = (props) => {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/v1/sessions', {user}, {withCredentials: true})
               .then(response => {
                 if (response.data.logged_in) {
                  props.handleSuccssfulAuth(response.data)
                  history.push('/books')
                 }
               });
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Login a User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block mt-3">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
