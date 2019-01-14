import React from 'react'
import { connect } from 'react-redux'
import * as t from '../actionTypes'
import HomeComponent from '../components/HomeComponent'
class Home extends React.Component {
  componentDidMount() {
    // call api to load songs
    this.props.loadSongs()
  }
  render() {
    return <HomeComponent {...this.props} />
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  loadSongs: () => {
    dispatch({ type: t.GET_SONGS_REQUEST })
    fetch('http://starlord.hackerearth.com/sureify/cokestudio')
      .then(response => {
        return response.json()
      })
      .then(data => {
        dispatch({ type: t.GET_SONGS_SUCCESS, songs: data })
      })
      .catch(error => {
        dispatch({
          type: t.GET_SONGS_ERROR,
          error: 'An error encountered while getting songs'
        })
      })
  },
  onCardClick: song => {
    dispatch({ type: t.PLAY_SONG, song })
  },
  onFavouriteToggle: songName => {
    dispatch({ type: t.TOGGLE_FAVOURITE, songName })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
