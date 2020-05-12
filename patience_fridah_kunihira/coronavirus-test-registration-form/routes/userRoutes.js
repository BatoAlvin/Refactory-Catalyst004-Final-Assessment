const express =require ('express')
const router = express.Router();
const path = require('path');
const Virus = require('../models/userModel');


 
router.get('/user',(req,res)=>{
   res.render('corona')
});

router.post('/user', async (req, res) => {
    
    try{
        console.log('rawRequest>', req.body)
        const newVirus = new Virus(req.body)

        newVirus.save(function (err, savedVirus) {
            if (err)throw err;
            
            else{
                console.log( 'savedRequest>',newVirus)
                res.status(200).send('Successful')
            }
           
          });
        

        }catch(error){
            console.log(error)
            res.status(500).send('Server error')
        }
}
)
module.exports = router;