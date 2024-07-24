import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameCardItem = styled.li`
  list-style-type: none;
  width: 30%;
  margin-bottom: 50px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const GameCardImage = styled.img`
  height: 320px;
  width: 90%;
  margin-bottom: 20px;
`
export const GameCardTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
`

export const GameCardViews = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`
