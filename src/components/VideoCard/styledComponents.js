import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: 30px;
`

export const VideoCardThumbnail = styled.img`
  height: 180px;
  width: 330px;
`
export const VideoCardDetails = styled.div`
  margin-left: 20px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 10px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const VideoCardChannelName = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
  margin-top: 0;
  padding: 0;
`

export const ViewsCount = styled.p`
  margin: 0;
  padding: 0;
`

export const PublishedAt = styled.p`
  margin: 0;
  padding: 0;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
