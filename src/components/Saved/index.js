import {HiFire} from 'react-icons/hi'

import {
  SavedVideosContainer,
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

          {savedVideos.length > 0 ? (
            <SavedVideosContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
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
            </SavedVideosContainer>
          ) : (
            <NoSavedVideosContainer isDarkTheme={isDarkTheme}>
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
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Saved
