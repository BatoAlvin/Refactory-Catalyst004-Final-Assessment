const express = require('express')
const router = express.Router();
const path = require('path')
// const bcrypt = require('bcryptjs')


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
})

//Patient ROUTES
router.post("/addpatient", async(req, res) => {
    try {
        var myData = new Patient(req.body);
        await myData.save()
        console.log(myData)
        console.log('Item has been saved')
        res.redirect('/patientList')

    } catch (error) {
        res.status(400).send('Unable to save to database')

    }
                                                          
});


module.exports = router;