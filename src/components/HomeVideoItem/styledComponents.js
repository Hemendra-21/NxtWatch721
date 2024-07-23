import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  list-style-type: none;
  width: 30%;
`

export const VideoThumbnail = styled.img`
  height: 200px;
  width: 100%;
  margin-bottom: 10px;
`
export const ListItemDetails = styled.div`
  display: flex;
  padding-left: 5px;
`

export const ChannelLogo = styled.img`
  height: 40px;
  margin-right: 15px;
`

export const VideoDetails = styled.div`
  width: 100%;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 5px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  margin: 0;
  margin-bottom: 5px;
`

export const ViewsCountAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  margin-bottom: 10px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
