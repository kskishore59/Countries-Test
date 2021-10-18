import {ListItemName, VisitText, VisitButton, Name} from './styledComponents'

const NameItem = props => {
  const {details, onChangeVisit} = props
  const {id, name, isVisited} = details

  const onClickVisit = () => {
    onChangeVisit(id)
  }

  return (
    <ListItemName>
      <Name>{name}</Name>
      {isVisited === true ? (
        <VisitText>Visited</VisitText>
      ) : (
        <VisitButton onClick={onClickVisit}>Visit</VisitButton>
      )}
    </ListItemName>
  )
}

export default NameItem
