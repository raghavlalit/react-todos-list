import React, { useState } from 'react';


export const AddTodo = (props) => {
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !descr){
            alert('Title and Descr cannot be blank');
        }else{
            props.addTodo(title, descr);
            setTitle("");
            setDescr("");
        }
        
    }
    return (
        <div className="container my-3">
            <h3>Add new Todo</h3>
            <form className="col-4" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descr" className="form-label">Description</label>
                    <input type="text" value={descr} onChange={(e)=>{setDescr(e.target.value)}} className="form-control" id="descr" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
