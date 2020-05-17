import Database from '../Database'

export default class Patients {
    static getAll(request, response) {
        const queryString = 'SELECT * FROM patients'
        Database.shared().pool.query(queryString, (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    static getById(request, response) {
        const id = parseInt(request.params.id)
        const queryString = 'SELECT * FROM users WHERE id = $1'

        Database.shared().pool.query(queryString, [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    static create(request, response) {
        const {
            name,
            disease
        } = request.body

        const queryString = 'INSERT INTO users (name, email) VALUES ($1, $2)'

        Database.shared().pool.query(queryString, [name, disease], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User added with ID: ${result.insertId}`)
        })
    }

    static update(request, response) {
        const id = parseInt(request.params.id)
        const {
            name,
            disease
        } = request.body

        const queryString = 'UPDATE users SET name = $1, email = $2 WHERE id = $3'

        Database.shared().pool.query(
            queryString,
            [name, disease, id],
            (error, results) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`User modified with ID: ${id}`)
            }
        )
    }

    static deleteById(request, response) {
        const id = parseInt(request.params.id)
        const queryString = 'DELETE FROM users WHERE id = $1'

        Database.shared().pool.query(queryString, [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User deleted with ID: ${id}`)
        })
    }
}