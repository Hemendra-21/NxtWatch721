import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  min-height: 100vh;
  background-color: blue;
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  margin-top: 80px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
`

export const TrendingVideosTitleContainer = styled.div`
  width: 100%;
  padding-left: 100px;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#ebebeb')};
`

export const TrendingVideosTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  margin-left: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const TrendingVideosList = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 40px;
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
