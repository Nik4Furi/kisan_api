import React, { useState } from 'react'

function Contact() {
    const [form,setForm] = useState({name:'',email:'',profession:'',concern: ''})
    
    //-------handle onchange event in input fields
    const handleOnChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    //----------handle to submit the form------
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        setForm({name:'',email:'',profession:'',concern: ''})
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Your Name: </label>
                    <input type="text" className="form-control" id="name" placeholder='John Wick' minLength={5} required name='name' value={form.name} onChange = {(e) => handleOnChange(e)}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Your Email: </label>
                    <input type="email" className="form-control" id="email" placeholder='johnwick23@gmail.com' minLength={6} required name='email' value={form.email} onChange = {(e) => handleOnChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="profession" className="form-label">Enter Your Profession: </label>
                    <input type="text" className="form-control" id="profession" placeholder='Student,Web developer' minLength={3} required name='farmer, landlord' value={form.profession}  onChange = {(e) => handleOnChange(e)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="concern">Enter Your Concern: </label>
                    <textarea rows={4} className="form-control" placeholder="Why have you query?" id="concern" minLength={12} required name='concern' value={form.concern} onChange = {(e) => handleOnChange(e)}></textarea >                    
                </div>

                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
        </>
    )
}

export default Contact