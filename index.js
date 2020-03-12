require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.get('/api', (req, res) => {
  res.json({ message: 'We are back in business' })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})