const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()
const port = 3000

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'temp/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })

app.use(express.static(path.join(__dirname, 'public')))

app.post('/api/ingen/upload', upload.single('uploadFile'), (req, res) =>{
    res.json({success: true, message: `${req.file.originalname}のアップロードが完了しました`})
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('*', (req, res) => {
    res.status(404).send('404 Not Found')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})