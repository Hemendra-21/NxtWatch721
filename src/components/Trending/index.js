import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header/index'
import Sidebar from '../Sidebar/index'
import TrendingVideos from '../TrendingVideos/index'
import FailureView from '../FailureView/index'

import {TrendingVideosContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: ''}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const TrendingVideosUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(TrendingVideosUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const formattedData = data.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideos: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingVideos = () => {
    const {apiStatus, trendingVideos} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return <TrendingVideos trendingVideos={trendingVideos} />
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return <FailureView retry={this.getTrendingVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <Sidebar />
        {this.renderTrendingVideos()}
      </>
    )
  }
}

export default Trending
