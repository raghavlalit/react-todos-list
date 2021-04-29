import './App.css';
import Header from './Components/Header';
import {Todos} from './Components/Todos';
import {Footer} from './Components/Footer';
import {AddTodo} from './Components/AddTodo';
import {About} from './Components/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, descr)=>{
    let sr;
    if(todos.length===1){
      sr = 0;
    }else{
      sr = todos.length+1;
    }
    const myTodo = {
      sr:sr,
      title:title,
      descr:descr
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState([
    {
      sr:1,
      title:'buy food',
      descr:'buy this product'
    },
    {
      sr:2,
      title:'buy medicine',
      descr:'buy this product'
    },
    {
      sr:3,
      title:'buy milk',
      descr:'buy this product'
    }
  ]);

  return (
    <>
      <Router>
        <Header title='My Todo App'/>

        <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
            </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
