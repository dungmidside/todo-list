import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./HomePage";
import TodoPage from "./TodoPage";

const TodoApp = () => {
  return (
    <Router>
      <div>
        <div className="container">
          <div className="header row justify-content-md-center">
            <div className="col-md-4">
              <nav className="nav nav-pills justify-content-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/App" className="nav-link">
                    App
                  </Link>
                </li>
              </nav>
            </div>
          </div>
          <div className="body row justify-content-md-center">
            <div className="col-md-4">
              <Route exact path="/" component={Home} />
              <Route exact path="/app" component={TodoPage} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default TodoApp;
