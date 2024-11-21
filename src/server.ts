
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

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
