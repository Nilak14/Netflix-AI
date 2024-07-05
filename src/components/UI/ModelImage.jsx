import {IMG_LINK} from '../../utils/constant'
import noImage from '../../assets/noImage.jpg'
const ModelImage = ({imagePath, name}) => {
  const image = imagePath ? IMG_LINK + imagePath : noImage
  return (
    <img
      className="w-full object-cover max-h-[70vh] brightness-50"
      src={image}
      alt={name}
    />
  )
}
export default ModelImage
