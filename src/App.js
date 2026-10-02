import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './MyComponents/About';

function App() {

  let initTodo;

  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    initTodo = [];
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    const updatedTodos = todos.filter((e) => {
      return e !== todo;
    });

    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      title: title,
      desc: desc,
      sno: sno
    };

    const updatedTodos = [...todos, myTodo];

    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    console.log(myTodo);
  };

  return (
    <Router>

      <Header title="My Todos List" searchBar={false} />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;