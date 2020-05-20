import readline from 'readline'
import TestApi from "./TestApi"

const possibilitiesOfThingsToTo = [
    'get_all',
    'get_one',
    'create',
    'update',
    'delete',
]

export default class Prompt {
    constructor() {
        this.READLINE = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.READLINE.on('close', async () => {
            console.log('See you again.')
        })
    }

    async init() {
        let answer = ''
        let isNotInclueded = !possibilitiesOfThingsToTo.includes(answer)
        while (isNotInclueded) {
            answer = await this.promiseAnswerQuestion("What you want to do ? ")

            isNotInclueded = !possibilitiesOfThingsToTo.includes(answer)
            if (isNotInclueded) {
                console.log('Invalid answer, please select a valid answer from the list below')

                possibilitiesOfThingsToTo.forEach((thingsToDo) => {
                    console.log(`${thingsToDo}`)
                })
            }
        }

        this.initTest(answer)
    }

    async initTest(whatWantToDo) {
        let id
        let name
        let disease

        switch (whatWantToDo) {
            case 'get_all':
                await TestApi.testGetAllPatients()
                break

            case 'get_one':
                id = await this.questionAboutPatientId()
                console.log(id)

                await TestApi.testGetPatient(id)

                break

            case 'create':
                name = await this.questionAboutPatientName()
                disease = await this.questionAboutPatientDisease()

                dataToCreate = {
                    name: name,
                    disease: disease,
                }

                await TestApi.testCreatePatient(dataToCreate)

                break

            case 'update':
                id = await this.questionAboutPatientId()
                name = await this.questionAboutPatientName()
                disease = await this.questionAboutPatientDisease()

                let dataToUpate = {
                    name: name,
                    disease: disease
                }

                await TestApi.testUpdatePatient(dataToUpate, id)
                break

            case 'delete':
                id = await this.questionAboutPatientId()
                await TestApi.testDeletePatient(id)
                break

            default:
                console.log('Sorry, that is not something I know how to do.');
        }

        let answer = await this.promiseAnswerQuestion("any key - continue \nexit - close\n")
        if (answer === 'exit') {
            this.READLINE.close()
            return
        }

        this.init()
    }

    promiseAnswerQuestion(question) {
        return new Promise((resolve) => {
            this.READLINE.question(
                question,
                (answer) => {
                    resolve(answer)
                }
            )
        })
    }

    async questionAboutPatientId() {
        let id
        let isNotNumber = isNaN(id)

        while (isNotNumber) {
            id = await this.promiseAnswerQuestion("Please tell me the id of patient: ")
            isNotNumber = isNaN(id)
            if (isNotNumber) {
                console.log('Invalid answer, please tell me a valid id')
            }
        }

        return id
    }

    async questionAboutPatientName() {
        let name
        let isNotString = typeof name !== 'string'

        while (isNotString) {
            let name = await this.promiseAnswerQuestion("Please tell me the name of patient: ")

            isNotString = typeof name !== 'string'
            if (isNotString) {
                console.log('Invalid answer, please tell me a valid name')
            }
        }

        return name
    }

    async questionAboutPatientDisease() {
        let disease
        let isNotString = typeof disease !== 'string'

        while (isNotString) {
            let disease = await this.promiseAnswerQuestion("Please tell me the disease of patient: ")

            isNotString = typeof disease !== 'string'
            if (isNotString) {
                console.log('Invalid answer, please tell me a valid disease')
            }
        }

        return disease
    }
}