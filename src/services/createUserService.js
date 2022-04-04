import axios from 'axios'

const url = "http://localhost:3001/api/users"

const postUser = async (userObj) => {
	const res = await axios.post(url, userObj)
	return res.data
}

export default {
	postUser
}