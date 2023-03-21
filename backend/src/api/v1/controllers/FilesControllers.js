//------Imports or required the 'packages', 'middlwares', or config and modals------X
const filesModal = require('../../modals/FilesModal'); // Uploading the content with the images

const { v4: uuid4 } = require('uuid')

//---------Start to create the 'files' controller for perform CRUD operation perform by the 'Mentors or 'Admin'------X
function filesControllers() {
    return {
        //---------Adding a new files, using POST '/api/filess/add'
        async Add(req, res) {
            //----Get the constraints from the 'req.body'--
            const { title, description, img, uuid,price,qunatity } = req.body;

            try {
                //------Here we saving the img first of all-------X
                //--------After saving the img, we are now saving the other filess schemas----X
                const files = await filesModal({
                    mentorID: req.user.id,
                    title,
                    description,
                    img:req.file.path,
                    uuid : uuid4(),
                    price, 
                    qunatity
                })
                await files.save();

                return res.status(200).json({ success: true, msg: 'Successfully adding a new files', files })

            } catch (error) { return res.status(500).json({ success: false, msg: `${error}` }) }
        },

        //-----------Start to fetch all the files, without choosing any specific or particular-----X
        async Fetch(req, res) {
            try {
                const files = await filesModal.find();

                if (files.length == 0) {
                    return res.status(200).json({ success: true, msg: 'No filess are exist yet, Become a first person who add new files' })
                }

                return res.status(200).json({ success: true, msg: 'Fetching all the filess...', files })

            } catch (error) { return res.status(500).json({ success: false, msg: error }); }
        },

        //-------Start to delete a files, using '/api/filess/delete'
        async Delete(req, res) {
            try {
                //----Checking the given id files is exist---X
                let files = await filesModal.findOne({ _id:req.params._id })

                if (!files) {
                    return res.status(500).json({ success: false, msg: 'Given id of the files not found or exist' })
                }

                files = await filesModal.findByIdAndDelete({ _id:req.params._id })

                return res.status(200).json({ success: true, msg: 'files is delete successfully' , files})

            } catch (error) { return res.status(500).json({ success: false, msg: error }); }

        },

        //-----Update the files,of the given id , using '/api/filess/update'
        async Update(req, res) {
            const { _id } = req.params;
            const{title,description,img,price,quantity} = req.body;
            try {
                //----Checking the given id files is exist---X
                let files = await filesModal.findOne({ _id })

                if (!files) {
                    return res.status(500).json({ success: false, msg: 'Given id of the files not found or exist' })
                }

                //-------Checking the users  are authenticating-------X
                // if(files.merchant_id !== req.user.id){
                //     return res.status(401).json({success:false,msg:'You are not valid mentor , please re-login'})
                // }

                let newfiles = {};

                if(title){newfiles.title = title}
                if(description){newfiles.description = description}
                if(img){newfiles.img = img}
                if(price){newfiles.price = price}
                if(quantity){newfiles.quantity = quantity}

                files = await filesModal.findByIdAndUpdate({ _id },{$set:newfiles},{new:true});

                return res.status(200).json({ success: true, msg: 'files is update successfully' , files})

            } catch (error) { return res.status(500).json({ success: false, msg: error }); }

        }
    }
}

module.exports = filesControllers;