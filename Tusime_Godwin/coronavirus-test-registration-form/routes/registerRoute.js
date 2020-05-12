const express = require('express');
const router = express.Router();
const Patient = require('../models/userModel')


//Create a get router with '/' path to display the index.html file in a browser
// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../views', 'index.html'))
// })
router.get('/', (req, res) => {
    res.render('index.pug')
})
router.get('/index2', (req, res) => {
    res.render('index2.pug')
})
router.post("/register", async (req, res) => {
    try {
        var myData = new Patient(req.body);
        await myData.save()
            .then(item => {
                res.redirect('/index2')
            })
    } catch (error) {
        // res.status(400).send("unable to save to database");
        console.log(error);
        
    

    };
});
// router.post("/registerpatient", async (req, res) => {
//     try {
//         var myData = new Patient(req.body);
//         await myData.save()
//             .then(item => {
//                 res.redirect('/customerlist')
//             })
//     } catch (error) {
//         res.status(400).send("unable to save to database");
//     };
// });
/*Creating a post route which directs the customer to either do route(if correct info is)
 or signup page (if wrong info is entered)*/
// router.post('/login',
//     passport.authenticate('local', {
//         successRedirect: '/do',
//         failureRedirect: '/'
//     })
// );

module.exports = router;