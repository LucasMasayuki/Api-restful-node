import Database from '../Database'

function Patients() {}
Patients.prototype.getAll = function (arg1, arg2) {
    const queryString = 'SELECT * FROM patients'
    let result = null
    Database.instance.pool.query(
        queryString,
        (error, results) => {
            if (error) {
                result = error
            }
            result = results.rows
        }
    )
    return result
};

export default Patients