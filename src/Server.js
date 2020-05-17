import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import patients from './tables/Patients'

export default class Server {
    constructor(...args) {
        this.app = express()
        this.port = process.env.PORT || 3000
    }

    initialize() {
        this.app.use(bodyParser.json())

        this.app.use(bodyParser.urlencoded({
            extended: true
        }))

        this.app.use(cors())

        this.app.get('/', (request, response) => {
            response.json({
                info: 'Node.js, Express, and Postgres API'
            })
        })

        this.app.get('/patients', patients.getAll)
        this.app.get('/patients/:id', patients.getById)
        this.app.post('/patients', patients.create)
        this.app.put('/patients/:id', patients.update)
        this.app.delete('/patients/:id', patients.deleteById)

        this.app.listen(this.port, () => console.log('server started'))
    }
}