const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('*', (req, res) => {
    res.status(404).send('404 Not Found')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})