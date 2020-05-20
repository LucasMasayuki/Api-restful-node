import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Patients from './tables/Patients'

import dotenv from "dotenv"
dotenv.config()

export default class Server {
    static initialize() {
        const app = express()
        const port = process.env.PORT || 3000

        app.use(bodyParser.json())

        app.use(bodyParser.urlencoded({
            extended: true
        }))

        app.use(cors())

        app.get('/', (request, response) => {
            response.json({
                info: 'Node.js, Express, and Postgres API',
            })
        })

        app.get('/patients', Patients.getAll)
        app.get('/patients/:id', Patients.getById)
        app.post('/patients', Patients.create)
        app.put('/patients/:id', Patients.update)
        app.delete('/patients/:id', Patients.deleteById)

        app.listen(port, () => console.log('server started'))
    }
}