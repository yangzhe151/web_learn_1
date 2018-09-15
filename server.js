const express = require('express')
const app = express()
const path = require('path')

app.use('/static', express.static(path.resolve(__dirname, './static')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(8080, () => {
    console.log('server start at 8080')
})