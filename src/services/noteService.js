import axios from 'axios'

const url = "http://localhost:3001/api/notes"

let token = null

const setToken = newToken => {
	token = `bearer ${newToken}`
}

const getNotes = async () => {
	const res = await axios.get(url)
	return res.data
}

const postNote = async (noteObj) => {
	const config = {
		headers: { authorization: token }
	}
	const res = await axios.post(url, noteObj, config)
	return res.data
}

const putNote = async (noteObj) => {
	const res = await axios.put(`${url}/${noteObj.id}`, noteObj)
	return res.data
}

const deleteNote = async (id) => {
	const res = await axios.delete(`${url}/${id}`)
	return res.data
}

export default {
	getNotes,
	postNote,
	putNote,
	deleteNote,
	setToken
}