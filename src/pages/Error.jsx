import React from 'react'
import svg from '../assets/404.svg'
import {useNavigate} from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className=" h-screen flex flex-col items-center justify-center">
        <img className="md:h-[70vh] md:w-[50vw]" src={svg} alt="svg" />
        <button
          onClick={() => {
            console.log('ok')
            navigate('/')
          }}
          className="py-[12px] px-[15px] netflixBG border-none rounded-md text-white font-bold hover:bg-red-600"
        >
          Back to Home
        </button>
      </div>
    </>
  )
}

export default Error
