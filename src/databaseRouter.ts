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

router.patch('/modifier',async (req,res)=>{
    const email : string = req.body.email
    const {name} = req.body as Prisma.UserUpdateInput

    try{
        const updatedUser :User = await prisma.user.update({
            where:{
             email:email
            },
             data:{
                name:name
             }

        })
        res.json({
            message:"User updated",
            data:updatedUser
        })
    }catch(error){
        res.status(401).send('invalid request')
    }
})

router.delete('/delete/:id',async(req,res)=>{
    const id:number  = Number(req.params.id)
    try{
        const deletedUser = await prisma.user.delete({
            where:{
                id:id
            }
        })

        res.send(deletedUser)
    }catch(error){
        res.send(error)
    }
})

export default router