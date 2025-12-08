import express from "express";
import fs from 'fs/promises'
import path from "path";
import router from "./router";

const app = express()

app.set('view engine','ejs')
app.use('/files',router)
app.use('/db')

// app.get('/',async(req,res)=>{
//     const filepath = path.join(__dirname,'sample.txt')
//     try {
//         const data =await fs.readFile(filepath,'utf-8')
//         res.send(data)
//     }catch(error){
//         console.log(error)
//         res.json({
//             message:'request Failed',
//             error:error
//         })
//     }
// })

app.listen(3003,()=>{
    console.log('Started on server 3003')
})