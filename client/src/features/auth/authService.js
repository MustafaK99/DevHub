import axios from 'axios'

const API_URL = '/api/users/registerAdmin'
const API_LOGIN_URL = '/api/users/login'

const register = async(userData) =>{

    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const login = async(userData) =>{

    const response = await axios.post(API_LOGIN_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}



const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService