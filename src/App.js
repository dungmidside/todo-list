import React from "react";
import { Layout } from "./modules/common";
import { TodoApp } from "./modules/todo";

import "./style/bootstrap/bootstrap.min.css";
import "./style/font-awesome/css/fontawesome-all.min.css";
import "./style/App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <TodoApp />
      </Layout>
    );
  }
}
