import React from 'react'

const NxtWatchContext = React.createContext({
  activeTab: '',
  onChangeActiveTab: () => {},
  isDarkTheme: '',
  onToggleTheme: () => {},
  savedVideos: '',
  addToSavedVideos: () => {},
})

export default NxtWatchContext
