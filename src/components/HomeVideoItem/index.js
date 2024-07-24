import {BsDot} from 'react-icons/bs'
import {
  ListItem,
  VideoThumbnail,
  ListItemDetails,
  ChannelLogo,
  VideoDetails,
  VideoTitle,
  ChannelName,
  ViewsCountAndDate,
  NavLink,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {details} = props
      const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
      const {name, profileImageUrl} = channel

      return (
        <ListItem>
          <NavLink to={`/videos/${id}`}>
            <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <ListItemDetails>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <VideoDetails>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <ChannelName>{name}</ChannelName>
                <ViewsCountAndDate>
                  {viewCount} views <BsDot size={25} /> {publishedAt}
                </ViewsCountAndDate>
              </VideoDetails>
            </ListItemDetails>
          </NavLink>
        </ListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoItem
