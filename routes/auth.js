const express = require('express')
const router = express.Router()
const authMdw = require('../middlewares/auth.mdw')

// router.post('/login', (req, res) => {
//     const collection = db.collection('users');
//     const result = await collection.insertOne({
//         username: req.body.username,
//         password: req.body.password
//   })
// })
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signUp', (req, res) => {
    res.render('signup');
});

router.get('/', authMdw, (req, res) => {
    res.render('index')
})

module.exports = router