const express = require('express')
const router = express.Router();
const Patient = require('../models/patientModel')

router.get('/', (req, res) => {
    res.render('index')
})

router.post("/register", async(req, res) => {
    try {
        var myData = new Patient(req.body);   
        console.log(myData)
        await myData.save()
        console.log('Item has been saved')
        res.render('index')

    } catch (error) {
        res.status(400).send('Unable to save to database')

    }
                                                          
});

module.exports = router;
