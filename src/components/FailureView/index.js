import {
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const FailureView = props => {
  const {retry} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FailureViewContainer>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. <br /> Please
              try again.
            </FailureDescription>
            <RetryButton type="button" onClick={() => retry()}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
