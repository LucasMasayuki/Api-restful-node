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
    static async testGetPatient() {
        try {
            let url = `${process.env.PROD_URL}/patients/1`
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
    static async testCreatePatient() {
        try {
            let url = `${process.env.PROD_URL}/patients`
            let dataToCreate = {
                name: "Outro paciente",
                disease: "Gripe"
            }

            console.log(url)

            const response = await fetch(url, {
                method: 'post',
                body: JSON.stringify(dataToCreate),
            })

            const patients = await response.json()

            console.log(patients)
        } catch (error) {
            console.log(error)
        }
    }
    static async testUpdatePatient() {
        try {
            let url = `${process.env.PROD_URL}/patients/1`
            console.log(url)

            let dataToUpdate = {
                name: "Atualizando paciente",
                disease: "Gripe"
            }

            console.log(url)

            const response = await fetch(url, {
                method: 'put',
                body: JSON.stringify(dataToUpdate),
            })

            const patients = await response.json()

            console.log(patients)
        } catch (error) {
            console.log(error)
        }
    }
    static async testDeletePatient() {
        try {
            let url = `${process.env.PROD_URL}/patients/1`
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