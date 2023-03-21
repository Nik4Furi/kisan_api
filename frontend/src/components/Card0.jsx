import React from 'react'
import { Link } from "react-router-dom";

function Card0() {
    return (

        <>
            <div className="card mx-2 my-2" style={{ width: "18rem;" }}>
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}.</p>
                    <Link href="#"  className="btn btn-danger">Book</Link>
                </div>
            </div>
        </>
    )
}

export default Card0