import React from 'react'
import { Link } from "react-router-dom";

export const Todo = (props) => {
    return (
        <div className="container pt-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.todo.title}</h5>
                    <p className="card-text">{props.todo.descr}</p>
                    <Link to="#" className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</Link>
                </div>
            </div>
        </div>
    )
}
