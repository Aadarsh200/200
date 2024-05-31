const express = require('express');
const router = express.Router();
const menuitem = require('./../models/menu');
router.post('/' , async (req,res) => {
    try{
        const data = req.body

        const nm = new menuitem(data);
        const flex = await nm.save();
        console.log('data sved');
        res.status(200).json(flex);
    }catch(err){
console.log(err)
res.status(500).json({error : 'inernal mat aa'});

    }
})
module.exports = router;