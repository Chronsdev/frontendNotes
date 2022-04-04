import React, { useState} from 'react'

const CreateUser = ({createObject}) => {
	const [ username, setUsername ] = useState('')
	const [ name, setName ] = useState('')
	const [ age, setAge ] = useState('')
	const [ password, setPassword ] = useState('')

	const createObj = e => {
		e.preventDefault()
		createObject({
			username: username,
			name: name,
			age: age,
			password: password
		})
		setUsername('')
		setName('')
		setAge('')
		setPassword('')
	}

	return(
		<div>
		<h2>Create a User</h2>
		<form onSubmit={createObj}>
		 <input type="text"
		 placeholder="Username"
		 name="Username"
		 value={username}
		 onChange={({ target }) => setUsername(target.value)}
		 /><br/>
		 <input type="text"
		 placeholder="Name"
		 name="Name"
		 value={name}
		 onChange={({ target }) => setName(target.value)}
		 /><br/>
		 <input type="number"
		 placeholder="Age"
		 name="Age"
		 value={age}
		 onChange={({ target }) => setAge(target.value)}
		 /><br/>
		 <input type="password"
		 placeholder="Password"
		 name="Password"
		 value={password}
		 onChange={({ target }) => setPassword(target.value)}
		 /><br/>
		 <button type='submit'>Create</button>
		</form>
		</div>
		)
} 

export default CreateUser