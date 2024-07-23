import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {VideoItemDetailsBox, SpinnerContainer} from './styledComponents'

import Header from '../Header/index'
import Sidebar from '../Sidebar/index'
import PlayVideoView from '../PlayVideoView/index'
import FailureView from '../FailureView/index'
import NxtWatchContext from '../../Context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isLiked: '',
    isDisliked: '',
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const videoItemDetailsURL = `https://apis.ccbp.in/videos/${id}`

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videoItemDetailsURL, options)

    if (response.ok === true) {
      const data = await response.json()

      const formattedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: formattedData,
      })
    }
  }

  onClickLikeBtn = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onClickDislikeBtn = () => {
    this.setState({isDisliked: true, isLiked: false})
  }

  renderLoader = () => (
    <SpinnerContainer data-testid="loader">
      <Loader type="ThreeDots" />
    </SpinnerContainer>
  )

  onRetryRenderVideoDetails = () => {
    this.getVideoItemDetails()
  }

  renderVideoItemDetailView = () => {
    const {apiStatus, videoDetails, isLiked, isDisliked} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return (
          <PlayVideoView
            details={videoDetails}
            onClickLikeBtn={this.onClickLikeBtn}
            onClickDislikeBtn={this.onClickDislikeBtn}
            isLiked={isLiked}
            isDisliked={isDisliked}
          />
        )
      case apiStatusConstants.failure:
        return <FailureView retry={this.onRetryRenderVideoDetails} />
      default:
        return null
    }
  }

  render() {
    const {apiStatus, videoDetails} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <Sidebar />

              {this.renderVideoItemDetailView()}
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
