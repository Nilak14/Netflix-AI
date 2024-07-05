import {useEffect, useState} from 'react'
import ModelContent from './ModelContent'

const MovieModel = ({close, location, id, type}) => {
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
    top: location ? '70px' : `${scrollPosition + 70}px`,
  }

  return (
    <section
      className={` ${
        location ? 'fixed ' : 'absolute top-[-70px]'
      }  inset-0 min-h-screen bg-[rgba(0,0,0,0.6)] z-20 flex flex-col items-center justify-between`}
    >
      <article
        className={`bg-neutral-900 absolute w-[min(100vw,800px)] h-[100vh] overflow-y-auto rounded-lg no-scrollbar shadow-lg shadow-black pb-[170px] sm:pb-[100px] `}
        style={articleStyle}
      >
        <ModelContent type={type} id={id} close={close} />
      </article>
    </section>
  )
}

export default MovieModel
