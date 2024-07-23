import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  margin-top: 80px;
  margin-left: 100px;
`

export const FailureImg = styled.img`
  height: 250px;
  margin-bottom: 20px;
`
export const FailureHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#383838')};
`
export const FailureDescription = styled.p`
  text-align: center;
  color: #606060;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 450;
`

export const RetryButton = styled.button`
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
