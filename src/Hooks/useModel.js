import {useState} from 'react'

const useModel = () => {
  const [isModelActive, setIsModelActive] = useState(false)
  const closeModel = () => {
    setIsModelActive(false)
  }
  const openModel = () => {
    setIsModelActive(true)
  }
  return [openModel, closeModel, isModelActive]
}
export default useModel
