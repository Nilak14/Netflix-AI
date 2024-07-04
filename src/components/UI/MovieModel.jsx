import {useEffect, useState} from 'react'

const MovieModel = ({close, type}) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const currentScrollPosition = window.scrollY
    setScrollPosition(currentScrollPosition)

    document.body.classList.add('no-scroll')

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  const articleStyle = {
    top: type ? '20%' : `${scrollPosition + 70}px`,
  }

  return (
    <section
      className={` ${
        type ? 'fixed ' : 'absolute top-[-70px]'
      }  inset-0 min-h-screen bg-[rgba(0,0,0,0.6)] z-20 flex flex-col items-center justify-between`}
    >
      <article
        className={`bg-black absolute w-[min(100vw,800px)] h-[50vh] overflow-y-auto rounded-lg `}
        style={articleStyle}
      >
        <p>Movie Model</p>
        <button
          onClick={() => close()}
          className="netflixBG px-5 rounded-md py-1"
        >
          X
        </button>
      </article>
    </section>
  )
}

export default MovieModel
