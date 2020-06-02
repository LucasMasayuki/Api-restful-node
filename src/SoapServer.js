import soap from 'soap-server';
import Patients from './services/Patients'

const port = 1337
const host = 'https://api-restful-tamaribuchi.herokuapp.com'
export default class SoapServer {
    static initialize() {
        var soapServer = new soap.SoapServer();
        soapServer.addService('getPatients', new Patients());
        soapServer.listen(port, host);
    }
}