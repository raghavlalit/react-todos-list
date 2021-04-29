import React from 'react';
import {Todo} from './Todo';


export const Todos = (props) => {
    let myStyle = {
        minHeight:"70vh"
    }
    return (
        <div className="container pt-2 my-3" style={myStyle}>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title my-3">Todos List</h3>
                    {props.todos.length===0?"No Todo Available": 
                    props.todos.map((todo)=>{
                        return <Todo todo={todo} key={todo.sr} onDelete={props.onDelete}/>
                    })}
                    
                </div>
            </div>
        </div>
    )
}
