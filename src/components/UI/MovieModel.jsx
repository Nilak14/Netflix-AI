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

  return type ? (
    <section className="fixed  inset-0 min-h-screen bg-[rgba(0,0,0,0.6)] z-20 flex flex-col items-center justify-between">
      <article
        className="bg-black absolute w-[min(100vw,800px)] h-[50vh] overflow-y-auto rounded-lg top-[20%] "
        // style={{top: `${scrollPosition + 70}px`}}
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
  ) : (
    <section className="absolute top-[-70px] inset-0 min-h-screen bg-[rgba(0,0,0,0.6)] z-20 flex flex-col items-center justify-between">
      <article
        className="bg-black absolute w-[min(100vw,800px)] h-[50vh] overflow-y-auto rounded-lg "
        style={{top: `${scrollPosition + 70}px`}}
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
