import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Books from "../pages/Books"
import Add from "../pages/Add"
import Update from "../pages/Update"
import Book from '../pages/Book';
import Nav from './Nav';
import Register from '../pages/Register';
import Login from '../pages/Login';

import Cart from '../pages/Cart';

function App() {
  return (
 <Router>
 <Nav/>
    <Routes>
        <Route element={<Books/>} path="/"></Route>
        {/* <Route element={<Add/>} path="/add"></Route> */}
        <Route element={<Book/>} path="/book/:id"></Route>
        <Route element={<Register/>} path="/register"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Cart/>} path="/cart"></Route>

    </Routes>
 </Router>
  )
}

export default App