//-------- Requiring the files content modal to search on them -------------X
const filesModal = require('../../modals/FilesModal');

function UsersControllers() {
    return {
        //----- Search the lands by the farmers -------------X
        async Lands(req, res) {
            // --------- Get the string or query to search  ---------X
            const { search } = req.body;

            try {

                //------Write the algo to search on the basis of query
                let lands = await filesModal.find({
                    $or: [
                        { title: search }, { description: search }, { price: search }, { quantity: search }
                    ]
                })

                //-------- Finding the length of the object -----------X
                var length = 0;
                for( var key in lands ) {
                    if( lands.hasOwnProperty(key) ) {
                        ++length;
                    }
                }

                if (length <= 0) {
                    return res.status(200).json({ success: true, msg: "No data is matched with your query" })
                }
                return res.status(200).json({ success: true, msg: "Finding the result related your query", lands });
            } catch (error) {
                return res.status(404).json({ success: false, msg: "Something went wrong" });
            }
        },

            //Send the request by the farmers-----------X
            async sendRequest(req,res){
                //finding the farmer's id and landloard
                let lands_id = req.params.id;
                let users = await UsersModal.findById({_id:req.user.id});
                users.status = true;
                await users.save()
                return res.status(200).json({success:true,msg:"Send the request successfully"},users)
            },

            //Reject the request of farmers-----------X
            async rejectRequest(req,res){
                let users = await UsersModal.findById({_id:req.params.id});
                users.status = false;
                await users.save()
                return res.status(200).json({success:true,msg:"Reject the request successfully"},users)
            }
    }
}

module.exports = UsersControllers;