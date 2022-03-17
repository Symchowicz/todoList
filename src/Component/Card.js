import React from "react"

export default function Card({titre,message,id, handleDelete, handleSuccess}){

    return (
        <div className="col">
            <div id={id} className="card">
                <div className="card-body">
                    <h5 className="card-title">{titre}</h5>
                    <p className="card-text">{message}</p>
                </div>
                <div className="d-flex">
                    <button className="btn btn-success w-50" onClick={() => handleSuccess(id)}>Success</button>
                    <button className="btn btn-danger w-50" onClick={() => handleDelete(id)}>Delete</button>
                </div>               
            </div>
        </div>
    )
}