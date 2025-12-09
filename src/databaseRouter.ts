import express from 'express'
import { prisma } from './prisma'
import { Prisma, User } from '@prisma/client'
const router = express.Router()
router.use(express.json())

router.post('/addUser',async (req,res)=>{
    const {name,email} = req.body as Prisma.UserCreateInput
    try{
        const newUserList : User = await prisma.user.create({
            data:{name, email}
        })
        res.json({
            message:'New post Created',
            data:newUserList
        })
    }catch(error){
        res.status(404).send(error)
    }
})

router.get('/users',async(req,res)=>{
    try{
        const users :User[] = await prisma.user.findMany({})
         res.json({
            message:'New post Created',
            data:users
        })
    }catch(error){
        res.status(404).send(error)
    }
})

export default router