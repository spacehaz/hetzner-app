const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app!')
})

app.get('/data', (req, res) => {
  res.json({'hello': 'world!'})
})

app.listen(3000, () => {
  console.log('Server is up on 3000')
})
