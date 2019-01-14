import React from 'react'
import { connect } from 'react-redux'
import * as t from '../actionTypes'

import NavbarComponent from '../components/NavbarComponent'

class Navbar extends React.Component {
  constructor() {
    super()
    this.onTogglePlayClick = this.onTogglePlayClick.bind(this)
  }
  // play/pause current selected song
  onTogglePlayClick() {
    const { isPlay, onPauseClick, onPlayClick } = this.props
    if (isPlay) {
      onPauseClick()
      this.refs.player.pause()
    } else {
      onPlayClick()
      this.refs.player.play()
    }
  }
  render() {
    return (
      <NavbarComponent
        {...this.props}
        onTogglePlayClick={this.onTogglePlayClick}
      />
    )
  }
}

// map whole state to props
const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  onSearchTextChange: searchText => {
    dispatch({ type: t.SEARCH_TEXT_CHANGE, text: searchText })
  },
  onPlayClick: () => {
    dispatch({ type: t.PLAY })
  },
  onPauseClick: () => {
    dispatch({ type: t.PAUSE })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
