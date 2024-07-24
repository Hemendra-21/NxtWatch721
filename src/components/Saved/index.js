import {HiFire} from 'react-icons/hi'

import {
  SavedVideosContainer,
  SavedVideosViewContainer,
  SavedVideosTitleContainer,
  SavedVideosTitle,
  SavedVideos,
  NoSavedVideosContainer,
  NoSavedVideosImg,
  NoSavedHeading,
  NoSavedDescription,
  IconContainer,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

import Header from '../Header/index'
import Sidebar from '../Sidebar/index'
import VideoCard from '../VideoCard/index'

const Saved = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value

      return (
        <>
          <Header />
          <Sidebar />
          <SavedVideosContainer
            data-testid="savedVideos"
            isDarkTheme={isDarkTheme}
          >
            {savedVideos.length > 0 ? (
              <SavedVideosViewContainer>
                <SavedVideosTitleContainer isDarkTheme={isDarkTheme}>
                  <IconContainer isDarkTheme={isDarkTheme}>
                    <HiFire color="red" size={40} />
                  </IconContainer>
                  <SavedVideosTitle isDarkTheme={isDarkTheme}>
                    Saved Videos
                  </SavedVideosTitle>
                </SavedVideosTitleContainer>
                <SavedVideos>
                  {savedVideos.map(eachVideo => (
                    <VideoCard details={eachVideo} key={eachVideo.id} />
                  ))}
                </SavedVideos>
              </SavedVideosViewContainer>
            ) : (
              <NoSavedVideosContainer>
                <NoSavedVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedHeading isDarkTheme={isDarkTheme}>
                  No saved videos found
                </NoSavedHeading>
                <NoSavedDescription>
                  You can save your videos while watching them
                </NoSavedDescription>
              </NoSavedVideosContainer>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Saved
