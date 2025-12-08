import { Router } from "express";
import fs from 'fs/promises'
import path from "path";

const router = Router()
router.get('/',async (req,res)=>{
    const filepath = path.join(__dirname,'sample.txt')
    try{
        const data = await fs.readFile(filepath,'utf-8')
        res.render('error',{data:data,mark:'Thank you'})
    }catch(error){
        console.log(error)
        res.send('Error Parsing the file')
    }
})

export default router