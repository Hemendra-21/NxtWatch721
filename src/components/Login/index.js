import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  LoginPageOuterContainer,
  LoginPageContainer,
  LoginPageLogo,
  InputContainer,
  InputField,
  LabelName,
  CheckboxContainer,
  Checkbox,
  ShowPasswordText,
  ErrorMsgText,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMsg: errMsg, showErrorMsg: true})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {
            username,
            password,
            showPassword,
            errorMsg,
            showErrorMsg,
          } = this.state

          const loginPageLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginPageOuterContainer isDarkTheme={isDarkTheme}>
              <LoginPageContainer
                onSubmit={this.onSubmitLogin}
                isDarkTheme={isDarkTheme}
              >
                <LoginPageLogo src={loginPageLogo} alt="website logo" />
                <InputContainer>
                  <LabelName htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </LabelName>
                  <InputField
                    type="text"
                    id="username"
                    onChange={this.onChangeUsername}
                    value={username}
                    placeholder="Username"
                    isDarkTheme={isDarkTheme}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelName htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </LabelName>
                  {!showPassword && (
                    <InputField
                      type="password"
                      id="password"
                      placeholder="password"
                      onChange={this.onChangePassword}
                      value={password}
                      isDarkTheme={isDarkTheme}
                    />
                  )}
                  {showPassword && (
                    <InputField
                      type="text"
                      id="password"
                      placeholder="password"
                      onChange={this.onChangePassword}
                      value={password}
                      isDarkTheme={isDarkTheme}
                    />
                  )}
                </InputContainer>
                {showErrorMsg && <ErrorMsgText>*{errorMsg}</ErrorMsgText>}

                <CheckboxContainer onClick={this.onClickShowPassword}>
                  <Checkbox type="checkbox" id="showPassword" />
                  <ShowPasswordText
                    htmlFor="showPassword"
                    isDarkTheme={isDarkTheme}
                  >
                    Show Password
                  </ShowPasswordText>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
              </LoginPageContainer>
            </LoginPageOuterContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
