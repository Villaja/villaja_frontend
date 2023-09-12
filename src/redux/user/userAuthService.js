import axios from 'axios'

axios.defaults.withCredentials = true

import { server } from '../../utils/server'

// register user
const register = async(userData) => {
	const response = await axios.post(`${server}/user/register`, userData)

	if(response.data){
		localStorage.setItem('user', JSON.stringify(response.data.user))
		localStorage.setItem('token', JSON.stringify(response.data.token))
	}

	return response.data
}

// login user
const login = async(userData) => {
	const response = await axios.post(`${server}/user/login`, userData)

	if(response.data){
		localStorage.setItem('user', JSON.stringify(response.data.user))
		localStorage.setItem('token', JSON.stringify(response.data.token))
	}

	return response.data
}

// logout
const logout = () => {
	localStorage.removeItem('user')
	localStorage.setItem('token', JSON.stringify(response.data.token))
}


const authService = {
	register,
	login,
	logout,
}

export default authService
