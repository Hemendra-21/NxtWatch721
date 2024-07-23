import {
  GameCardItem,
  NavLink,
  GameCardImage,
  GameCardTitle,
  GameCardViews,
} from './styledComponents'

import NxtWatchContext from '../../Context/NxtWatchContext'

const GameCard = props => {
  const {gameDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gameDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GameCardItem>
            <NavLink to={`/videos/${id}`}>
              <GameCardImage src={thumbnailUrl} alt="video thumbnail" />
              <GameCardTitle isDarkTheme={isDarkTheme}>{title}</GameCardTitle>
              <GameCardViews>{viewCount} watching worldwide</GameCardViews>
            </NavLink>
          </GameCardItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameCard
