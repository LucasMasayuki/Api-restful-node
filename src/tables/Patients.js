import Database from '../Database'

const getAll = (request, response) => {
    const queryString = 'SELECT * FROM patients'
    Database.instance.pool.query(queryString, (error, results) => {
        if (error) {
            response.status(500).json(error)
        }
        response.status(200).json(results.rows)
    })
}

const getById = (request, response) => {
    const id = parseInt(request.params.id)
    const queryString = 'SELECT * FROM patients WHERE id = $1'

    Database.instance.pool.query(queryString, [id], (error, results) => {
        if (error) {
            response.status(500).json(error)
            return
        }
        response.status(200).json(results.rows)
    })
}

const create = (request, response) => {
    const {
        name,
        disease
    } = request.body

    const queryString = 'INSERT INTO patients (name, disease) VALUES ($1, $2)'

    Database.instance.pool.query(queryString, [name, disease], (error, results) => {
        if (error) {
            response.status(500).json(error)
            return
        }
        response.status(201).json(`Patients added with ID: ${results.insertId}`)
    })
}

const update = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name,
        disease
    } = request.body

    const queryString = 'UPDATE patients SET name = $1, disease = $2 WHERE id = $3'

    Database.instance.pool.query(
        queryString,
        [name, disease, id],
        (error, results) => {
            if (error) {
                response.status(500).json(error)
                return
            }
            response.status(200).json(`Patients modified with ID: ${id}`)
        }
    )
}

const deleteById = (request, response) => {
    const id = parseInt(request.params.id)
    const queryString = 'DELETE FROM patients WHERE id = $1'

    Database.instance.pool.query(queryString, [id], (error, results) => {
        if (error) {
            response.status(500).json(error)
            return
        }
        response.status(200).json(`Patients deleted with ID: ${id}`)
    })
}

export default {
    getAll,
    getById,
    create,
    update,
    deleteById,
}