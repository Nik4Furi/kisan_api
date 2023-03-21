import React, { useContext } from 'react'
import Contact from '../components/Contact'

function Home() {
    
    return (
        <>
            <div className="container-fluid d-flex p-0 m-0">
                <div className='my-2 mx-2'>
                    <h2 className='text-danger'>Kisan -- Pick and Make The Jobs</h2>
                    <p><span className="text-danger fs-5 fs-bold">Kisan</span>, is a plateform, is providing the reliability to earn, make jobs and communicate with the agents(who are help the farmers to buy and sell the machinary and crips), and also have more oppertunites to enhance their crops drilling and make it for their profitable</p>
                    <p className="text-dark fs-bold">The Ultimate Goal OF Farming is not the growing the crops but the cultivation and perfections of human being</p>
                </div>

                <div className='w-75'>
                    <img src="/img/header.jfif" alt="header" style={{width:"456px"}}/>
                </div>
            </div>

            {/* Tell the info about us, how is it helpful  */}
            <div className="container my-2 d-flex" id='about'>
                <div>
                    <h1>How its helpful ?</h1>
                    <p>This plateform, is have 3 types of the users, are <span className="text-danger">"</span> Farmers, Landlords(Who are provding their lands for farming and inovations), and Sellers or Agents who are selling their machinary, also can create bond with the Government Certified Organizations</p>
                    <p>Farmers send the request landlords to lease their lands, and landlord can analyze the profile of the farmer and accept or rejec the request of farmers. </p>
                </div>

                <div>
                    <img src="/img/about.jfif" alt="about" style={{width:"410px"}}/>
                </div>
            </div>

            {/* advantages about us  */}
            <div className="container my-4">
                <h1 className='text-center'>Why should you choose US ?</h1>
                <p>We are providing most useful key features</p>
                <ul>
                    <li>Easy to interact directly with the Landlords,to farming on their lands</li>
                    <li>Easy to communicate with the Agents, to buy and get lease the equipments</li>
                    <li>*Also can sell their crops, off between agents</li>
                </ul>
            </div>

            {/* Contact us component  */}
             {/* Contact Section for contact to more info about us  */}
             <section id='contact' className="container my-3" >
                <h2 className="text-center">Contact With Us</h2>
                <p className='lead text-center'>If any query, just like how to join, reviews and mentors and others concern!</p>

                {/* Contact Component  */}
                <Contact />
            </section>
        </>
    )
}

export default Home