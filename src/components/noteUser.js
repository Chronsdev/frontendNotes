import React, { useState } from 'react'

const NoteForm = ({noteObject}) => {
	const [ title, setTitle ] = useState('')
	const [ homework, setHomework ] = useState('')

	const noteObj = e => {
		e.preventDefault()
		noteObject({
			title: title,
			homework: homework
		})
		setTitle('')
		setHomework('')
	}

	return(
		<div>
		<h3>Write here to create a new note</h3>	
		<form onSubmit={noteObj}>
		<input type="text"
		placeholder="Title"
		name="Title"
		value={title}
		onChange={({ target }) => setTitle(target.value)}
		/><br/>
		<input type="text"
		placeholder="Homework"
		name="Homework"
		value={homework}
		onChange={({ target }) => setHomework(target.value)}
		/><br/>
		<button type="submit">Create note</button>
		</form>
		</div>
		)
}

export default NoteForm