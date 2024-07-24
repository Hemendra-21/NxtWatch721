import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  SidebarContainer,
  SidebarOptions,
  SidebarItem,
  SidebarItemName,
  ContactUsContainer,
  ContactUsHeading,
  CompaniesContainer,
  CompanyLogo,
  ContactUsDescription,
  NavLink,
} from './styledComponents'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeTab, onChangeActiveTab, isDarkTheme} = value

      const tabBgColor = isDarkTheme ? '#212121' : '#ffffff'
      const activeTabBgColor = isDarkTheme ? '#424242' : '#e2e8f0'

      const tabColor = isDarkTheme ? ' #ebebeb' : '#212121'
      const activeTabColor = isDarkTheme ? ' #f9f9f9' : '#212121'

      const tabIconColor = isDarkTheme ? '#f4f4f4' : '#616e7c'
      const activeTabIconColor = '#ff0000'

      const onClickHomeTab = () => {
        onChangeActiveTab('Home')
      }

      const onClickTrendingTab = () => {
        onChangeActiveTab('Trending')
      }

      const onClickGamingTab = () => {
        onChangeActiveTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        onChangeActiveTab('Saved')
      }

      return (
        <SidebarContainer isDarkTheme={isDarkTheme}>
          <SidebarOptions>
            <NavLink to="/">
              <SidebarItem
                onClick={onClickHomeTab}
                bgColor={activeTab === 'Home' ? activeTabBgColor : tabBgColor}
              >
                <IoMdHome
                  size={25}
                  color={
                    activeTab === 'Home' ? activeTabIconColor : tabIconColor
                  }
                />
                <SidebarItemName
                  color={activeTab === 'Home' ? activeTabColor : tabColor}
                  isActive={activeTab === 'Home'}
                >
                  Home
                </SidebarItemName>
              </SidebarItem>
            </NavLink>

            <NavLink to="/trending">
              <SidebarItem
                onClick={onClickTrendingTab}
                bgColor={
                  activeTab === 'Trending' ? activeTabBgColor : tabBgColor
                }
              >
                <FaFire
                  size={25}
                  color={
                    activeTab === 'Trending' ? activeTabIconColor : tabIconColor
                  }
                />
                <SidebarItemName
                  color={activeTab === 'Trending' ? activeTabColor : tabColor}
                  isActive={activeTab === 'Trending'}
                >
                  Trending
                </SidebarItemName>
              </SidebarItem>
            </NavLink>

            <NavLink to="/gaming">
              <SidebarItem
                onClick={onClickGamingTab}
                bgColor={activeTab === 'Gaming' ? activeTabBgColor : tabBgColor}
              >
                <SiYoutubegaming
                  size={25}
                  color={
                    activeTab === 'Gaming' ? activeTabIconColor : tabIconColor
                  }
                />
                <SidebarItemName
                  color={activeTab === 'Gaming' ? activeTabColor : tabColor}
                  isActive={activeTab === 'Gaming'}
                >
                  Gaming
                </SidebarItemName>
              </SidebarItem>
            </NavLink>

            <NavLink to="/saved-videos">
              <SidebarItem
                onClick={onClickSavedVideosTab}
                bgColor={activeTab === 'Saved' ? activeTabBgColor : tabBgColor}
              >
                <MdPlaylistAdd
                  size={25}
                  color={
                    activeTab === 'Saved' ? activeTabIconColor : tabIconColor
                  }
                />
                <SidebarItemName
                  color={activeTab === 'Saved' ? activeTabColor : tabColor}
                  isActive={activeTab === 'Saved'}
                >
                  Saved Videos
                </SidebarItemName>
              </SidebarItem>
            </NavLink>
          </SidebarOptions>

          <ContactUsContainer>
            <ContactUsHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactUsHeading>
            <CompaniesContainer>
              <CompanyLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <CompanyLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <CompanyLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </CompaniesContainer>
            <ContactUsDescription isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
