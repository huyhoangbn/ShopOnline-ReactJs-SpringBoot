import axios from 'axios'

const USER_API_REGISTER_URL = "http://localhost:8889/user/register"
const USER_API_LOGIN_URL = "http://localhost:8889/user/login"
const GETALL_USER_API_URL = "http://localhost:8889/user/getUsers"

class UserService {
    login(){
        return axios.post(USER_API_LOGIN_URL);
    }
    register(){
        return axios.post(USER_API_REGISTER_URL);
    }

    getListUser(){
        return axios.get(GETALL_USER_API_URL);
    }
}
export default new UserService()

