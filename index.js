"use strict";

// Dependencies
const compress = require("compression")
const express = require("express")
const path = require("path")

// Variables
const port = process.env.PORT || 8080
const web = express()

/// Configurations
//* Express
web.use(compress({ level: 1 }))

// Main
web.use("", (req, res, next)=>{
    if(req.path.match(".html")) return res.redirect(req.path.replace(".html", ""))

    next()
})

web.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }))
web.use("*", (req, res)=>res.redirect("/"))
web.listen(port, ()=>{console.log(`Server is running. Port: ${port}`)})