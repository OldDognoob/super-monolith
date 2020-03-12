require('dotenv').config()

const path = require('path')
//specify our folder for static assets, like images,css, index.html, js...
//we need an endpoint on "/" to send index.html
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')))

const PORT = process.env.PORT || 5000

console.log(process.env.EMPEROR);

//endpoints that serve JSON
app.get('/api', (req, res) => {
  res.json({ message: 'We are back in business' })
})

//fallback endpoint that will just send back index.html with the CRA
app.get("*",(req,res)=>{
    //send back the index.html contained inside client/build
    res.sendFile(path.join(__dirname, 'client/build','index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})