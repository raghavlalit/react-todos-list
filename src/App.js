import './App.css';
import Header from './Components/Header';
import {Todos} from './Components/Todos';
import {Footer} from './Components/Footer';

function App() {
  let todos = [
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
  ]
  return (
    <div>
      <Header title='My Todo App'/>
      <Todos todos={todos}/>
      <Footer/>
    </div>
  );
}

export default App;
