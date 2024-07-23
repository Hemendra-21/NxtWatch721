import styled from 'styled-components'

export const LoginPageOuterContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginPageContainer = styled.form`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  height: 420px;
  width: 400px;
  padding: 40px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
`
export const LoginPageLogo = styled.img`
  height: 40px;
  width: 170px;
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

export const LabelName = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
  margin-bottom: 5px;
  font-weight: 500;
`

export const InputField = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #475569;
  padding-left: 10px;
  outline: none;
  border-radius: 5px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? ' #f8fafc' : '#000000')};
`
export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`
export const Checkbox = styled.input`
  margin-right: 10px;
`

export const ShowPasswordText = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-weight: 500;
`

export const ErrorMsgText = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
  align-self: flex-start;
  padding: 0;
  margin: 0;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 30px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
`
