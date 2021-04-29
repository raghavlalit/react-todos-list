import React from 'react'

export const Todo = (props) => {
    return (
        <div className="container pt-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.todo.title}</h5>
                    <p className="card-text">{props.todo.descr}</p>
                    <a href="#" className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</a>
                </div>
            </div>
        </div>
    )
}
