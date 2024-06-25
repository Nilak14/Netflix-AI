import {useRef, useState} from 'react'
import {RxCrossCircled} from 'react-icons/rx'
import formValidation from '../utils/formValidation'

const Form = () => {
  const [isSignInActive, setIsSignInActive] = useState(true)
  const [emailErrorMsg, setEmailErrorMsg] = useState(null)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null)
  const fullName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleFormValidation = () => {
    const msg = formValidation(email.current.value, password.current.value)
    if (msg === null) {
      setEmailErrorMsg(null)
      setPasswordErrorMsg(null)
      return
    }
    if (msg.includes('email')) {
      setEmailErrorMsg(msg)
      setPasswordErrorMsg(null)
    } else if (msg.includes('password')) {
      setPasswordErrorMsg(msg)
      setEmailErrorMsg(null)
    }
  }

  const handleFormToggle = () => {
    setIsSignInActive(!isSignInActive)
  }
  return (
    <form
      className="text-white tracking-wider  w-[90vw] sm:w-[90%] mx-auto flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault()
        handleFormValidation()
      }}
    >
      <h1 className="text-white text-3xl font-bold">
        {isSignInActive ? 'Sign In' : 'Sign Up'}
      </h1>
      {isSignInActive || (
        <div>
          <input
            ref={fullName}
            required
            className="rounded-sm w-full outline-none   bg-[#0F0F0F]   px-2 py-3 focus:border-white focus:border-2"
            type="text"
            placeholder="Full Name"
          />
        </div>
      )}
      <div>
        <input
          ref={email}
          autoFocus
          className="rounded-sm  outline-none  bg-[#0F0F0F] w-full  px-2 py-3 focus:border-white focus:border-2 "
          type="text"
          placeholder="Email"
        />
        {emailErrorMsg && (
          <p className="flex mt-3 items-center gap-2 netflixText text-sm ">
            <RxCrossCircled className="text-lg" />
            {emailErrorMsg}
          </p>
        )}
      </div>
      <div>
        <input
          ref={password}
          className="rounded-sm w-full outline-none focus:border-white focus:border-2   bg-[#0F0F0F]  px-2 py-3"
          type="password"
          placeholder="Password"
        />
        {passwordErrorMsg && (
          <p className="flex mt-3 items-center gap-2 netflixText text-sm">
            <RxCrossCircled className="text-lg" />
            {passwordErrorMsg}
          </p>
        )}
      </div>
      <button className="netflixBG py-3 rounded-sm font-bold text-lg hover:bg-red-700 transition-colors duration-200">
        {isSignInActive ? 'Sign In' : 'Sign Up'}
      </button>
      <p className="text-gray-400 text-sm ">
        {isSignInActive ? ' New To NetflixAI ?' : 'Already a member ?'}

        <span
          className="cursor-pointer text-white ml-2 font-bold hover:underline"
          onClick={handleFormToggle}
        >
          {isSignInActive ? 'Sign Up' : 'Sign In'}
        </span>
      </p>
    </form>
  )
}
export default Form
