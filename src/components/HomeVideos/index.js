import HomeVideoItem from '../HomeVideoItem/index'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  HomeVideosContainer,
  NoResultsViewContainer,
  NoResultsViewImage,
  NoResultsViewHeading,
  NoResultsViewDescription,
  NoResultsViewRetryButton,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, retry} = props
  const videosCount = homeVideos.length

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return videosCount !== 0 ? (
          <HomeVideosContainer>
            {homeVideos.map(eachItem => (
              <HomeVideoItem details={eachItem} key={eachItem.id} />
            ))}
          </HomeVideosContainer>
        ) : (
          <NoResultsViewContainer>
            <NoResultsViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultsViewHeading isDarkTheme={isDarkTheme}>
              No search results found
            </NoResultsViewHeading>
            <NoResultsViewDescription>
              Try different keywords or remove search filter
            </NoResultsViewDescription>
            <NoResultsViewRetryButton onClick={() => retry()}>
              Retry
            </NoResultsViewRetryButton>
          </NoResultsViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideos
