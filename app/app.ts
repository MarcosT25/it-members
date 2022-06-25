import express from "express";
import { Prisma, PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/ping', async (req, res) => {
    res.send('pong')
})

app.post('/test', async (req, res) => {
    const data = req.body
    if (data.name != undefined) {
        res.status(201).send('Ok')
    }
    else {
        res.status(400).send('Deu merda')
    }
})

app.get('/member/show', async(req, res) => {
    const members = await prisma.member.findMany()
    res.json(members)
})

app.post('/member/add', async (req, res) => {
    const data = req.body
    try {
        const result = await prisma.member.create({
            data: data
        })
        res.status(201).json(result)
    }
    catch (error) {
        res.status(400).json({"message": "Bad Request"})
    }
})

app.put('member/update/:id', async (req, res) => {
    const data = req.body
    const { id } = req.params
    try {
        const result = await prisma.member.update({
            where:  { id: Number(id) },
            data: data
        })
        res.status(201).json(result)
    }
    catch (error) {
        res.status(400).json({"message": "Bad Request"})
    }
})

app.delete('/member/delete/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const result = await prisma.member.delete({
            where: {
                id
            }
        })
        res.status(200).json(result)
    }
    catch (error) {
        res.status(400).json({"message": "Bad Request"})
    }
})

app.route('/lead')
    .get(async (req, res) => {
        const leads = await prisma.lead.findMany()
        res.json(leads)
    })
    .post(async (req, res) => {
        const data = req.body
        try {
            const result = await prisma.lead.create({
                data: data
            })
            res.status(201).json(result)
        }
        catch (error) {
            res.status(400).json({"message": "Bad Request"})
        }
    })
    .delete(async (req, res) => {
        const data = req.body
        try {
            const result = await prisma.lead.delete({
                where: { id: data.id}
            })
            res.status(201).json(result)
        }
        catch (error) {
            res.status(400).json('{"message": "Bad Request"}')
        }
    });

app.listen(3333, ()=>{
    console.log('Server Online')
})