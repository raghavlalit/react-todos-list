import './App.css';
import Header from './Components/Header';
import {Todos} from './Components/Todos';
import {Footer} from './Components/Footer';
import {AddTodo} from './Components/AddTodo';
import React, { useState } from 'react';

function App() {

  const onDelete = (todo)=>{
    // console.log('delete me', todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, descr)=>{
    let sr;
    if(todos.length==1){
      sr = 0;
    }else{
      sr = todos.length+1;
    }
    const myTodo = {
      sr:sr,
      title:title,
      descr:descr
    }
    console.log(myTodo);
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
    <div>
      <Header title='My Todo App'/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
