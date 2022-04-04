import axios from 'axios'

const url = 'http://localhost:3001/api/login'

const postLogin = async (loginObj) => {
	const res =	await axios.post(url, loginObj)
	return res.data
}

export default {
	postLogin
}