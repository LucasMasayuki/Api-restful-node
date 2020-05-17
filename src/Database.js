import {
    Pool
} from 'pg'

import {
    db_password,
    db_host,
    db_database,
    db_user,
    db_port,
} from './Config'

export default class Database {
    constructor(...args) {
        this.pool = new Pool({
            user: db_user,
            host: db_host,
            database: db_database,
            password: db_password,
            port: db_port,
        })
    }

    static shared() {
        if (this.selfReference === undefined) {
            this.selfReference = new Database
        }
        return this.selfReference
    }
}