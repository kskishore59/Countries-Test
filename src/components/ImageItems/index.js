import {
  ImageListItem,
  ImageItem,
  ImageBottomContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const ImageName = props => {
  const {details, onRemoveItem} = props
  const {id, name, imageUrl} = details

  const onClickRemove = () => {
    onRemoveItem(id)
  }

  return (
    <ImageListItem>
      <ImageItem src={imageUrl} alt="thumbnail" />
      <ImageBottomContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton onClick={onClickRemove}>Remove</RemoveButton>
      </ImageBottomContainer>
    </ImageListItem>
  )
}

export default ImageName
