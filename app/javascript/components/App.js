import React, { useState, useEffect } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Books from './books/Books'
import AddBook from './books/AddBook'
import EditBook from './books/EditBook'
import Book from './books/Book'
import Home from './Home'
import axios from 'axios'

const App = () => {
  const [status, setStatus] = useState({
    logged_in: "NOT_LOGGED_IN",
    user: {}
  })

  const checkLoginStatus = () => {
    axios.get('http://localhost:3000/api/v1/logged_in', {withCredentials: true})
         .then(response => {
           console.log("response", response);
          //  if (response.data.logged_in && status.logged_in === "NOT_LOGGED_IN") {
          //    setStatus({
          //      logged_in: "LOGGED_IN",
          //      user: response.data.logged_in
          //    })
          //  }
          //  else if(!response.data.logged_in && status.logged_in === "LOGGED_IN") {
          //   setStatus({
          //     logged_in: "NOT_LOGGED_IN",
          //     user: {}
          //   })
          //  }
         })
  }

  useEffect(() => {
    checkLoginStatus()
  }, []);

  const handleLogin = (data) => {
    setStatus({
      logged_in: "LOGGED_IN",
      user: data.user
    })
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/books" render={props => (
                <Books {...props} logged_in={status.logged_in} />
              )} 
        />
        <Route path="/books/add" component={AddBook} />
        <Route path="/books/edit/:id" component={EditBook} />
        <Route path="/books/:id" component={Book} />
        <Route path="/" 
               render={props => (
                <Home {...props} handleLogin={handleLogin} logged_in={status.logged_in} />
              )}
        />
      </Switch>
    </Router>
	)
}

export default App;