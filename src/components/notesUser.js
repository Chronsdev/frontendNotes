import React, { useState } from 'react'

const Notes = (props) => {
	const notes = props.notes
	const [ noteObject, setNoteObject ] = useState(notes)

	const removeNote = () => props.dltNote(notes)

	return(
		<div>
		<div>
		<h3>{notes.title}</h3>
		</div>
		<div>
		<p>{notes.homework} <button onClick={removeNote}>Remove task</button></p>
		</div>
		</div>
		)
}

export default Notes