import React, { useState, useEffect } from 'react'
import CreateUser from './components/createUser'
import Login from './components/loginUser'
import NoteForm from './components/noteUser'
import createService from './services/createUserService'
import loginService from './services/loginUserService'
import noteService from './services/noteService'
import Notes from './components/notesUser'
import Message from './components/Message'

const App = () => {
	const [ notes, setNote ] = useState([])
	const [ tokent, setToken ] = useState(null)
	const [ visibility, setVisibility] = useState(true)
	const [ successMessage, setSuccessMessage ] = useState(null)
	const [ errorMessage, setErrorMessage ] = useState(null)

	const toggleVisibility = () => setVisibility(!visibility)

	const getterNote = async id => {
		const note = await noteService.getNotes(id)
		setNote(note)
	}

	useEffect(() => {
		noteService
		.getNotes()
		.then(res => {
			setNote(res)
		})
	}, [])

	useEffect(() => {
		const localToken = window.localStorage.getItem('userAccount')
		if (localToken) {
			const tokent = JSON.parse(localToken)
			setToken(tokent)
			noteService.setToken(tokent.token)
		}
	}, [])

	const showWhenVisible = { display: tokent ? 'none' : '' }

	const createUser = async userObj => {
		try {
			await createService.postUser(userObj)

			setSuccessMessage('The user is succesfully created')
			setTimeout(() => {
				setSuccessMessage(null)
			}, 5000)
		} catch(e) {
			setErrorMessage('The user has failed to be created')
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
		}
	}

	const loginpost = async loginObj => {
		const token = await loginService.postLogin(loginObj)

		window.localStorage.setItem('userAccount', JSON.stringify(token))
		noteService.setToken(token)
		setToken(token)
	}

	const newNote = async noteObj => {
		try {
			const note = await noteService.postNote(noteObj)
			setNote(notes.concat(note))

			setSuccessMessage('The note was succesfully created')
			setTimeout(() => {
				setSuccessMessage(null)
			}, 5000)
		} catch(e) {
			setErrorMessage('Theres was a error creating the note')
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
		}
	}

	const dltNote = async noteToDelete => {
		if (window.confirm(`You wanna delete the note with the title: ${noteToDelete.title}`)) {
			noteService.deleteNote(noteToDelete.id)		
			setNote(notes.filter(res => res.id !== noteToDelete.id))
		} else {
			window.alert('The note was not delete')
		}
		
	}

	const ChangeNote = async id => {
		const arrNote = notes.find(res => res.id === id)
		const note = await noteService.putNote(id)

		setNote(notes.map(res => res.id !== id ? notes : note.data))
	}

	const exit = () => {
		localStorage.clear()
		setToken(null)
	}

  return (
    <div>
    <h1>List of notes app</h1>
    <Message
    successMessage={successMessage}
    errorMessage={errorMessage}
    />
    {tokent !== null && 
    <h2>Welcome to your account {tokent.username} 
    <button onClick={exit}>Exit Account</button></h2>}
    <div style={showWhenVisible}>
    {visibility === true &&<Login loginObject={loginpost}/>}
    {visibility === false && <CreateUser createObject={createUser}/>}
    <button onClick={toggleVisibility}>Change</button>
    </div>
    {tokent !== null && <NoteForm noteObject={newNote}/>}
    <h2>This is the list of all notes</h2>
    {tokent !== null && notes.map(notes => <Notes key={notes.id} notes={notes} dltNote={dltNote}/>)}
    </div>
    )
}

export default App;
