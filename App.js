
import "./App.css"
import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import CreateEmployee from "./component/CreateEmployee"
import UpdateEmployee from "./component/UpdateEmployee"
import ViewEmployee from "./component/ViewEmployee"
import Nav from "./component/Nav"
function App() {
  return (
    <Router>
      <Route path = "/create" component={CreateEmployee} />
      <Route path = "/update" component={UpdateEmployee} />
      <Route path = "/" exact component={ViewEmployee} />
      <div className="App">
        <div class="container">
          <h1>Employee Managment System</h1>
          <div class="row">
            <h2>Name</h2>
            <h2>DOB</h2>
            <h2>Sex</h2>
            <h2>Salary</h2>
          </div>
          <ul>
            <li>
              <div class="row">
                <p class="col">Senay Fekadu</p>
                <p class="col">1992-12-6</p>
                <p class="col">Male</p>
                <p class="col">20,000</p>
                <a href="#" class="edit">edit</a>
                <a href="#" class="delete">Delete</a>
              </div>
            </li>
          </ul>
          <Nav />
        </div>
      </div>
    </Router>
  );
}

export default App;
