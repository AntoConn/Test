const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb://user123:pass123@ds239873.mlab.com:39873/dnd"

mongoose.connect(db,err=>{
    if(err){
        console.error('Error!' + err)
    }else{
        console.log('Connected to mongodb' )
    }
})

router.get('/',(req,res) =>{
    res.send('From API route')
})

module.exports = router