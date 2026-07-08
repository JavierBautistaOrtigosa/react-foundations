const express = require('express')
const fs = require('fs')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())

app.post('/save-profile', (req, res) => {
      console.log('Received from React:', JSON.stringify(req.body, null, 2))


      fs.writeFileSync('./profile.json', JSON.stringify(req.body, null, 2))
      res.json({ ok: true })
})

app.listen(3001, () => {
      console.log('Backend running on http://localhost:3001')
})
