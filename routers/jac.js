var express = require("express")
// routers can be accessed by using express.Router()
var routers = express.Router()
var mymodel = require("../models/mymodel.js")

routers.post("/daal", (req, res) => {

    const entry = new mymodel({
        email: req.body.email,

        password: req.body.password
    })
    entry.save()
    res.render(" server")

});

module.exports = routers;
