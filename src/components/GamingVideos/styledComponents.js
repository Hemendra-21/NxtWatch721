import styled from 'styled-components'

export const GamingVideosContainer = styled.div`
  min-height: 100vh;
  background-color: blue;
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  margin-top: 80px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9 ')};
`
export const GamingVideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  margin-left: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const GamingTitleIconContainer = styled.div`
  width: 100%;
  padding-left: 100px;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#ebebeb')};
`
export const GamingText = styled.h1`
  font-family: Roboto;
  font-size: 35px;
  color: ${props => props.color};
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  margin-left: 40px;
  width: 100%;
  margin-top: 50px;
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
