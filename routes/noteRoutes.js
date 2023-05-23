import express  from "express";
import verify from '../auth/verifyToken.js'
const router =express.Router();

let notes=[];
//get All notes
router.get('/',(req,res)=>{
    res.send(notes);
});
//get note  by id
router.get('/:id',(req,res)=>{
    res.send(notes[req.params.id]);
});

//Save notes
router.post('/',verify,(req,res)=>{
    notes.push(req.body);
    res.send("Recored Saved");
});
//edit note
router.patch('/:id',(req,res)=>{
    notes[req.params.id]=req.body;
    res.send("Recored Updated");
});
//delete note
router.delete('/:id',(req,res)=>{
    notes.splice(req.params.id,1);
    res.send("Recored deleted");
});

export default router;