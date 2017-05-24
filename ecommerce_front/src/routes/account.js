const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    return res.render('account/index',{
        title: 'Test Ecommerce',
        layout: 'layouts/main'
    })
})

module.exports = router