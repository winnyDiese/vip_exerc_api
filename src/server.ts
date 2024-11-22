
import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const app = express()
const prisma = new PrismaClient()


app.get('/', async (req:Request, res:Response) => {
    try {
        const todos = await prisma.prisma_test.findMany()
        res.json(todos)
    } catch (error) {
        res.status(500).json({error: "Something went wrong "})
    }
})

app.post('/', async (req:Request, res:Response):Promise<void> => {
    const {title, description} = req.body

    if(!title || !description){
        res.status(400).json({error : "Title and description is required "})
    }

    try {
        const new_enter = await prisma.prisma_test.create({
            data:{title, description}
        })
        res.status(201).json(new_enter)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Something went wrong"})
    }
})

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
