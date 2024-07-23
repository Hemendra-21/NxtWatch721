import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.nav`
  position: fixed;
  top: 80px;
  width: 250px;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  padding-top: 30px;
  overflow: none;
`
export const SidebarOptions = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 0;
  padding-left: 0;
  width: 100%;
  padding-top: 0;
  margin-top: 0;
`

export const NavLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`

export const SidebarItem = styled.li`
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  cursor: pointer;
`

export const SidebarItemName = styled.p`
  text-align: left;
  margin-left: 20px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.isActive ? 650 : 450)};
  color: ${props => props.color};
`

export const ContactUsContainer = styled.div`
  padding-left: 30px;
  padding-bottom: 30px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const CompaniesContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const CompanyLogo = styled.img`
  height: 30px;
  margin-right: 20px;
`
export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  line-height: 1.5;
`
