const router = require("express").Router();
const Appointment = require("../models/appointment");

router.route("/add").post((req,res)=>{

    const appointmentNo = req.body.appointmentNo;
    const maker = req.body.maker;
    const seeker = req.body.seeker;
    const subject = req.body.subject;
    const date = req.body.date;
    const time = req.body.time;

    let newAppointment = new Appointment();
    newAppointment.appointmentNo = appointmentNo;
    newAppointment.maker = maker;
    newAppointment.seeker = seeker;
    newAppointment.subject = subject;
    newAppointment.date = date;
    newAppointment.time = time;
    
    newAppointment.save().then(()=>{
        res.json("Appointment created")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Appointment.find().then((appointments)=>{
        res.json(appointments)
    }).catch((err)=>{
        console.log(err)
    })
})


router.get("/getOne/:id", async (req, res) => {
    const filter = { time: req.params.id };
  
    const data = await Appointment.findOne(filter);
  
    if (data) {
      return res.status(200).send({ success: true, Appointment: data });
    } else {
      return res.status(400).send({ success: false, msg: "Data not found" });
    }
  }); 
  
  router.get("/get", async (req, res) => {


    const filter = { date: req.query.date };
  
    const data = await Appointment.find(filter);
  
    if (data) {
      return res.status(200).send({ success: true, Appointment: data });
    } else {
      return res.status(400).send({ success: false, msg: "Data not found" });
    }
  }); 

module.exports = router; 