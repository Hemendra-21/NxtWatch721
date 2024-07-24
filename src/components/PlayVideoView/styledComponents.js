import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoContentContainer = styled.div`
  padding: 30px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100vw;
  margin-left: 250px;
  margin-top: 80px;
`

export const ReactVideoPlayer = styled(ReactPlayer)``

export const VideoItemHeading = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  margin-top: 20px;
`

export const VideoItemDescriptionContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
`

export const ViewsCount = styled.p``

export const PublishedAt = styled.p``

export const LikesAndSaveContainer = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
`

export const EventButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const ButtonText = styled.span`
  margin-left: 5px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.color};
`

export const Divider = styled.hr`
  border: 1.5px solid #cccccc;
  margin-bottom: 30px;
`

export const CommentContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: flex-start;
`

export const CommentProfileImg = styled.img`
  height: 50px;
  margin-right: 20px;
`

export const CommentDetailsContainer = styled.div``

export const CommentChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#424242')};
  margin-top: 0;
`

export const SubscriberCount = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`

export const Comment = styled.p`
  color: ${props => (props.isDarkTheme ? ' #f4f4f4' : '#7e858e')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-top: 30px;
  line-height: 1.5;
`
