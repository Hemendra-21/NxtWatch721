import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {RxCross2} from 'react-icons/rx'
import {MdOutlineSearch} from 'react-icons/md'

import Header from '../Header/index'
import Sidebar from '../Sidebar/index'
import HomeVideos from '../HomeVideos/index'
import FailureView from '../FailureView/index'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  HomeContainer,
  HomeBannerContainer,
  HomeBannerContent,
  BannerLogo,
  BannerDescription,
  BannerButton,
  BannerRemoveButton,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeApiStatus: apiStatusConstants.initial,
    showBanner: true,
    searchInput: '',
    homeVideos: [],
  }

  componentDidMount() {
    this.getHomeData()
  }

  getHomeData = async () => {
    const {searchInput} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    this.setState({homeApiStatus: apiStatusConstants.inProgress})

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
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
        homeVideos: formattedData,
        homeApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({homeApiStatus: apiStatusConstants.failure})
    }
  }

  onClickRemoveBannerButton = () => {
    this.setState({showBanner: false})
  }

  getHomePageBanner = () => (
    <HomeBannerContainer data-testid="banner">
      <HomeBannerContent>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </HomeBannerContent>
      <BannerRemoveButton
        type="button"
        onClick={this.onClickRemoveBannerButton}
        data-testid="close"
      >
        <RxCross2 size={20} />
      </BannerRemoveButton>
    </HomeBannerContainer>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getHomeData()
  }

  onClickRetryButton = () => {
    console.log('clicked')
    this.setState({searchInput: ''}, this.getHomeData)
  }

  getSearchBar = (theme, searchIconColor) => {
    const {searchInput} = this.state
    return (
      <>
        <SearchInput
          type="search"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
          isDarkTheme={theme}
        />
        <SearchButton
          type="button"
          onClick={this.onClickSearchButton}
          isDarkTheme={theme}
          data-testid="searchButton"
        >
          <MdOutlineSearch size={18} color={searchIconColor} />
        </SearchButton>
      </>
    )
  }

  renderSpinner = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  homeVideosSectionData = () => {
    const {homeApiStatus, homeVideos} = this.state

    switch (homeApiStatus) {
      case apiStatusConstants.success:
        return (
          <HomeVideos homeVideos={homeVideos} retry={this.onClickRetryButton} />
        )
      case apiStatusConstants.failure:
        return <FailureView retry={this.onClickRetryButton} />
      case apiStatusConstants.inProgress:
        return this.renderSpinner()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const searchIconColor = isDarkTheme ? '#909090' : '#424242'
          return (
            <>
              <Header />
              <Sidebar />
              <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
                {showBanner && this.getHomePageBanner()}
                <SearchBarContainer>
                  {this.getSearchBar(isDarkTheme, searchIconColor)}
                </SearchBarContainer>
                {this.homeVideosSectionData()}
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
