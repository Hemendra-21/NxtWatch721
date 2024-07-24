import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: blue;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 250px;
  margin-top: 80px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosViewContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`
export const SavedVideosTitleContainer = styled.div`
  width: 100%;
  padding-left: 100px;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#ebebeb')};
`

export const SavedVideosTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  margin-left: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const SavedVideos = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 40px;
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const NoSavedVideosImg = styled.img`
  height: 300px;
  margin-bottom: 30px;
`
export const NoSavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const NoSavedDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #7e858e;
  font-weight: 500;
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
