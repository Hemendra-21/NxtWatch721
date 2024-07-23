import {SiYoutubegaming} from 'react-icons/si'

import {
  GamingVideosContainer,
  GamingTitleIconContainer,
  GamingVideoTitle,
  GamingVideoList,
  IconContainer,
} from './styledComponents'

import NxtWatchContext from '../../Context/NxtWatchContext'
import GameCard from '../GameCard/index'

const GamingVideos = props => {
  const {gamingVideos} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingVideosContainer isDarkTheme={isDarkTheme} data-testid="gaming">
            <GamingTitleIconContainer isDarkTheme={isDarkTheme}>
              <IconContainer isDarkTheme={isDarkTheme}>
                <SiYoutubegaming color="red" size={40} />
              </IconContainer>
              <GamingVideoTitle isDarkTheme={isDarkTheme}>
                Gaming
              </GamingVideoTitle>
            </GamingTitleIconContainer>

            <GamingVideoList>
              {gamingVideos.map(eachItem => (
                <GameCard gameDetails={eachItem} key={eachItem.id} />
              ))}
            </GamingVideoList>
          </GamingVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideos
