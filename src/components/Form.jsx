import {useEffect, useRef, useState} from 'react'
import {RxCrossCircled} from 'react-icons/rx'
import formValidation from '../utils/formValidation'
import {IoEye} from 'react-icons/io5'
import {IoEyeOff} from 'react-icons/io5'
import {auth} from '../Firebase/firebase'
import {useDispatch, useSelector} from 'react-redux'
// import {addUser} from '../Redux/Slices/userSlice'
import {useNavigate} from 'react-router-dom'
import {
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword,
} from '../Firebase/auth'

const Form = () => {
  const [isSignInActive, setIsSignInActive] = useState(true)
  const [emailErrorMsg, setEmailErrorMsg] = useState(null)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fullName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const userLoggedIn = useSelector((store) => store.userSlice.userLoggedIn)

  useEffect(() => {
    if (isSignInActive) {
      email.current.value = 'guest001@netflix.com'
      password.current.value = 'Guest001#'
    } else {
      email.current.value = ''
      password.current.value = ''
      if (fullName.current) {
        fullName.current.value = ''
      }
    }
  }, [isSignInActive])

  const handleFormValidation = async () => {
    const msg = formValidation(email.current.value, password.current.value)
    if (msg?.includes('email')) {
      setEmailErrorMsg(msg)
      setPasswordErrorMsg(null)
    } else if (msg?.includes('password')) {
      setPasswordErrorMsg(msg)
      setEmailErrorMsg(null)
    }
    if (msg !== null) return

    setEmailErrorMsg(null)
    setPasswordErrorMsg(null)

    if (!isSignInActive) {
      // sign up logic
      await doCreateUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      ).catch((err) => {
        if (err.code === 'auth/network-request-failed') {
          setErrorMessage('Network error, please try again.')
        } else {
          setErrorMessage(err.message)
        }
      })
    } else {
      // login logic
      await doSignInWithEmailAndPassword(
        email.current.value,
        password.current.value
      ).catch((err) => setErrorMessage(err.message))
    }
  }

  const handleFormToggle = () => {
    setErrorMessage(null)
    setIsSignInActive(!isSignInActive)
  }

  const togglePassword = (e) => {
    e.preventDefault()
    setIsPasswordHidden(!isPasswordHidden)
  }
  useEffect(() => {
    if (userLoggedIn) {
      navigate('/browse')
    }
  }, [userLoggedIn, navigate])

  return (
    <form
      className="text-white tracking-wider w-[90vw] sm:w-[90%] mx-auto flex flex-col gap-8 "
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
          <p className="flex mt-3 items-center gap-2 netflixText text-sm font-bold ">
            <RxCrossCircled className="text-lg" />
            {emailErrorMsg}
          </p>
        )}
      </div>
      <div>
        <div className="relative">
          <input
            ref={password}
            className=" relative rounded-sm w-full outline-none focus:border-white focus:border-2   bg-[#0F0F0F]  px-2 py-3"
            type={isPasswordHidden ? 'password' : 'text'}
            placeholder="Password"
          />
          <div
            onClick={togglePassword}
            className="absolute top-1/2 translate-y-[-50%] right-5  "
          >
            {isPasswordHidden ? (
              <IoEyeOff className="text-lg" />
            ) : (
              <IoEye className="text-lg" />
            )}
          </div>
        </div>

        {passwordErrorMsg && (
          <p className="flex mt-3 items-center gap-2 netflixText text-sm font-bold">
            <RxCrossCircled className="text-lg" />
            {passwordErrorMsg}
          </p>
        )}
      </div>
      {errorMessage && (
        <p className="netflixText text-sm font-bold">{errorMessage}</p>
      )}

      <button className="netflixBG py-3 rounded-sm font-bold text-lg hover:bg-red-700 transition-colors duration-200 select-none">
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
