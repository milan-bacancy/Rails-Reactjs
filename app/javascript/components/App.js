import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Books from './pages/Books'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddBook from './books/AddBook'
import EditBook from './books/EditBook'
import Book from './books/Book'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
	    </div>
      <Switch>
        <Route exact path="/" component={Books} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/books/add" component={AddBook} />
        <Route path="/books/edit/:id" component={EditBook} />
        <Route path="/books/:id" component={Book} />
      </Switch>
    </Router>
	)
}

export default App;