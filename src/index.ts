import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
