const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.set('view engine', 'ejs')


const homeRouter = require('./routes/home')
app.use("/", homeRouter)
app.use('/home', homeRouter)



const errorhandler = require('./middlewares/errorhandler')
app.use(errorhandler)

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Aplicacion de ejemplo escuchando en puerto´${process.env.SERVER_PORT}`)
})