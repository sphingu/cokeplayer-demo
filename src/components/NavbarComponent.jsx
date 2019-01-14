import React from 'react'

import { Tooltip, Position } from '@blueprintjs/core'

// tooltip on current playing song
const SongTooltip = ({ cover_image, song, artists }) => {
  return (
    <Tooltip
      position={Position.BOTTOM}
      className="pt-tooltip-indicator"
      content={
        <div className="box margin-5" style={{ textAlign: 'center' }}>
          <div className="box">
            <img
              src={cover_image}
              alt={song}
              style={{ maxHeight: 100, maxWidth: 100 }}
            />
          </div>
          <div className="box">
            <b>Song : </b> {song}
          </div>
          <div className="box">
            <b>Artists : </b> {artists}
          </div>
        </div>
      }
    >
      {song}
    </Tooltip>
  )
}

export default class extends React.Component {
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
    const { selectedSong, isPlay, onSearchTextChange } = this.props
    return (
      <nav className="pt-navbar pt-dark">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Reactive Coke Studio</div>

          <input
            onChange={event => onSearchTextChange(event.target.value)}
            className="pt-input"
            placeholder="Search song..."
            type="text"
            ref="search"
          />

          {/* show selected song name with play/pause button*/}
          {selectedSong && (
            <div className="box" style={{ marginLeft: 100 }}>
              <button
                className={`pt-button pt-minimal pt-icon-${
                  isPlay ? 'pause' : 'play'
                }`}
                onClick={this.onTogglePlayClick.bind(this)}
              >
                {' '}
              </button>
              <SongTooltip {...selectedSong} />
              <audio
                src={selectedSong.url}
                autoPlay={isPlay}
                preload="auto"
                ref="player"
              />
            </div>
          )}
        </div>
      </nav>
    )
  }
}
