import React, { useContext, useEffect } from 'react'
import Card from '../../components/Card'
// import MarchantsContext from '../../contexts/Marchants/MarchantsContext'
import UsersContext from '../../contexts/Users/UsersContext';

function index() {
    const {fetchMachinary} = useContext(UsersContext);

    useEffect(()=>{
        fetchMachinary();
    })
  return (
    <>
        <div className="container my-2">
            <h2>We have the community of the farmers, merchants and landlords which are communicate with each others</h2>

            {/* Card to show the farmwers ,merchants and landlords  */}
            <div className="container my-2">
                <div className="row">
                    <Card img={'/img/farmers_logo.png'} title={'Farmers'} counts={23} />

                </div>
            </div>
            

        </div>

        {/* Give the more info  */}
        <div className="container-fluid my-2">
            <h3>We have the big family to interact, and we are all feel happy to work and help of them 😎</h3>
        </div>
    </>
  )
}

export default index