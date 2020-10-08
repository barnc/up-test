import express from 'express'
import calculate from './calculator.js'

const app = express()

app.listen(4000, () => {
    console.log("Server intialised")
})

app.get("/calculate", (req, res, next) => {
    const { postcode, quantity, packageId } = req.query
    const cost = calculate({postcode, quantity, packageId})

    //@TODO: Add input validation
    res.header("Access-Control-Allow-Origin", "*")
       .json({cost})
})