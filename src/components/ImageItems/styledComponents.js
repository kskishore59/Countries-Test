import styled from 'styled-components'

export const ImageListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
`

export const ImageItem = styled.img`
  height: 200px;
  width: 200px;
`

export const ImageBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
`

export const CountryName = styled.p`
  font-family: 'Roboto';
  color: white;
`
export const RemoveButton = styled.button`
  padding: 10px;
  background-color: transparent;
  color: white;
  font-family: Roboto;
  border: 0px none;
`
