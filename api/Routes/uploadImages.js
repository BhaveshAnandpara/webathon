const router = require("express").Router();
const dotenv = require("dotenv")
dotenv.config()

const admin = require("firebase-admin");
const db = require("../db");

const { initializeApp } = require("firebase/app");
const { getDatabase, ref, push, set, onValue, onChildAdded, onChildChanged , child , update } = require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyAQoR5nX7S71-rU7QRjKCh7SNC6fIxg7cU",
    authDomain: "artisticdots-9e530.firebaseapp.com",
    projectId: "artisticdots-9e530",
    storageBucket: "artisticdots-9e530.appspot.com",
    messagingSenderId: "934685648645",
    appId: "1:934685648645:web:f0df79691405898bc0b96c",
    measurementId: "G-YHBYKFBKX6"
  };
  

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../artisticdots/public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


router.post('/uploadImage' , upload.single('Image') ,  async(req,res)=>{

    try {
        const imgPath = req.file.path
        const desc = req.body.desc
        const artist = req.body.artist
        const socials = req.body.socials


        const pathJson = {
            imgPath,
            desc,
            artist,
            socials
        };

        const usersDb = db.collection('Arts'); 

        await usersDb.add(pathJson);
        res.send([{"Message" : "done"} , {
            pathJson
        }]);

      } catch(error) {
        console.log(error)
        res.send(error);
      }
    




})

router.post('/createEvent' , upload.single('EventImage') ,  async(req,res)=>{

    try {

        const imgPath = req.file.path
        const desc = req.body.desc
        const name = req.body.name
        const date = req.body.date
        const mode = req.body.mode

        const eventJson = {   
            imgPath,
            desc,
            name,
            date,
            mode
            };

        const usersDb = db.collection('Event'); 

        await usersDb.add(eventJson);

        res.send([{"Message" : "done"} , {
            eventJson
        }]);

      } catch(error) {
        console.log(error)
        res.send(error);
      }
    




})

router.get('/getArts' ,  async(req,res)=>{

    try {

        const events = await db.collection('Arts').get();

        const list = events.docs.map(doc => doc.data())

        res.json({"art" : list})


      } catch(error) {
        console.log(error)
        res.send(error);
      }
    

})

router.get('/getEvents' ,  async(req,res)=>{

    try {

        const events = await db.collection('Event').get();

        const list = events.docs.map(doc => doc.data())

        let datetime = new Date()
        datetime = datetime.toISOString().slice(0,10).split('-')

        let currentTime = []

        for(let i = 2; i >= 0; i--) {
            currentTime.push(datetime[i])            
        }

        console.log(currentTime)

        let upcomingEvents = []
        let pastEvents = []

        list.forEach(element => {
            let eventDate =  element.date.split('-')

            if(eventDate >= currentTime){
                    upcomingEvents.push(element)
            }
            else{
                    pastEvents.push(element)
            }
        });

        res.json({"upcomingEvents" : upcomingEvents , "pastEvents" : pastEvents })


      } catch(error) {
        console.log(error)
        res.send(error);
      }
    

})

module.exports =  router