const express = require('express')

const app = express()

app.get('/', (req,res) =>{
    res.send('Hello word, this is your wold !')
}) 

// Demarer le server
const PORT = 3000
app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))
