const express = require('express')
const router = express.Router();

const StaffModel = require('../models/staffs');

router.get('/' , async (req, res)=>{
  try {
      const staffs = await StaffModel.find()
      res.json(staffs)
  } catch (error) {
      res.send("Error : " + error)
  }
});


router.post('/' , async (req , res) =>{
    const staffData = new StaffModel({
        name:req.body.name,
        age:req.body.age,
        designation:req.body.designation
    })

    try {
      const data = await staffData.save();
      res.json(data);
    } catch (error) {
      res.send(error);
    }
})

module.exports = router