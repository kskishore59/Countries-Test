import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #161624;
`

export const MainHeading = styled.h1`
  color: white;
  font-family: 'Roboto';
`

export const TopContainer = styled.div`
  width: 80%;
  border-radius: 10px;
  overflow-y: auto;
  height: 50%;
  background-color: #334155;
  margin-top: 200px;
  background-size: cover;
`

export const ListNames = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const ImageList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`
