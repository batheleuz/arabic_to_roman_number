import express, { response } from 'express'
import routes from './src/routes/NumeralRomanRoutes'

const cors = require('cors')

const app = express()

app.use(cors())

routes (app)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
