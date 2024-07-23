import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  background-color: #f8fafc;
  min-height: 100vh;
`

export const VideoItemDetailsBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f8fafc')};
`

export const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
