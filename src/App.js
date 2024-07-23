import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login/index'
import Home from './components/Home/index'
import VideoItemDetails from './components/VideoItemDetails/index'
import Trending from './components/Trending/index'
import Gaming from './components/Gaming/index'
import Saved from './components/Saved/index'
import NotFound from './components/NotFound/index'

import ProtectedRoute from './components/ProtectedRoute/index'
import NxtWatchContext from './Context/NxtWatchContext'

class App extends Component {
  state = {
    activeTab: 'Home',
    isDarkTheme: false,
    savedVideos: [],
  }

  onChangeActiveTab = tabName => {
    this.setState({activeTab: tabName})
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSavedVideos = videoId => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoId],
    }))
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          activeTab,
          onChangeActiveTab: this.onChangeActiveTab,
          isDarkTheme,
          onToggleTheme: this.onToggleTheme,
          savedVideos,
          addToSavedVideos: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved" component={Saved} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
