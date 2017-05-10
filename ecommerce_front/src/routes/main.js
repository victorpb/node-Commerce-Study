const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    return res.render('main/index', {
        title:'Its Live'
    })
})

module.exports = router