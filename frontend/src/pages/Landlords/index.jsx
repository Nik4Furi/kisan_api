import React from 'react'
import Card2 from '../../components/Card2';


function index() {
  return (
    
    <>
        <div className="container-fluid m-0 p-0 text-bg-secondary d-flex align-items-center justify-content-center">
        <Link to="/admin/" className="mx-2 text-light fs-4">Home</Link>
        <Link to="/landlord/add" className="mx-2 text-light fs-4">Add Lands</Link>        

        <form class="d-flex" role="search" method='get' >
        <input class="form-control me-2" type="search" placeholder="Finding the context what you want!" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>

    {/* Landlord see all the lands which its accqurid */}
    <div className="container my-2">
        <h3>You have all these land acquired</h3>

        <div className="container my-2">
            <div className="row">
            {/* <Card2 title={title} description={description} img={img} /> */}
            </div>
        </div>
    </div>

    </>
  )
}

export default index