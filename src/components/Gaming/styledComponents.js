import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const IconContainer = styled.div`
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
  border-radius: 50px;
`
