const express= require("express")

const cors= require("cors")
const app= express()
app.use(express.json())
app.use(cors())
require('dotenv').config()
const mysql = require("mysql2")


//Connect to sql//
const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"bookschema"
})
//get home page//
app.get("/", function (req,res){
    res.send("this is home page")
})

//get books page//
app.get("/books", function(req,res){


    const q= "SELECT * FROM bookstable"
    const values=[
        req.body.name,
        req.body.desc,
        req.body.image,
        req.body.price,
    ]


db.query(q,[values], function (err,data){
    if(err){
        console.log(err)
    }else{
     
        res.json(data)
    }
    })
})
//add book to page//
app.post("/books", function(req,res){
    const q=" INSERT INTO bookstable(`name`, `desc`, `image`, `price`) VALUES (?);"
    const values=[
        req.body.name,
        req.body.desc,
        req.body.image,
        req.body.price,
    ]
    db.query(q,[values],(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.send("successfully added data")
        }
    })
})

//delete book //
// app.delete("/books/:id",(req,res)=>{
//         const bookId= req.params.id
//         const q= "DELETE FROM bookstable WHERE  id=?"
//         db.query(q,[bookId],(err,data)=>{
//             if(err){
//                 res.send(err)
//             }else{
//                 res.send("book has been deleted")
//             }
//         })
//     })
//get a single book page//
    app.get("/books/:id",(req,res)=>{
        const bookId= req.params.id
        const q= "SELECT * FROM bookstable WHERE  id=?"
        db.query(q,[bookId],(err,data)=>{
            if(err){
                res.send(err)
            }else{
           res.send(data)
            
              
            }
        })
    })







app.listen("3001", function(req,res){
    console.log("running on 3001")
    })