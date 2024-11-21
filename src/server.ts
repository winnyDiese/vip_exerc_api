
import express, { Request, Response } from "express";

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World! This is your TypeScript-powered message.');
})

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
