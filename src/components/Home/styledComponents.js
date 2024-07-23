import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 80px;
  margin-left: 250px;
  min-height: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#181818 ' : ' #f9f9f9 ')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const HomeBannerContainer = styled.div`
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 280px;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HomeBannerContent = styled.div``

export const BannerLogo = styled.img`
  height: 30px;
`

export const BannerDescription = styled.p`
  color: #231f20;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 15px;
`

export const BannerButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: 100px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
`

export const BannerRemoveButton = styled.button`
  border: none;
  align-self: flex-start;
  background-color: transparent;
  cursor: pointer;
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #616e7c;
  height: 30px;
  width: 400px;
  margin-top: 30px;
  margin-left: 20px;
  align-self: flex-start;
`

export const SearchInput = styled.input`
  border: none;
  height: 100%;
  width: 85%;
  border-right: 1px solid #616e7c;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Roboto';
  font-weight: 600;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const SearchButton = styled.button`
  height: 30px;
  width: 15%;
  background-color: ${props => (props.isDarkTheme ? ' #313131' : ' #f4f4f4')};
  border: 1px solid #606060;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
`
