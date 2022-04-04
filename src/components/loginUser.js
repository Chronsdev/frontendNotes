import React, { useState } from 'react'

const LoginUser = ({loginObject}) => {
	const [ username, setUsername ] = useState('')
	const [ password, setPassword ] = useState('')

	const loginObj = e => {
		e.preventDefault()
		loginObject({
			username: username,
			password: password
		})
		setUsername('')
		setPassword('')
	}

	return (
		<div>
		<h2>Login User</h2>
		<form onSubmit={loginObj}>
		<input type="text"
		placeholder="Username"
		name="Username"
		value={username}
		onChange={({ target }) => setUsername(target.value)}
		/><br/>
		<input type="password"
		placeholder="Password"
		name="Password"
		value={password}
		onChange={({ target }) => setPassword(target.value)}
		/><br/>
		<button type="submit">Login</button>
		</form>
		</div>	
		)
}

export default LoginUser