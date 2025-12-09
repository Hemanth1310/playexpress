import express from "express";
import router from "./router";
import dbrouter from './databaseRouter'
const app = express()

app.set('view engine','ejs')
app.use('/files',router)
app.use('/db',dbrouter)

app.listen(3003,()=>{
    console.log('Started on server 3003')
})