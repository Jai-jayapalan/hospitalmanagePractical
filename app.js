const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const initialData = require('./Data/initialData')
const hospitalModel = require('./Model/hospitalModel')

// middleware
app.use(cors())
app.use(express.json)

// mongodb connection
mongoose.connect('mongodb://localhost/hospitalDB')

const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Connected to database successfully.....')
})

// getAllPatients
app.get('/api/v1/patients',async(req,res)=>{
    try{
        const patientData = await hospitalModel.find()

        // if the data is not present in the db then add the predefined data
        if(patientData.lenght===0){
            patientData = await hospitalModel.insertMany(initialData)
        }
        res.status(201).json(patientData)
    }
    catch (Err){
        res.status(500).json({Error: Err.message})
    }
})

// post patient data
app.post('/api/v1/patients',async(req,res)=>{
    const newPatient = req.body;
    try{
        // finding existing patient
        const existingPatient = await hospitalModel.findOne({patientID:request.body.patientID})
        if(existingPatient){
            res.json({error:"User already exits"})
        }else{
            const addnewPatient = await hospitalModel.create(newPatient)
            res.status(201).json(addnewPatient)
        }
    }
    catch (error){
        res.status(500).json({error:error.message})
    }
})

// update patientData
app.put('/api/v1/patients', async(req,res)=>{
    const patientToBeUpdated = req.body;
    try{
        const patient = await hospitalModel.findByIdAndUpdate({patientID: patientToBeUpdated.patientID},patientToBeUpdated)
        res.status(201).json(patient)
    }
    catch (error){
        res.status(500).json({Error: error.message})
    }
})


// listen
app.listen(3600,()=>{
    console.log('Server running on port 3600')
})