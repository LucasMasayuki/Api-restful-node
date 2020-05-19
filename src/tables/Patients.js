import Database from '../Database'

const getAll = (request, response) => {
    const queryString = 'SELECT * FROM patients'
    Database.instance.pool.query(queryString, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getById = (request, response) => {
    const id = parseInt(request.params.id)
    const queryString = 'SELECT * FROM users WHERE id = $1'

    Database.instance.pool.query(queryString, [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const create = (request, response) => {
    const {
        name,
        disease
    } = request.body

    const queryString = 'INSERT INTO users (name, email) VALUES ($1, $2)'

    Database.instance.pool.query(queryString, [name, disease], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(`User added with ID: ${result.insertId}`)
    })
}

const update = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name,
        disease
    } = request.body

    const queryString = 'UPDATE users SET name = $1, email = $2 WHERE id = $3'

    Database.instance.pool.query(
        queryString,
        [name, disease, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(`User modified with ID: ${id}`)
        }
    )
}

const deleteById = (request, response) => {
    const id = parseInt(request.params.id)
    const queryString = 'DELETE FROM users WHERE id = $1'

    Database.instance.pool.query(queryString, [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(`User deleted with ID: ${id}`)
    })
}

export default {
    getAll,
    getById,
    create,
    update,
    deleteById,
}