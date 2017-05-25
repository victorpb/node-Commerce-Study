const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    return res.render('account/index',{
        title: 'Login',
        layout: 'layouts/main'
    })
})

router.get('/register', (req, res)=>{
    return res.render('account/register',{
        title: 'Register',
        layout: 'layouts/main'
    })
})
module.exports = router