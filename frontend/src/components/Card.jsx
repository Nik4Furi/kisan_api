import React from 'react'

function Card({ img, title, counts }) {
    return (
        <>
            <div className="card mb-3 mx-2" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{counts}</h5>
                            <p className="card-text">We have the {counts} {title} family</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card