import React from 'react'

function AddMachinary() {
    
        //handling to add the contents 
        const handleSubmit = ()=>{
            console.log('submit');
        }
    return (


        <>
            <div className="container my-2 mx-auto">
                {/* Filling the form and save on the database  */}
                <form method='post' enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="title" class="form-label">Enter The Title</label>
                        <input type="text" class="form-control" id="title" name='title' />
                    </div>
                    {/* Description  */}
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Add the description of the data" id="description" name='description'></textarea>
                        <label for="description">Description</label>
                    </div>

                    <div class="mb-3">
                        <label for="price" class="form-label">Enter The Price</label>
                        <input type="text" class="form-control" id="price" name='price' />
                    </div>
                    <div class="mb-3">
                        <label for="qunatity" class="form-label">Enter The Qunantity</label>
                        <input type="text" class="form-control" id="qunatity" name='qunatity' />
                    </div>


                    <button type="submit" class="btn btn-danger">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddMachinary