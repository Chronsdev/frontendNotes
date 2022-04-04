const Message = ({successMessage, errorMessage}) => {
	if (successMessage !== null) {
		return(
			<h2>{successMessage}</h2>
		)
	} else if (errorMessage !== null) {
		return(
			<h2>{errorMessage}</h2>
		)
	}
}

export default Message