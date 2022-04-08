const axios = require("axios");

const AUTH_URL = "https://rally1.rallydev.com/slm/webservice/v2.0/security/authorize"

const URL_1 = "https://rally1.rallydev.com/slm/webservice/v2.0/user";
const URL_2 = "";

let TOKEN;

class UsersApiService {

    /**
     * get token
     */
    async getToken() {
        try {
            token = await axios.post(AUTH_URL, {}, {
                //type username and password here
                auth: {
                    username: '',
                    password: ''
                }
            });
            return token.OperationResult.SecurityToken

        } catch (err) {
            console.log(err);
        }
    }


    /**
     *  This function get the user from url one 
     */
    async getUser() {
        try {
            if (TOKEN === undefined) {
                TOKEN = await this.getToken();
            }

            let userData = await axios.get(URL_1, {
                headers: {
                    'Authorization': TOKEN
                }
            });
            return userData
        } catch (err) {
            console.log(err);
        }
    }

    /**
     *  This function create the user from url two
     */
    async postUser(data) {
        try {
            if (TOKEN === undefined) {
                TOKEN = await this.getToken();
            }

            let response = await axios.post(URL_2, data, {
                headers: {
                    'Authorization': TOKEN
                }
            });
            return response

        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UsersApiService();