import axios from 'axios';
class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()) {
        this.url = url;
        this.client = client;
    }
    registerUser(registrationData) {
        return this.client.post(this.url + "/users", registrationData);
    }
    // getMessages() {
    //    return this.client.get(this.url + "/messages");
    // }
}
export default DataService;