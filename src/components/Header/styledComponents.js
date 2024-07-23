import styled from 'styled-components'

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  padding-bottom: 10px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`

export const NavContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
`

export const NavLogo = styled.img`
  height: 40px;
  width: 150px;
  cursor: pointer;
`
export const NavbarRightContainer = styled.div`
  width: 17%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  height: 30px;
`

export const LogoutButton = styled.button`
  border: 2px solid ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
  font-family: 'Roboto';
  font-size: 15px;
  height: 35px;
  width: 85px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoutView = styled.div``

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: 0;
  height: 100%;
  border-radius: 5px;
`

export const LogoutPopupHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-weight: 500;
`

export const PopupButtonsContainer = styled.div`
  margin-top: 30px;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PopupCancelButton = styled.button`
  border: 1px solid #7e858e;
  height: 50px;
  width: 120px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #94a3b8;
  font-weight: 500;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
`

export const PopupConfirmButton = styled.button`
  height: 50px;
  width: 120px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`
