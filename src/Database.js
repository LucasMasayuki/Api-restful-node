import {
    Pool
} from 'pg'

let instance = null
export default class Database {
    constructor(...args) {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
        })
    }

    static get instance() {
        if (instance === null) {
            instance = new Database()
        }

        return instance
    }
}