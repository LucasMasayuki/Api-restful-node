import fetch from 'node-fetch'

export default class TestApi {
    static async testGetAllPatients() {
        try {
            let url = `${process.env.PROD_URL}/patients`
            console.log(url)

            const response = await fetch(url, {
                method: 'get'
            })

            const jsonResponse = await response.json()

            console.log(`Response: ${jsonResponse}\n`)
        } catch (error) {
            console.log(`Response: ${error}\n`)
        }
    }
    static async testGetPatient(id) {
        try {
            let url = `${process.env.PROD_URL}/patients/${id}`
            console.log(url)

            const response = await fetch(url, {
                method: 'get'
            })

            const jsonResponse = await response.json()

            console.log(`Response: ${jsonResponse}\n`)
        } catch (error) {
            console.log(`Response: ${error}\n`)
        }
    }
    static async testCreatePatient(dataToCreate) {
        try {
            let url = `${process.env.PROD_URL}/patients`

            const response = await fetch(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body: JSON.stringify(dataToCreate),
            })

            const jsonResponse = await response.json()

            console.log(`Response: ${jsonResponse}\n`)
        } catch (error) {
            console.log(`Response: ${error}\n`)
        }
    }
    static async testUpdatePatient(dataToUpdate) {
        try {
            let url = `${process.env.PROD_URL}/patients/${id}`
            console.log(url)

            const response = await fetch(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'put',
                body: JSON.stringify(dataToUpdate),
            })

            const jsonResponse = await response.json()

            console.log(`Response: ${jsonResponse}\n`)
        } catch (error) {
            console.log(`Response: ${error}\n`)
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

            const jsonResponse = await response.json()

            console.log(`Response: ${jsonResponse}\n`)
        } catch (error) {
            console.log(`Response: ${error}\n`)
        }
    }
}