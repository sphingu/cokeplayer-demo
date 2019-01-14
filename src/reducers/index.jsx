import * as t from '../actionTypes'

const initialState = {
  songs: [],
  filteredSongs: [],
  selectedSong: null,
  isPlay: false,
  isLoading: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.GET_SONGS_REQUEST:
      // show loader on get songs api call
      return Object.assign({}, state, {
        isLoading: true
      })

    case t.GET_SONGS_SUCCESS:
      // set songs into state got from api call
      return Object.assign({}, state, {
        songs: action.songs,
        filteredSongs: action.songs,
        isLoading: false,
        errorMessage: null
      })

    case t.GET_SONGS_ERROR:
      // set error message got while api call
      return Object.assign({}, state, {
        songs: [],
        filteredSongs: [],
        isLoading: false,
        errorMessage: action.error
      })

    case t.SEARCH_TEXT_CHANGE:
      // update filtered Songs list as per search text
      if (action.text.trim().length) {
        return Object.assign({}, state, {
          filteredSongs: state.songs.filter(
            song => song.song.toLowerCase().indexOf(action.text.trim()) !== -1
          )
        })
      }
      // show all songs if search text empty
      return Object.assign({}, state, {
        filteredSongs: state.songs
      })

    case t.TOGGLE_FAVOURITE:
      // set song as favourite in songs & filtered songs list
      return Object.assign({}, state, {
        filteredSongs: state.filteredSongs.map(song =>
          Object.assign({}, song, {
            isFavourite:
              song.song === action.songName
                ? !song.isFavourite
                : song.isFavourite
          })
        ),
        songs: state.songs.map(song =>
          Object.assign({}, song, {
            isFavourite:
              song.song === action.songName
                ? !song.isFavourite
                : song.isFavourite
          })
        )
      })

    case t.PLAY_SONG:
      // set song as selected and play it
      return Object.assign({}, state, {
        selectedSong: action.song,
        isPlay: true
      })

    case t.SELECT_SONG:
      // only set song as selected
      return Object.assign({}, state, {
        selectedSong: action.song
      })

    case t.PLAY:
      // play song
      return Object.assign({}, state, {
        isPlay: true
      })

    case t.PAUSE:
      // pause song
      return Object.assign({}, state, {
        isPlay: false
      })

    default:
      return state
  }
}
