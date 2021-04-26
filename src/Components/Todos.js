import React from 'react';
import {Todo} from './Todo';


export const Todos = (props) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <Todo todo={props.todos[0]}/>
                </div>
            </div>
        </div>
    )
}
