const express = require('express');
const router = express.Router();
const people = require('./../models/people');
const connect = require('./db');
const person = require('./../models/people');
router.post('/',async (req,res) => {
    try{ 
     let conn = await connect;
     console.log(conn)
     const data = req.body
 
     const newpeople = new people(data);
 const response = await newpeople.save();
 console.log('data saved');
 res.status(200).json(response);   
 
 }
    catch(err){
     console.log(err);
     res.status(500).json({error: 'error ho gya just like u'});
 
 
    }
 
 
 
 
 })
 router.get('/', async (req,res) => {
    try{
    const data = await people.find();
    console.log('data fetched');
    
    res.status(200).json(data);
    }catch(err){
    console.log(err);
    res.status(500).json({error: 'fatak error'});
    }
    
    })
    router.get('//:worktype' , async(req,res)=>{
        try{
            const worktype = req.params.worktype;
        if(worktype == 'waiter' || worktype == 'manager' || worktype == 'owner'){
            const response = await people.find({work: worktype})
            console.log('succcess')
            res.status(200).json(response);
        }else{
        res.status(404).json({error: 'invalid work type'})
        }}catch(err){
            console.log(err)
        res.status(500).json({error : 'inernal mat aa'});
        }
        
        })
router.put('/:id', async(req,res) => {
try {
    const prsonid = req.params.id;
    const updateperson = req.body;
    const response = await person.findByIdAndUpdate(prsonid, updateperson , {
new: true,
runValidators: true,

    })
if(!updateperson){
    return res.status(404).json({error: 'person not found'});
}


console.log("updated");
res.status(200).json(response);


} catch (err) {
    console.log(err);
    res.status(500).json({error: 'internal error'});
}

})
router.delete('/:id', async(req,res) => {
try {
    const prsonid = req.params.id;
    const respone = await person.findByIdAndDelete(prsonid);
    console.log("deleted");
res.status(200).json({message: 'delet successfully'});
    
} catch (err) {
    console.log(err);
    res.status(500).json({error: 'internal error'});   
}

})


 module.exports = router;