import React, { useContext, useState } from 'react'
import UsersContext from '../../contexts/Users/UsersContext'

function AddContents() {
    const {addMachinary} = useContext(UsersContext)
    const [form,setForm] = useState({title:'',description:'',img:'',price:'',quantity:''})

        const onchange = (e)=>{
            setForm({...form,[e.target.name]:e.target.value})
        }

        //handling to add the contents 
        const handleSubmit = async(e)=>{
            console.log('submit');
            e.preventDefault();
            try {
                
            await addMachinary(form);
            } catch (error) {
                console.log('error');
            }


        }
    return (


        <>
            <div className="container my-2 mx-auto">
                {/* Filling the form and save on the database  */}
                <form method='post' encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Enter The Title</label>
                        <input type="text" className="form-control" id="title" name='title' value={form.title} onChange={e => onchange(e)}
                        />
                    </div>
                    {/* Description  */}
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Add the description of the data" id="description" name='description' value={form.description} onChange={e => onchange(e)}></textarea>
                        <label htmlFor="description">Description</label>
                    </div>

                   
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Enter The Price</label>
                        <input type="text" className="form-control" id="price" name='price' value={form.price} onChange={e => onchange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="qunatity" className="form-label">Enter The Qunantity</label>
                        <input type="text" className="form-control" id="quantity" name='quantity' value={form.quantity} onChange={e => onchange(e)}/>
                    </div>


                    <button type="submit" className="btn btn-danger">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddContents