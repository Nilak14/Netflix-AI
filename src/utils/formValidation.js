const formValidation = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  )
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  if (!isEmailValid) return 'Please enter a valid email.'
  if (!isPasswordValid)
    return 'Your password must have 8 character with uppercase, number and special character'
  return null
}
export default formValidation
