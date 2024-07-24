import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import NxtWatchContext from '../../Context/NxtWatchContext'
import './index.css'
import {
  Navbar,
  NavContentContainer,
  NavLogo,
  NavbarRightContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  LogoutView,
  LogoutPopupContainer,
  LogoutPopupHeading,
  PopupButtonsContainer,
  PopupCancelButton,
  PopupConfirmButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, onToggleTheme} = value

        const HeaderThemeButton = isDarkTheme ? (
          <BsBrightnessHigh size={30} color="#ffffff" />
        ) : (
          <BsMoon size={30} />
        )

        const navbarLogoOnTheme = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <Navbar isDarkTheme={isDarkTheme}>
            <NavContentContainer>
              <Link to="/">
                <NavLogo src={navbarLogoOnTheme} alt="website logo" />
              </Link>
              <NavbarRightContainer>
                <ThemeButton
                  type="button"
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  {HeaderThemeButton}
                </ThemeButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopupContainer isDarkTheme={isDarkTheme}>
                      <LogoutPopupHeading isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout?
                      </LogoutPopupHeading>
                      <PopupButtonsContainer>
                        <PopupCancelButton onClick={() => close()}>
                          Cancel
                        </PopupCancelButton>
                        <PopupConfirmButton onClick={() => onClickLogout()}>
                          Confirm
                        </PopupConfirmButton>
                      </PopupButtonsContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </NavbarRightContainer>
            </NavContentContainer>
          </Navbar>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
