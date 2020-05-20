import fetch from 'node-fetch'

export default class TestApi {
    static async testGetAllPatients() {
        try {
            let url = `${process.env.PROD_URL}/patients`
            console.log(url)

            const response = await fetch(url, {
                method: 'get'
            })

            const patients = await response.json()

            console.log(patients)
        } catch (error) {
            console.log(error)
        }
    }
    static async testGetPatient(id) {
        try {
            let url = `${process.env.PROD_URL}/patients/${id}`
            console.log(url)

            const response = await fetch(url, {
                method: 'get'
            })

            const patients = await response.json()

            console.log(patients)
        } catch (error) {
            console.log(error)
        }
    }
    static async testCreatePatient(dataToCreate) {
        try {
            let url = `${process.env.PROD_URL}/patients`

            console.log(url)

            const response = await fetch(url, {
                method: 'post',
                body: dataToCreate,
            })

            const patients = await response.json()

            console.log(patients)
        } catch (error) {
            console.log(error)
        }
    }
    static async testUpdatePatient(dataToUpdate) {
        try {
            let url = `${process.env.PROD_URL}/patients/${id}`
            console.log(url)

            const response = await fetch(url, {
                method: 'put',
                body: dataToUpdate,
            })

            const patients = await response.json()

            console.log(patients)
        } catch (error) {
            console.log(error)
        }
    }
    static async testDeletePatient(id) {
        try {
            let url = `${process.env.PROD_URL}/patients/${id}`
            console.log(url)

            console.log(url)

            const response = await fetch(url, {
                method: 'delete',
            })

            const patients = await response.json()

            console.log(patients)
        } catch (error) {
            console.log(error)
        }
    }
}