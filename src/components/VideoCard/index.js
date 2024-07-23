import {BsDot} from 'react-icons/bs'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  VideoCardContainer,
  VideoCardThumbnail,
  VideoCardDetails,
  VideoTitle,
  VideoCardChannelName,
  ViewsAndDateContainer,
  ViewsCount,
  PublishedAt,
  NavLink,
} from './styledComponents'

const VideoCard = props => {
  const {details} = props
  console.log(details)
  const {id, thumbnailUrl, title, channel, viewCount, publishedAt} = details
  const {name} = channel
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NavLink to={`/videos/${id}`}>
            <VideoCardContainer isDarkTheme={isDarkTheme}>
              <VideoCardThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardDetails>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoCardChannelName>{name}</VideoCardChannelName>
                <ViewsAndDateContainer>
                  <ViewsCount>{viewCount} views</ViewsCount>
                  <BsDot size={20} />
                  <PublishedAt>{publishedAt}</PublishedAt>
                </ViewsAndDateContainer>
              </VideoCardDetails>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
