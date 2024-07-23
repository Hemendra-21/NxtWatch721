import styled from 'styled-components'

export const HomeVideosContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 50px;
  padding: 0;
  overflow: none;
`

export const NoResultsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 100%;
`

export const NoResultsViewImage = styled.img`
  height: 250px;
  margin-bottom: 20px;
`
export const NoResultsViewHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#383838')};
`
export const NoResultsViewDescription = styled.p`
  text-align: center;
  color: #606060;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 450;
`

export const NoResultsViewRetryButton = styled.button`
  height: 35px;
  width: 100px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  border-radius: 5px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
