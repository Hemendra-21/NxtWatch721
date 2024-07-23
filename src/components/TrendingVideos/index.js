import {HiFire} from 'react-icons/hi'

import {
  TrendingVideosContainer,
  TrendingVideosTitleContainer,
  TrendingVideosTitle,
  TrendingVideosList,
  IconContainer,
} from './styledComponents'

import NxtWatchContext from '../../Context/NxtWatchContext'
import VideoCard from '../VideoCard/index'

const TrendingVideos = props => {
  const {trendingVideos} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingVideosContainer
            isDarkTheme={isDarkTheme}
            data-testid="trending"
          >
            <TrendingVideosTitleContainer isDarkTheme={isDarkTheme}>
              <IconContainer isDarkTheme={isDarkTheme}>
                <HiFire color="red" size={40} />
              </IconContainer>
              <TrendingVideosTitle isDarkTheme={isDarkTheme}>
                Trending
              </TrendingVideosTitle>
            </TrendingVideosTitleContainer>
            <TrendingVideosList>
              {trendingVideos.map(eachVideo => (
                <VideoCard details={eachVideo} key={eachVideo.id} />
              ))}
            </TrendingVideosList>
          </TrendingVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideos
