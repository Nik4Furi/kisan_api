import React from 'react'
import {Link} from "react-router-dom"

function SubNavbar() {
  return (
    <>
    <div className="container-fluid m-0 p-0 text-bg-secondary d-flex align-items-center justify-content-center">
        <Link to="/admin/" className="mx-2">Home</Link>
        <Link to="/admin/farmers" className="mx-2">Farmers</Link>
        <Link to="/admin/merchants" className="mx-2">Merchants</Link>
        <Link to="/admin/landlords" className="mx-2">Landlords</Link>
    </div>
    </>
  )
}

export default SubNavbar